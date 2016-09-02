#!/usr/bin/env node

var program = require('commander');
var child_process = require('child_process');
var version = require('./package.json').version;
var FileTools = require('./tools/file.js').FileTools;
var DirTools = require('./tools/file.js').DirTools;

function copyDir(src, dist) {
  try {
    child_process.spawn('cp', ['-r', src, dist]);
  } catch (e) {
    console.log(e);
  }
}

program
  .usage('[command] <options ...>')
  .version(version)
  .option('-n, --name', '项目名称')
  .option('-p, --path', '项目路径')
  .option('-v, --version', 'poke-ball version')

// <>必填参数，[]可选参数
// __dirname：当前执行文件所在目录; process.cwd():当前工作目录
program
  .command('new <projectName> [option1] [option2]')
  .description('create new project')
  .action(function(data, option1, option2) {
    console.log('args:', data);
    copyDir(__dirname + '/vue', process.cwd() + '/' + data)
    console.log('create new project success:', data);
  })

program
  .command('module <moduleName>')
  .description('create module')
  .action(function(moduleName) {
    // 判断当前目录是否有效，有没有‘src’目录
    var dirList = DirTools.readDir(process.cwd());
    var isProjectPath = false;
    dirList.forEach(function(el) {
      if (el == 'src')
        isProjectPath = true;
    })
    if (!isProjectPath) {
      console.log('this is not a valid path');
      return;
    }

    // 创建module Dir
    DirTools.mkDir(`${process.cwd()}/src/views/${moduleName}`);

    // 读取模版内容
    var content = FileTools.readFile(`${__dirname}/template/module/module.vue`).toString();
    console.log(`${__dirname}/template/module/module.vue`);
    // 替换模版内容
    content = content.replace(/{moduleName}/,moduleName);

    console.log('content nr:', content);

    // 创建module文件
    FileTools.createFile(`${process.cwd()}/src/views/${moduleName}/${moduleName}.vue`, content);

    // child_process.exec('node ' + __dirname + '/template/files.js module ' + data, function(err, stdout, stderr) {
    //   if (err) {
    //     console.log(err);
    //   }
    //   if (stdout) {
    //     console.log(stdout);
    //   }
    //   if (stderr) {
    //     console.log(stderr);
    //   }
    // })

    console.log('create a module: ' + moduleName);
  })

program
  .command('test <projectPath>')
  .description('test a project')
  .action(function(data) {
    console.log('test a project');
  })

program.parse(process.argv);

if (program.path) {
  console.log('cwd', process.cwd());
  console.log('__dirname', __dirname);
  console.log('__process.execPath', process.execPath);
}

if (program.joy) {
  console.log('program.joy');
}
