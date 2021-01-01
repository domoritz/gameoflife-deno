import {
  assert,
  assertArrayIncludes,
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.83.0/testing/asserts.ts";
import { Board } from "./src/board.ts";
import { Cell } from "./src/cell.ts";

Deno.test("Same cells are equal", () => {
  const a = new Cell(-1, 2);
  const b = new Cell(-1, 2);
  assertEquals(a, b);

  const c = new Cell(-2, 2);
  assertNotEquals(a, c);
});

Deno.test("Cells work in sets as strings", () => {
  const a = new Cell(-1, 2);
  const b = new Cell(-1, 2);

  const set = new Set<string>();

  assert(!set.has(b.toString()));
  set.add(a.toString());
  assert(set.has(a.toString()));
  assert(set.has(b.toString()));
});

Deno.test("Get cell neighbors", () => {
  const c = new Cell(-1, 2);

  assertArrayIncludes(
    c.neighbors(),
    [
      new Cell(-2, 1),
      new Cell(-2, 2),
      new Cell(-2, 2),
      new Cell(-1, 1),
      new Cell(-2, 3),
      new Cell(0, 1),
      new Cell(0, 2),
      new Cell(0, 3),
    ],
  );
});

Deno.test("New board is empty", () => {
  const b = new Board();
  assertEquals(b.toString(), "empty");
});

Deno.test("Create board with one cell", () => {
  const b = new Board("X");

  assertEquals(b.toString(), "...\n.X.\n...\n");
});
