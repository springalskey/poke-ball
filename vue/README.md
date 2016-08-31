# kingkong (金刚)
> 中后台项目


## Build Setup

```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build
```

#create file

npm run files directory|module|feature moduleName

1. [参数1]directory只创建resource、action、mutation、views的文件目录
2. [参数1]module创建文件目录和文件内容
3. [参数1]feature在现有module文件中添加新功能
4. [参数2]moduleName参数为创建的模块名称

## 命名规范

1. 文件夹命名：`a-b`；
2. 文件命名（js、css、vue、html）：`aB.*`；
3. 样式class命名：`a-b`；
4. image命名：`a-b`；
5. js变量命名：`aB`；
6. js常量命名：`A_B`；
7. js私有变量或方法：`_aB`；
8. js方法的返回值如果是布尔值，则必须以is、can、has、should等为前缀；

## git分支命名规范

1. 新功能添加：`feature/new-feature-name/username`，例如：`feature/sidebar-menu/maqic`；
2. bug紧急修复：`hotfix/bug-description`；
3. 版本开发：`release/version-info/username`，例如：`release/1.0.1/maqic`；
4. 迭代开发：`release/scrum-info/username`，例如：`release/8-12/maqic`；

## About code style
1. 项目中使用EditorConfig来定义代码风格,需要安装相关编辑器的插件[查看对应编辑器插件](http://editorconfig.org/#file-format-details)
1. 提交代码前会执行eslint检查代码规范,规范文档参见[http://standardjs.com/](http://standardjs.com/)

> 提交代码前eslint提示的错误可通过`npm run fix`自动修复部分错误。`.vue`文件的错误无法自动修复。

## 注意事项
1. 添加第三方依赖或组件请通知到组内的每个参与开发人员
