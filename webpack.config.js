const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Applicazione Webpack',
      template: './src/template.html',
      inject: 'body',
      customImageId: 'dynamic-image',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 5000,
  },
};
