const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path');

module.exports = {
        entry: "./index.js",
        output: {
          path: path.resolve(__dirname, "build"),
          filename: "bundle.js"
        },
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
        }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./client/public/index.html",
          filename: "./output.html"
        })    
    ]
};
  