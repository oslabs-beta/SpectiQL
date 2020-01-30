const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
        entry: "./index.js",
        target: "web",
        output: {
          path: path.resolve(__dirname, "build"),
          filename: "bundle.js"
        },
        devServer: {
          contentBase: "./client/public/",
          open: true,
          port: 3000,
          overlay: true,
          // publicPath: '/build/'
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: './client/public/index.html',
            output: './client/public/index.html'
        }),
          new webpack.HotModuleReplacementPlugin()
        ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        },
        {
          test: /\.(graphql|gql)$/,
          use: [
            {
              loader: 'webpack-graphql-loader',
              options: {
                // validate: true,
                // schema: "./path/to/schema.json",
                // removeUnusedFragments: true
                // etc. See "Loader Options" below
              }
            }
          ]
            },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.node$/,
          loader: 'node-loader'
      },
      ]
    },
    node: {
      fs: "empty"
   }
};
  