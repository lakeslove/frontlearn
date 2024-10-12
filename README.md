# evervue
## [查看官方文档](http://evervue-doc.evervue.wh.everark.com.cn/)

### 说明
- 添加页面，先在 views 中开发页面，然后在系统管理 -> 菜单管理中配置菜单
- 目前 路由配置中， /page 是一个内部特殊路由，用来指向动态生成页
- 浏览器打开了一直没关，这时，服务器上删掉了旧的代码，提交了新的代码，浏览器旧代码请求旧资源时找不到文件。  
解决方式：1. 提交新代码时，不马上删除旧代码。 2. 提示用户刷新页面

### 贡献
欢迎大家 Fork 代码，开发功能或修复问题，最后发起 Merge Request（若没有账户请自行注册）。  
注：`master` 分支为发布分支，`develop` 是开发分支。通常是 Fork `develop` 分支，Merge Request 也指向 `develop` 分支。

### 国产化，兼容 ARM64 虚拟机
node-sass 依赖需放到 package.json 的 optionalDependencies 中，且使用精确版本号 4.14.1，即
```
"optionalDependencies": {
  "node-sass": "4.14.1"
},
```
注：因 ARM64 下 npm install 会报 node-sass 问题，所以evercloud已事先将其编译安装到全局了


~~定义流水线时，代码构建命令需要加上 npx browserslist@latest --update-db，即~~
```
// 不一定是这个问题
// npm install --unsafe-perm && npx browserslist@latest --update-db && npm run build
```
