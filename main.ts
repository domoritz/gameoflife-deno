import { sleep } from "https://deno.land/x/sleep/mod.ts";
import { Board } from "./src/board.ts";

const f = new Board("......X.\nXX......\n.X...XXX");

for (let i = 0; i < 130; i++) {
  f.step();
  console.log("\u{001B}[2J");
  console.log(f.toString());
  await sleep(0.2);
}
