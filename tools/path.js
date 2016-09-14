const path = require('path');
const homeDir = require('os').homedir();

/* 被创建的项目路径 */
var seedRootPath = process.cwd();

exports.SEED_ROOT_PATH = seedRootPath;
exports.SEED_SRC = path.join(seedRootPath, 'src');
exports.SEED_SRC_VIEWS = path.join(seedRootPath,'src/views');
exports.SEED_SRC_VUEX = path.join(seedRootPath,'src/vuex');
exports.SEED_SRC_DIRECTIVE = path.join(seedRootPath,'src/directive');
exports.SEED_SRC_COMPONENTS = path.join(seedRootPath,'src/components');

/* cli文件夹路径：*/
// bin文件执行目录，的上级目录
var cliRootPath = path.join(__dirname, '..');

exports.CLI_ROOT_PATH = cliRootPath;
exports.CLI_VUE = path.join(cliRootPath, 'vue');
exports.CLI_TEM = path.join(cliRootPath, 'template');
exports.CLI_TEM_VIEWS = path.join(cliRootPath, 'template/views');
exports.CLI_TEM_VUEX = path.join(cliRootPath, 'template/vuex');
exports.CLI_TEM_DIRECTIVE = path.join(cliRootPath,'template/directive');
exports.CLI_TEM_COMPONENTS = path.join(cliRootPath,'template/components');
