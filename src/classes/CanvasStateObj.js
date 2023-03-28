export class CanvasStateObj {
  constructor() {
    this.backgroundCanvas = $("#backgroundCanvas")[0];
    this.backgroundCanvasContext = this.backgroundCanvas.getContext("2d");
    this.foregroundCanvas = $("#foregroundCanvas")[0];
    this.foregroundCanvasContext = this.foregroundCanvas.getContext("2d");
    this.foregroundCanvasRects = []
    this.canvases = [this.backgroundCanvas, this.foregroundCanvas];
    this.resizeCanvasesTo80VP();
    this.centerCanvases();
    this.clearCanvases();
  }

  isInitialized() {
    return new Promise ( (resolve, reject) => {
      if ( this.backgroundCanvas !== undefined && this.backgroundCanvas !== null
        && this.backgroundCanvasContext !== undefined && this.backgroundCanvasContext !== null
        && this.foregroundCanvas !== undefined && this.foregroundCanvas !== null
        && this.foregroundCanvasContext !== undefined && this.foregroundCanvasContext !== null
        && this.foregroundCanvasRects !== undefined && this.foregroundCanvasRects !== null) {
        resolve(true);
      } else {
        reject(new Error("CanvasStateObj isInitialized failed"));
      }
    });
  }

  pushForegroundCanvasRect(rect) {
    this.foregroundCanvasRects.push(rect);
  }

  resizeCanvasesTo80VP() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    this.canvases.forEach( (canvas) => {
      canvas.width = (viewportWidth * 0.8);
      canvas.height = (viewportHeight * 0.8);
    });
  }

  centerCanvases() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    this.canvases.forEach((canvas) => {
      canvas.style.position = "absolute";
      canvas.style.left = `${((viewportWidth - canvas.width) / 2)}px`;
      canvas.style.top = `${((viewportHeight - canvas.height) / 2)}px`;
    });
  }

  blankWhiteCanvas(canvas, canvasContext) {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = "#FFFFFF";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  }

  clearCanvases() {
    this.foregroundCanvasContext.clearRect(0, 0, this.foregroundCanvas.width, this.foregroundCanvas.height);
    this.blankWhiteCanvas(this.backgroundCanvas, this.backgroundCanvasContext);
    $(this.backgroundCanvas).css("box-shadow", "2px 2px 10px rgba(0, 0, 0, 0.1)");
  }

  repositionForegroundRects() {
    this.foregroundCanvasRects.forEach(rect => {
      const maxX = this.foregroundCanvas.width - rect.widthPx;
      const maxY = this.foregroundCanvas.height - rect.heightPx;
      const newX = Math.min(rect.x, maxX);
      const newY = Math.min(rect.y, maxY);
      rect.setXY(newX, newY);
    });
  }
}