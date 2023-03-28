export class CanvasRectObj {
  constructor(x, y, widthPx, heightPx, lineWidth, fillStyle, strokeStyle) {
    this.x = x;
    this.y = y;
    this.centerX = (x + (widthPx / 2));
    this.centerY = (y + (heightPx / 2));
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