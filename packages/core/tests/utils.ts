import path from "node:path";
import esbuild from "esbuild";

export const getBundleSize = async (
  pkg: "class-variance-authority" | "cva" | "jade-garden" | "tailwind-variants" | "tailwind-variants/lite",
  funcName: string
) => {
  const script = `import { ${funcName} } from "${pkg}"; console.log(${funcName})`;

  const bundled = await esbuild.build({
    stdin: {
      contents: script,
      resolveDir: import.meta.dirname,
      sourcefile: path.resolve(import.meta.dirname, "test.js"),
      loader: "js"
    },
    write: false,
    minify: true,
    bundle: true
  });

  return Buffer.from(bundled.outputFiles?.[0].contents).byteLength;
};
