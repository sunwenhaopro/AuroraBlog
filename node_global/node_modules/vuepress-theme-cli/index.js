#!/usr/bin/env node

const program = require('commander');
const fs = require('fs')
const handlebars = require("handlebars")
const inquirer = require("inquirer")
const ora = require('ora');
const chalk = require('chalk')
const logSymbols = require('log-symbols');
const got = require("got");
const { createWriteStream } = require("fs");

let zipUrl = "http://file.xcye.xyz/aurora-theme-template.zip"
let zipName = "aurora-theme-template.zip"

//设置打印文字
const spinner = ora({
    text: chalk.green(`Downloading template from ${zipUrl} \n`),
    spinner: {
        "interval": 80,
        "frames": [
            "⣾",
            "⣽",
            "⣻",
            "⢿",
            "⡿",
            "⣟",
            "⣯",
            "⣷"
        ]
    },
    color: 'green'
})

function auroraMkdir(name,num,answers) {
    fs.mkdir(name,err => {
        if (err) {
            console.log(chalk.yellow(`${err.message}\n`))

            if (num > 3) {
                //创建两次失败，自动退出
                console.log(chalk.yellow(`Failed to create ${name} folder, exit automatically\n`))
                process.exit(1)
            }

            //重新创建一个
            return auroraMkdir(name + "-aurora",num + 1,answers)
        }

        //创建文件夹成功
        return downloadTemplate(name,answers)
    })
}

function unzip(path,name,configInfo) {
    //将zip进行解压
    const decompress = require('decompress');

    decompress(path,"./" + name).then(files => {
        spinner.prefixText = chalk.green("[") + chalk.white("2") + chalk.green("]")
        spinner.text = chalk.green("Editing package.json ")
        spinner.start()

        try {
            const packageFile = `${name}/package.json`;
            const packageContent = fs.readFileSync(packageFile).toString();
            const packageResult = handlebars.compile(packageContent)(configInfo);
            fs.writeFileSync(packageFile, packageResult);
            spinner.stop()
            console.log(chalk.green("\n[") + chalk.white("2") + chalk.green("] ") + chalk.green("[") + chalk.red(logSymbols.success) + chalk.green("] ") + chalk.green("package.json file successfully modified\n"));
        }catch (e) {
            spinner.stop()
            console.log(chalk.red("\n[") + chalk.white("2") + chalk.red("] ") + chalk.green("[") + chalk.red(logSymbols.error) + chalk.green("] ") + chalk.green("The package.json file failed to be modified successfully\n"));
            process.exit(1)
        }

        spinner.prefixText = chalk.green("[") + chalk.white("3") + chalk.green("]")
        spinner.text = chalk.green("Editing config.js ")
        spinner.start()

        try {
            const configFile = `${name}/docs/.vuepress/config.js`;
            const configContent = fs.readFileSync(configFile).toString();
            const configResult = handlebars.compile(configContent)(configInfo);
            fs.writeFileSync(configFile, configResult);
            spinner.stop()
            console.log(chalk.green("[") + chalk.white("3") + chalk.green("] ") + chalk.green("[") + chalk.red(logSymbols.success) + chalk.green("] ") + chalk.green("config.js file successfully modified\n"));
        }catch (e) {
            spinner.stop()
            console.log(chalk.red("[") + chalk.white("3") + chalk.red("] ") + chalk.green("[") + chalk.red(logSymbols.error) + chalk.green("] ") + chalk.green("The config.js file failed to be modified successfully\n"));
            process.exit(1)
        }

        spinner.stop()

        console.log(chalk.green("请按照指示，运行下面的命令: \n"))
        console.log(chalk.green("[") + chalk.white("1") + chalk.green("]  ") + chalk.white(`npm config set registry=http://registry.npm.taobao.org/`))
        console.log(chalk.green("[") + chalk.white("2") + chalk.green("]  ") + chalk.white(`cd ${name}`))
        console.log(chalk.green("[") + chalk.white("3") + chalk.green("]  ") + chalk.white(`npm install`))
        console.log(chalk.green("[") + chalk.white("4") + chalk.green("]  ") + chalk.white(`npm run dev `))
        process.exit(1)
    });
}

function downloadTemplate(name,answers) {
    spinner.start()
    //用户输入的信息
    let configInfo = {
        name: name,
        description: answers.description,
        logoTitle: answers.logoTitle
    }

    //开始进行下载
    const downloadStream = got.stream(zipUrl);
    const fileWriterStream = createWriteStream(`./${name}/${zipName}`);
    downloadStream
        .on("downloadProgress", ({ transferred, total, percent }) => {
            const percentage = Math.round(percent * 100);
            spinner.prefixText = chalk.green("[") + chalk.white("1") + chalk.green("]") + chalk.green("[") + chalk.red(`${transferred}/${total} (${percentage}%`) + chalk.green("]")
        })
        .on("error", (error) => {
            spinner.stop()
            console.log(chalk.green("[") + chalk.white("1") + chalk.green("]") + chalk.green("[") + logSymbols.error + chalk.green("]") + chalk.yellow(`Download failed: ${chalk.red(error.message)},exit automatically\n`))

            //从url中下载失败
            spinner.prefixText = logSymbols.error
            spinner.fail(chalk.yellow("template file download failed\n"));

            inquirer.prompt([
                {
                    name: 'type',
                    message: chalk.red('restart download template' + chalk.blue(" true ") + chalk.red("or") + chalk.blue(" false ") + "?")
                }
            ]).then((reAnswer) => {
                if (reAnswer.type === "true") {
                    spinner.text = chalk.blue("please wait a moment, the theme template file is downloading from "+ zipUrl +" \n");
                    downloadTemplate(name,answers)
                }else {
                    console.log(chalk.blue("you can rerun") + chalk.white(" aurora ") + chalk.white(name + " ") + chalk.blue("to download template\n"))
                    process.exit(1)
                }
            })
        });

    fileWriterStream
        .on("error", (error) => {
            spinner.stop()
            console.log(chalk.green("[") + chalk.white("1") + chalk.green("]") + chalk.green(" [") + logSymbols.error + chalk.green("]") + chalk.yellow(`Could not write file to ${fileWriterStream.path} : ${chalk.red(error.message)},exit automatically\n`))
            process.exit(1)
        })
        .on("finish", () => {
            spinner.stop()
            console.log(chalk.green("[") + chalk.white("1") + chalk.green("]") + chalk.green(" [") + chalk.red(logSymbols.success) + chalk.green("] File successfully downloaded to ") + `${chalk.red(fileWriterStream.path)}`)
            unzip(fileWriterStream.path,name,configInfo)
        });

    downloadStream.pipe(fileWriterStream);
}

program
    .version('1.0.0', '-v, --version')
    .command('init <name>')
    .action((name) => {
        inquirer.prompt([
            {
                name: 'description',
                message: chalk.blue('what is the description ?')
            },
            {
                name: 'logoTitle',
                message: chalk.blue("what is the logoText ?")
            }
        ]).then((answers) => {
            if (answers.description === "") {
                answers.description = "aurora blog"
            }

            if (answers.logoTitle === "") {
                answers.logoTitle = "Aurora"
            }

            console.log(chalk.yellow("\nyour description: " + answers.description));
            console.log(chalk.yellow("your logoTitle: " + answers.logoTitle + "\n"));

            auroraMkdir(name,0,answers)
        })
    })
    .parse(process.argv);
