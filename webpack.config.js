const HtmlWebpackPlugin = require('html-webpack-plugin')
const { SourceMapDevToolPlugin } = require("webpack");
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new SourceMapDevToolPlugin({
      filename: '[file].map'
    }),
    new WebpackPwaManifestPlugin({
      name:'Petgram - La app de fotos para tu mascota',
      short_name: 'Petgram 🐶',
      description: 'Con Petgram puedes encontrar fotos de animalitos.',
      background_color: '#fff',
      theme_color: "#b1a",
      start_url: '/',
      icons:[
        {
          src: path.resolve('src/assets/icon.png'),
          sizes:[96,128, 192,256, 384, 512]
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching:[
        {
          urlPattern: new RegExp("https://{res.cloudinary.com|images.unsplash.com}"),
          handler: 'CacheFirst',
          options:{
            cacheName:'images'
          }
        },
        {
          urlPattern: new RegExp("https://petgram-server-ivan.vercel.app/"),
          handler: 'NetworkFirst',
          options:{
            cacheName:'api'
          }
        },

      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}
