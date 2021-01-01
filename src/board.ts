import { Cell } from "./cell.ts";

export class Board {
  private alive = new Set<string>();

  constructor(desc: string = "") {
    desc.split("\n").forEach((line, row) =>
      line.split("").forEach((element, col) => {
        if (element === "X") {
          this.addAlive(new Cell(col, row));
        }
      })
    );
  }

  addAlive(cell: Cell) {
    this.alive.add(cell.toString());
  }

  isAlive(cell: Cell) {
    return this.alive.has(cell.toString());
  }

  neighborsCounts() {
    const counts = new Map<string, number>();

    for (const cell of this.alive) {
      for (const neighbor of Cell.fromString(cell).neighbors()) {
        const neighborKey = neighbor.toString();
        if (counts.has(neighborKey)) {
          counts.set(neighborKey, counts.get(neighborKey)! + 1);
        } else {
          counts.set(neighborKey, 1);
        }
      }
    }

    return counts;
  }

  step() {
    var newAlive = new Set<string>();

    for (const [cell, count] of this.neighborsCounts().entries()) {
      if (count === 3 || this.alive.has(cell) && count === 2) {
        newAlive.add((Cell.fromString(cell).toString()));
      }
    }

    this.alive = newAlive;
  }

  toString() {
    if (this.alive.size === 0) {
      return "empty";
    }

    const vals = Array.from(this.alive.values()).map(Cell.fromString);
    const xs = vals.map((c) => c.x);
    const ys = vals.map((c) => c.y);

    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    let out = "";

    for (let y = minY - 1; y <= maxY + 1; y++) {
      for (let x = minX - 1; x <= maxX + 1; x++) {
        if (this.isAlive(new Cell(x, y))) {
          out += "X";
        } else {
          out += ".";
        }
      }
      out += "\n";
    }

    return out;
  }
}
