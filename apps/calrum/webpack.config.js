const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript'
            ],
            plugins: [
              [
                '@babel/plugin-proposal-decorators',
                {
                  legacy: true
                }
              ],
              ['@babel/plugin-syntax-dynamic-import'],
            ]
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/assets/**', to: 'assets/' },
      'node_modules/@webcomponents/webcomponentsjs/**',
      'manifest.json'
    ]),
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      template: 'src/index.html'
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      include: ['index.html', 'manifest.json', /\.js$/],
      exclude: [/\/@webcomponents\/webcomponentsjs\//],
      navigateFallback: 'index.html',
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /\/@webcomponents\/webcomponentsjs\//,
          handler: 'staleWhileRevalidate'
        },
        {
          urlPattern: /^https:\/\/fonts.gstatic.com\//,
          handler: 'staleWhileRevalidate'
        }
      ]
    })
  ]
};
