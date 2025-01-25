const main = async () => {
  Bun.spawn(["bun", "build:minimal"]);
  Bun.spawn(["bun", "build:park"]);
  Bun.spawn(["bun", "build:shadcn"]);
};

main();
