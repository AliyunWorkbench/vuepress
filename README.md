# vuepress

## 一、vuepress简介和使用
### **背景介绍**

VuePress 由两部分组成：第一部分是一个极简静态网站生成器 ，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

项目官网：https://vuepress.vuejs.org/

项目网址：https://github.com/vuejs/vuepress

### **最佳实践**

1.1 vuepress的本地发布

``` bash
$ yarn install # install all dependencies
yarn dev  # serves VuePress' own docs with itself
yarn test # make sure your code change pass the test
```

1.2 vuepress的线上网站发布

见下一章

## 二、将vuepress项目通过云开发平台，快速发布为网站

### **背景介绍**
云开发平台是阿里云面向广大开发者提供的免费云上研发工作平台，可以实现开发的全流程。关于云开发平台的介绍：https://help.aliyun.com/product/161245.html。

### **最佳实践**

**1.创建vuepress代码项目**

直接fork本项目到自己的GitHub账号下。

**2.打开云开发平台，完成阿里云账号注册登陆，同意云开发平台服务协议** https://workbench.aliyun.com/application

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/sign.png" width="400">

**3.创建云开发平台-前端部署应用**

3.1 创建前端应用

依次点击「应用列表」「前端应用」「新建前端应用」按钮。首先绑定GitHub帐号，允许云开发平台构建、发布你的GitHub代码为可访问的网站。

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/create_0.png" width="200">

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/oauth.png" width="200">

选择第一步中的代码仓库、主干分支等，并点击下一步。主干分支一般指的是代码的master或main等分支。

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/vuepress/vue1.png" width="450">

填写基本信息并点击「完成」。稍等片刻创建成功后，将进入到应用部署界面。

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/vuepress/vue2.png" width="450">

3.2 开发部署配置

填写日常/线上环境的部署配置
按照"?"提示，依次填写部署配置信息。其中：

- 如需使用自定义域名访问，可将自定义域名填入对应位置，并在部署成功后，根据步骤3.4进行域名解析后实现自定义域名访问</br>
  <img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/vuepress/vue3.png" width="450">

- 资源路径需改为./vuepress，因为该项目生成的静态文件默认存储在根目录下的vuepress文件夹中

3.3 进行项目的部署和查看

依次点击「部署」「确定」，即可启动日常/线上环境的发布流程。对于每个代码分支，要求先发布日常环境，再发布线上。若不需多套环境，则可以只使用日常环境，或者发布一次日常环境后，仅使用线上环境即可。

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/deploy.png" width="300">

3.3.1 部署完成，查看部署结果

访问**测试域名**或者**自定义域名**，以下以测试域名为例

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/vuepress/vue4.png" width="450">

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/vuepress/vue5.png" width="650">

3.3.2 在部署完成后，部署状态会显示为“已部署”。且部署网站的记录和过程，也会被完整记录下来：

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/docs/create4.png" width="600">

3.3.3可点击部署记录的「查看结果」来查看部署到OSS存储中的静态资源。

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/docs/data2.png" width="400">

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/result_download.png" width="350">

3.3.4 可点击部署记录的「查看日志」查看部署的详细过程，并在部署发生错误时，精确定位学习错误情况。

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/docs/data1.png" width="400">

部署操作可以在每次更新内容并push后再次进行，实现静态网站内容的按需实时更新。

3.4 将OSS存储中的项目发布为网站链接

你可以通过将自定义域名解析到OSS的方式，来实现OSS内项目的自定义域名访问

3.4.1 解析自己的域名到OSS Bucket的访问域名上

打开自己域名的DNS解析控制台，使用阿里云域名或其它提供商的域名均可，此处以阿里云为例：

首先，找到自己要解析的域名，添加/修改一条解析记录：

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/cname.png" width="650">

如下图所示，配置CNAME、自己的域名、记录值：

<img src="https://ecoboost-readme-image.oss-cn-shanghai.aliyuncs.com/feApp/github/hexo/cname_2.png" width="400">

完成配置后，稍等片刻，确定使用https://zijian.aliyun.com/ ，或者ping/dig/nslookup等指令可以查找到本域名的解析情况。

3.4.2 部署项目并通过自定义域名访问

域名解析完成后，即可通过自定义域名实现项目的访问，自定义域名更具语义性，方便记忆，并且没有时效限制，您可持久访问该项目。

<img src="https://readme-img-2.oss-us-west-1.aliyuncs.com/feApp/github/vuepress/vue6.png" width="450">

3.5 （可选）使用CDN加速域名访问，节约流量费用

可点击「部署配置」中的「如何配置CDN加速」，将自己的域名与CDN加速绑定，从而加速网站访问。
