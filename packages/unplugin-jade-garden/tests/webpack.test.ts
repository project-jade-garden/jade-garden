// import { describe, expect, test } from "bun:test";
// import * as webpack from "webpack";
// import jpg from "../src/plugins/webpack";
// import { getPath } from "./utils/build-utils";

// const webpackBuild: typeof webpack.webpack = webpack.webpack || (webpack as any).default || webpack;

// describe("webpack", async () => {
//   await new Promise((resolve) => {
//     webpackBuild(
//       {
//         entry: getPath("./fixtures/plain-css/index.js"),
//         plugins: [jpg({ entry: getPath("./fixtures/plain-css/app.css") })],
//         module: {
//           rules: [
//             {
//               test: /\.css$/,
//               use: [
//                 "css-loader",
//                 {
//                   loader: "postcss-loader",
//                   options: {
//                     postcssOptions: {
//                       config: getPath("./utils/postcss.config.js")
//                     }
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         output: {
//           path: getPath("./dist")
//         }
//       },
//       resolve
//     );
//   });
// });
