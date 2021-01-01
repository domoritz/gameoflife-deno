export class Cell {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static fromString(s: string) {
    const { x, y } = JSON.parse(s);
    return new Cell(x, y);
  }

  toString() {
    return JSON.stringify({ x: this.x, y: this.y });
  }

  neighbors() {
    let nbs: Cell[] = [];

    for (let y = this.y - 1; y <= this.y + 1; y++) {
      for (let x = this.x - 1; x <= this.x + 1; x++) {
        if (x !== this.x || y !== this.y) {
          nbs.push(new Cell(x, y));
        }
      }
    }

    return nbs;
  }
}
