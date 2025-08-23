// import { describe, expect, test } from "bun:test";
// import jpg from "../src/plugins/rspack";
// import { build, getPath } from "./utils/build-utils";

// describe("rspack", async () => {
//   await new Promise((resolve) => {
//     build.rspack(
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
