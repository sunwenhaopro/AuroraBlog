<template>
    <div class="v-waterfall-content" id="v-waterfall">
        <div v-for="img in waterfallList"
             class="v-waterfall-item"
            :style="{top:img.top+'px',left:img.left+'px',width:waterfallImgWidth+'px',height:img.height}">
            <img :src="img.src" alt="">
        </div>
    </div>
</template>
import mediumZoom from "medium-zoom";
import { Query } from 'leancloud-storage'
<script>
    export default {
        name: "v-waterfall",
        data(){
            return {
                waterfallList:[],
                imgArr:[],
                waterfallImgWidth:100,
                waterfallImgCol:5,
                waterfallImgRight:10,
                waterfallImgBottom:10,
                waterfallDeviationHeight:[],
                imgList:[]
            }
        },
        created() {
      const query = new Query('Talk');
      query.find().then((talks) => {
       new Promise((resolve,reject) => {
         for (let i = 0; i < talks.length; i++) {
           for (let j = 0; j < talks[i].attributes.mood_photos.length; j++) {

             this.imgArr.push(talks[i].attributes.mood_photos[j].photoUrl)

           }
            for (let i = 0;i < 100;i++){
                this.imgList.push(this.imgArr[Math.round(Math.random() * 8)]);
            }
        },
        mounted(){
            this.calculationWidth();
        },
        methods:{
            //计算每个图片的宽度或者是列数
            calculationWidth(){
                let domWidth = document.getElementById("v-waterfall").offsetWidth;
                if (!this.waterfallImgWidth && this.waterfallImgCol){
                    this.waterfallImgWidth = (domWidth-this.waterfallImgRight*this.waterfallImgCol)/this.waterfallImgCol;
                }else if(this.waterfallImgWidth && !this.waterfallImgCol){
                    this.waterfallImgCol = Math.floor(domWidth/(this.waterfallImgWidth+this.waterfallImgRight))
                }
                //初始化偏移高度数组
                this.waterfallDeviationHeight = new Array(this.waterfallImgCol);
                for (let i = 0;i < this.waterfallDeviationHeight.length;i++){
                    this.waterfallDeviationHeight[i] = 0;
                }
                this.imgPreloading()
            },
            //图片预加载
            imgPreloading(){
                for (let i = 0;i < this.imgList.length;i++){
                    let aImg = new Image();
                    aImg.src = this.imgList[i];
                    aImg.onload = aImg.onerror = (e)=>{
                        let imgData = {};
                        imgData.height = this.waterfallImgWidth/aImg.width*aImg.height;
                        imgData.src = this.imgList[i];
                        this.waterfallList.push(imgData);
                        this.rankImg(imgData);
                    }
                }
            },
            //瀑布流布局
            rankImg(imgData){
                let {waterfallImgWidth,waterfallImgRight,waterfallImgBottom,waterfallDeviationHeight,waterfallImgCol} = this;
                //for (let i = 0;i < this.waterfallList.length;i++){
                let minIndex = this.filterMin();
                imgData.top = waterfallDeviationHeight[minIndex];
                imgData.left = minIndex*(waterfallImgRight+waterfallImgWidth);
                waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom;
                //}
                console.log(imgData);
            },
            /**
             * 找到最短的列并返回下标
             * @returns {number} 下标
             */
            filterMin(){
                const min = Math.min.apply(null, this.waterfallDeviationHeight);
                return this.waterfallDeviationHeight.indexOf(min);
            }
        }
    }
</script>

<style scoped>
.v-waterfall-content{
    width: 100%;
    height: 100%;
    position: relative;
}
.v-waterfall-item{
    float: left;
    position: absolute;
}
.v-waterfall-item img{
    width: auto;
    height: auto;
}
</style>
