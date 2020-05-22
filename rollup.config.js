const baseConfig = require('@stoplight/scripts/rollup.config.js');

console.log('hey');
const path = require('path');

const BASE_PATH = process.cwd();

module.exports = {
    ...baseConfig,
    plugins: [baseConfig.plugins.slice(1)], // remove typescript plugin
    input: path.resolve(BASE_PATH, 'src/index.js'),
};
