export class CanvasRectObj {
  constructor(x, y, widthPx, heightPx, lineWidth, fillStyle, strokeStyle) {
    this.x = x;
    this.y = y;
    this.widthPx = widthPx;
    this.heightPx = heightPx;
    this.lineWidth = lineWidth;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
  }

  setXY(x, y) {
    this.x = x;
    this.y = y;
  }
}