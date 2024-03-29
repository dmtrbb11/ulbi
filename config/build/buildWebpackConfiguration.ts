import { BuildOptions } from "./types/config";
import webpack, { ids } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildServer } from "./buildServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    devtool: isDev ? "inline-source-map" : undefined,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    devServer: isDev ? buildServer(options) : undefined,
  };
}
