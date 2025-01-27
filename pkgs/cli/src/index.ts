import * as p from "@clack/prompts";
import color from "picocolors";
import { installDeps } from "./install-deps.js";
import { prompts } from "./prompts.js";
import { usrPath } from "./utils.js";
import { writeFiles } from "./write-files.js";

const main = async () => {
  console.clear();

  p.intro(`${color.bgRed(color.black(" ⚡ spark-css "))}`);

  const res = await prompts();

  const s = p.spinner();
  s.start(`✍️ Writing files to ${color.italic(color.underline(usrPath(res.path)))}`);
  await writeFiles(res);
  s.stop("📖 Files written");

  await installDeps(res);

  p.outro("🤘 Happy Hacking");
};

main().catch(console.error);
