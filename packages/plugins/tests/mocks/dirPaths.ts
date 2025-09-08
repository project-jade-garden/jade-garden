import { getPath } from "../utils";

export const rootDir = "./fixtures/tailwindcss";
export const entryDir = getPath(`${rootDir}/index.js`);
export const outputDir = getPath(`${rootDir}/jade-garden/components`);
export const targetDir = getPath(`${rootDir}/app.css`);
