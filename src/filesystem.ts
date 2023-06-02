import fs from "fs/promises";
import { existsSync } from "fs";

export async function mkdir(path: string): Promise<void> {
  if (!existsSync(path)) {
    await fs.mkdir(path);
  }
}

export async function write(path: string, data: string): Promise<void> {
  fs.writeFile(path, data, { flag: "w" });
}
