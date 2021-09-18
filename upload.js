'use strict'
// 引入scp2
var client = require('scp2');
// 下面三个插件是部署的时候控制台美化所用 可有可无
const ora = require('ora');
const chalk = require('chalk');
const spinner = ora(chalk.green('正在上传到到服务器...'));
spinner.start();

client.scp('./dist/', { // 本地打包文件的位置
  "host": 'xxx.xxx.xxx.xxx', // 服务器的IP地址
  "port": 'xx', // 服务器端口， 一般为 22
  "username": 'xxx', // 服务器用户名，一般是root
  "password": 'xxx', // 服务器密码
  "path": '/var/www/html' // 项目部署的服务器目标位置
}, err => {
  spinner.stop();
  if (!err) {
    console.log(chalk.green("项目上传完成"))
  } else {
    console.log("err", err)
  }
})
