<template>      
  <iframe src="/6.html" frameborder="0" width="100%" height="100%" style="z-index:-3;width:100%;position:fixed;"></iframe>
      <div id="waterfall" ref="waterfall">
    <div class="img-box default-card-animation" v-for="(item, index) in imgsArr_c" :key="index"
        :style="{width: imgWidth + 'px', height: item._height + 'px',background:item.photoUrl}" ref="imgBox">
       <img :data-src="item.photoUrl" id="img"/> 
       <div class="box-font" >{{item.title}}</div>
    </div>
  
    <div class="imgPreview">
      <div><img src="#" alt="" id="imgPreview" >
      </div>
    </div>
    </div>
  </template>
  <script>
    import axios from  "axios"
    import { isMobile } from './utill.js'
    export default {
      name: 'waterfall',
      data() {
        return {
          tilteArr:[],
          titleArr_c:[],
          imgsArr: [],
          imgsArr_c: [], // 渲染的图片
          imgCol: 3, // 图片列数
          imgGap: 5, // 图片间间隔
          loadedCount: 0,
          imgBoxEls: [], // 所有 img-box 元素
          beginIndex: 0,
          colsHeightArr: [], // 保存当前每一列的高度
          reachBottomDistance: 20, // 滚动触底距离，触发加载新图片
          viewHeight: 10, // 窗口视图大小
          showfv:true
        }
      },
      created(){
          axios.get('http://127.0.0.1:8081/images').then(response=>{
              this.imgsArr=response.data
          })
      },  
      computed: {
        isMobile() {
          return isMobile();
        },
        // 容器 waterfall 的宽度
  
        waterfallWidth() {
          return this.$refs["waterfall"].clientWidth;
        },
        // 图片宽度
        imgWidth() {
          return this.colWidth -  2*this.imgGap;
        },
        // 列宽度
        colWidth() {
          return this.waterfallWidth / this.colNum;
        },
        // 列数
        colNum() {
          return this.isMobile ? 2 : this.imgCol;
        }
      },
      watch: {
        imgsArr(newVal, oldVal) {
          if (this.imgsArr_c.length > newVal.length || (this.imgsArr_c.left > 0 && newVal[0] && !newVal[0]._height))
            this.reset();
           this.preLoad();
        }
      },
      methods: {
        swhcyx(){
      
          let _this = this
          _this.showfv= false
            
     },
        // 预加载 设置图片宽高
        preLoad() {
          // forEach 无法通过 item 直接修改数组元素，需用数组下标修改
          this.imgsArr.forEach((item, index) => {
            if (index < this.loadedCount)
              return;
            if (!item.photoUrl) {
              this.imgsArr[index]._height = "0";
              ++this.loadedCount;
              if (this.imgsArr.length === this.loadedCount) {
                this.preloaded();
              }
            } else {
              let img = new Image();
              //document.createElement('img');
              img.src = item.photoUrl;
              img.onload = img.onerror = (e) => {
                // 若加载失败则设置图片高度与宽度一致，加载成功则动态计算图片高度
                this.imgsArr[index]._height = e.type === "load" ? Math.round(this.imgWidth * (img.height / img.width)) : this.imgWidth
                this.imgsArr[index].title=item.title;
                if (e.type === "error") {
                  this.imgsArr[index]._error = true;
                }
                ++this.loadedCount;
                if (this.imgsArr.length === this.loadedCount) {
                  this.preloaded();
                }
              }
            }
          })
        },
        preloaded() {
          this.imgsArr_c = [].concat(this.imgsArr);
          this.$nextTick(() => {
            this.waterfall();
          });
        },
        // waterfall 布局
        waterfall() {
          // 等到整个视图都渲染完毕再执行
          this.imgBoxEls = this.$refs["imgBox"];
          if (!this.imgBoxEls)
            return;
          let top, left, height;
          if (this.beginIndex === 0)
            this.colsHeightArr = []
          for (let i = this.beginIndex; i < this.imgBoxEls.length; ++i) {
            if (!this.imgBoxEls[i])
              return;
            height = this.imgBoxEls[i].offsetHeight;
            // 第一行
            if (i < this.colNum) {
              this.colsHeightArr.push(height);
              top = 0;
              left = i * this.colWidth;
            } else {
              // 找到最低的高度和其索引
              let minHeight = Math.min.apply(null, this.colsHeightArr);
              let minIdx = this.colsHeightArr.indexOf(minHeight);
              top = minHeight;
              left = minIdx * this.colWidth;
              this.colsHeightArr[minIdx] += height;
            }
            // 设置 img-box 位置
            this.imgBoxEls[i].style.top = top + "px";
            this.imgBoxEls[i].style.left = left + "px";
            // 当前图片在窗口内，则加载
            if (top < this.viewHeight) {
              let imgEl = this.imgBoxEls[i].children[0];
              imgEl.src = imgEl.getAttribute("data-src");
             
              imgEl.style.opacity = 1;
              imgEl.style.transform = "scale(1)";
            }
          }
          this.beginIndex = this.imgBoxEls.length;
        },
        reset() {
          this.imgsArr_c = [];
          this.imgArr_c=[];
          this.beginIndex = 0;
          this.loadedCount = 0;
        },
        // 滚动触底事件
        scrollFn() {
          let minHeight = Math.min.apply(null, this.colsHeightArr);
          // 滚动条滚动的高度
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          // 到达最底层的高度最低的一列，则触发 handleReachBottom 方法
          if (
            scrollTop + this.viewHeight >
            minHeight - this.reachBottomDistance
          ) {
            this.handleReachBottom();
          }
          // 图片懒加载
          this.imgBoxEls.forEach((imgBoxEl, index) => {
            let imgEl = imgBoxEl.children[0];
            // 若已加载，则跳过
            if (imgEl.src)
              return;
            // 当前图片所处的高度
            let top = imgBoxEl.style.top;
            top = Number.parseFloat(top.slice(0, top.length - 2));
            // 图片已到达可视范围，则加载
            if (scrollTop + this.viewHeight > top) {
              imgEl.src = imgEl.getAttribute("data-src")
              imgEl.style.opacity = 1;
              imgEl.style.transform = "scale(1)";
            }
          })
        },
        scroll() {
          window.onscroll = this.throttle(this.scrollFn, 500);
        },
        handleReachBottom() {
          this.imgsArr = this.imgsArr.concat(this.imgsArr);
          console.log("--this.imgsArr--", this.imgsArr)
        },
        // 节流函数
        throttle(fn, time) {
          let canRun = true;
          return function () {
            if (!canRun)
              return;
            canRun = false;
            setTimeout(() => {
              fn.apply(this);
              canRun = true;
            }, time)
          }
        }
      },
      mounted() {
      this.swhcyx(),
        this.viewHeight = (document.documentElement.clientHeight == 0) ? document.body.clientHeight : document.documentElement.clientHeight;
        this.preLoad();
        this.scroll();
        
      },
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    #waterfall {
      width: 100%;
      position: relative;
      @keyframes show-card {
        0% {
          transform: scale(0.5);
        }
  
        100% {
          transform: scale(1);
        }
      }
  
      .img-box {
        position: absolute;
        border-radius: 10px;
        padding: 5px;
        padding-left: 0;
  
  
        img {
          width: 100%;
          border-radius: 10px;
          opacity: 0;
          transform: scale(0.5);
          transition: all 0.6s;
          transition-delay: 0.1s;
          z-index:-1;
        }
        .box-font {
          font-size: 15px;
          font-weight:bold;
          color:gold;
          position: absolute;/*绝对布局*/
          z-index: 1;/*置于上层*/
          display: inline;
          top: 2;
          left:0;
          align: center;
      }
  
      }
  
       .default-card-animation {
        animation: show-card 0.4s;
        transition: left 0.6s top 0.6s;
        transition-delay: 0.1s;
      } 
  
    }
   
  
   </style>
   <style>
   #fv_loading {width: 100%;height: 100%; margin: 0;background: #f3815e;overflow-y: hidden; position: fixed;left: 0;top: 0;display: flex;align-items: center;justify-content: center; z-index: 998;}
  .fv_loadingBorder,.fv_loadingBorder2,.fv_loadingBorder3 {position: fixed; width: 30px;height: 30px;background: #2e98df;border-radius: 35px; animation: fv_loadingBorder 3.0s infinite linear; z-index: 999;}.fv_loadingBorder2{  animation: fv_loadingBorder2 1.5s infinite linear;}.fv_loadingBorder::after{position:absolute;width:60px;height:60px;border-top:8px solid #b160d1;border-bottom:8px solid #5e88ec;border-left:8px solid transparent;border-right:8px solid transparent;border-radius:60px;content:'';top:-15px;left:-15px;animation:fv_loadingBorder_after 1.0s infinite linear;}.fv_loadingBorder2::after{position:absolute; width:90px;height:90px;border-left:8px solid#b160d1;border-right:8px solid #5e88ec;border-top:8px solid transparent;border-bottom:8px solid transparent;border-radius:90px;content:'';top:-30px;left:-30px;animation:fv_loadingBorder_after2 3.s infinite linear;}.fv_loadingBorder3::after{ position:absolute;width:120px;height:120px;border-top:8px solid#b160d1;border-bottom:8px solid #5e88ec;border-right:8px solid transparent;border-left:8px solid transparent;border-radius:120px;content:'';top: -45px;left:-45px;animation:fv_loadingBorder_after 3.s infinite linear;}@keyframes fv_loadingBorder{0%{transform: rotate(0deg);}50%{ transform:rotate(180deg);background:#2ecc71;}100%{transform:rotate(360deg);}}@keyframes fv_loadingBorder2{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg);}}@keyframes fv_loadingBorder_after{0%{}50%{border-top:8px solid #b160d1;border-bottom:8px solid #5e88ec;}100%{order-top:8px solid #5e88ec;border-bottom:8px solid #b160d1;}}@keyframes fv_loadingBorder_after2{0%{}50%{border-left:8px solid #b160d1;border-right:8px solid #5e88ec;}100%{border-left:8px solid #5e88ec;border-right:8px solid #b160d1;}}.fv_bounce{display:flex;align-items: center;justify-content: center;width: 100%; color: white;height: 100%;font: normal bold 5rem "Product Sans", sans-serif; white-space: nowrap;}.fv_letter {top: 200px;animation: fv_bounce 0.55s cubic-bezier(0.05, 0, 0.23, 1) infinite alternate;display: inline-block;transform: translate3d(0, 0, 0); margin-top: 0.5em;text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;font: normal 500 5rem 'Varela Round', sans-serif;}
  @media only screen and (min-width: 600px) and (max-width: 992px) {.fv_letter {font-size: 4.5rem ;}}@media only screen and (max-width: 601px) {.fv_letter {font-size:3.4rem;}}.fv_letter:nth-child(1){animation-delay: 0s;}.fv_letter:nth-child(2){animation-delay: 0.083333333s;}.fv_letter:nth-child(3) {animation-delay: 0.1266666667s;}.fv_letter:nth-child(4) {animation-delay: 0.145s;}.fv_letter:nth-child(5){animation-delay: 0.1833333333s;}.fv_letter:nth-child(6) {animation-delay: 0.2116666667s;}.fv_letter:nth-child(7) {animation-delay: 0.25166666667s;}@keyframes fv_bounce {0% { transform: translate3d(0, 0, 0);text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;}100% {transform: translate3d(0, -1em, 0);text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;}}
  </style>