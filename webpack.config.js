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
        }
      ]
    },
    node: {
      fs: "empty"
   }
};
  