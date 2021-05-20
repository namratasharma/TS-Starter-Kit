import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: path.resolve(__dirname, "src/index"),
    vendor: path.resolve(__dirname, "src/vendor")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].ts",
  },
  // file resolutions
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename : "[name].[chunkhash].css"
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      trackJSToken: "ae9f4eee7dfc459ab0283d2c68a81671"
    })
  ],
  module: {
    rules: [
      {test: /\.tsx?/,exclude: /node_modules/,use: ['ts-loader']},
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      //{ test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }
    ],
  },
};
