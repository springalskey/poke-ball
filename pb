#!/usr/bin/env node

var program = require('commander');
var child_process = require('child_process');
var version = require('./package.json').version;

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
  .option('-v, --version', 'monster-ball version')

// <>必填参数，[]可选参数
program
  .command('new <projectName> [option1] [option2]')
  .description('create new project')
  .action(function(data, option1, option2) {
    console.log('args:', data, option1, option2);
    copyDir(__dirname + '/vue', process.cwd() + '/' + data)
    console.log('create new project success:', data);
  })

program
  .command('module <moduleName>')
  .description('create module')
  .action(function(data) {
    console.log(data);

    child_process.exec('node ' + __dirname + '/template/files.js module ' + data, function(err, stdout, stderr) {
      if (err) {
        console.log(err);
      }
      if (stdout) {
        console.log(stdout);
      }
      if (stderr) {
        console.log(stderr);
      }
    })
    console.log('create a module ');
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
