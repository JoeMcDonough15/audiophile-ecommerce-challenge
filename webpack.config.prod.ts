import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.config.common";

const prodConfig: Configuration = {
  mode: "production",
};

module.exports = merge(commonConfig, prodConfig);
