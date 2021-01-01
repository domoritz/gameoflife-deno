import { Cell } from "./cell.ts";

export class Board {
  private cells = new Set<string>();

  constructor(desc: string = "") {
    desc.split("\n").forEach((line, row) =>
      line.split("").forEach((element, col) => {
        if (element === "X") {
          this.addCell(new Cell(col, row));
        }
      })
    );
  }

  addCell(cell: Cell) {
    this.cells.add(cell.toString());
  }

  hasCell(cell: Cell) {
    return this.cells.has(cell.toString());
  }

  toString() {
    if (this.cells.size === 0) {
      return "empty";
    }

    const vals = Array.from(this.cells.values()).map(Cell.fromString);
    const xs = vals.map((c) => c.x);
    const ys = vals.map((c) => c.x);

    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    let out = "";

    for (let y = minY - 1; y <= maxY + 1; y++) {
      for (let x = minX - 1; x <= maxX + 1; x++) {
        if (this.hasCell(new Cell(x, y))) {
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
