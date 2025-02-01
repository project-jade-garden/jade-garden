import * as p from "@clack/prompts";
import color from "picocolors";
import { installDeps } from "./install-deps.js";
import { prompts } from "./prompts.js";
import { writeFiles } from "./write-files.js";

const main = async () => {
  console.clear();

  p.intro(`${color.bgRed(color.black(" ⚡ spark-css "))}`);

  const res = await prompts();
  await writeFiles(res);
  await installDeps(res);

  p.outro("🤘 Happy Hacking");
};

main().catch(console.error);
