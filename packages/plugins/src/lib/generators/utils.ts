const chunkStr = (str: string, maxLen = 80): string[][] => {
  const strArr = str.split(" ");
  const chunks: string[][] = [];
  let chunk: string[] = [];

  let charLen = 0;
  for (const str of strArr) {
    if (charLen < maxLen) {
      charLen += str.length;
      chunk.push(str);
    } else {
      charLen = 0;
      chunks.push(chunk);
      chunk = [];
    }
  }

  if (chunk.length > 0) chunks.push(chunk);

  return chunks;
};

export const sharedComment = (params: {
  firstComment: string;
  lastComment: string;
  metaConfig: Record<string, string | boolean | undefined>;
}): string => {
  const { firstComment, lastComment, metaConfig } = params;
  const keys = ["name", "version", "description", "deprecated", "see", "license"];
  let result = "";

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!(key in metaConfig)) continue;

    const value = metaConfig[key];

    if (typeof value === "string" || typeof value === "boolean") {
      const startsWithoutWrite = !result.length;
      if (startsWithoutWrite) result += firstComment;

      result += `${i > 0 && !startsWithoutWrite ? " *\n" : ""} * @${key}\n`;

      // * Exclude boolean value for "@deprecated"
      if (typeof value === "string") {
        const chunks = chunkStr(value);

        for (const chunk of chunks) {
          result += ` * ${chunk.join(" ")}\n`;
        }
      }
    }
  }

  result += !result.length ? "" : lastComment;

  return result;
};
