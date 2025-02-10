import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { SpawnOptions } from "bun";

const __dirname = dirname(fileURLToPath(import.meta.url));

const opts: SpawnOptions.OptionsObject = {
  cwd: join(__dirname, "..", "..", "..", "./themes")
};

const main = async () => {
  Bun.spawn(["bun", "minimal"], opts);
  Bun.spawn(["bun", "park"], opts);
  Bun.spawn(["bun", "shadcn"], opts);
};

main();
