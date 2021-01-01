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
}
