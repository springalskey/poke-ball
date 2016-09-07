const path = require('path');
const homeDir = require('os').homedir();
const ROOT_PATH = path.join(__dirname, '..');

exports.CWD_PATH = process.cwd();
exports.ROOT_PATH = ROOT_PATH;
exports.SRC_PATH = path.join(ROOT_PATH, 'src');
