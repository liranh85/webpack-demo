const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    // Minise with sourcemaps, also achieveable by adding the --optimize-minimize flag to the webpack script.
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // Sets the environment variable to production for scripts that use that variable (apparently that's the convention). Also achieveable by adding ` --define process.env.NODE_ENV="'production'" ` to the webpack script.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
    // Both the above can also be achieved by simply adding the -p flag to the webpack script.
  ]
});