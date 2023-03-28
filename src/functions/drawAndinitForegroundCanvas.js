import { getCanvasState } from "../index.js";

export function drawAndInitForegroundCanvas() {
  const canvasState = getCanvasState();
  const foregroundCanvasContext = canvasState.foregroundCanvasContext;
  canvasState.clearCanvases();
  canvasState.foregroundCanvasRects.forEach((rect) => {
    foregroundCanvasContext.save();
    foregroundCanvasContext.beginPath();
    foregroundCanvasContext.lineWidth = rect.lineWidth
    foregroundCanvasContext.fillStyle = rect.fillStyle;
    foregroundCanvasContext.fillRect(rect.x, rect.y, rect.widthPx, rect.heightPx);
    foregroundCanvasContext.strokeStyle = rect.strokeStyle;
    foregroundCanvasContext.strokeRect(rect.x, rect.y, rect.widthPx, rect.heightPx);
    foregroundCanvasContext.restore();
  });
}