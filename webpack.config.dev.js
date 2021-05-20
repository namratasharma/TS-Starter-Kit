import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  // file resolutions
  resolve: {
      extensions: [ '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  module: {
    rules: [
      {test: /\.tsx?/,exclude: /node_modules/,use: ['ts-loader']},
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
