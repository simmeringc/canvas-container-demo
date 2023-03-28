import { getCanvasState } from "../index";
import { CanvasRectObj } from "../classes/CanvasRectObj";
import { drawAndInitForegroundCanvas } from "./drawAndInitForegroundCanvas";

export function createRectAtCanvasCenter() {
  const canvasState = getCanvasState();
  const foregroundCanvasContext = canvasState.foregroundCanvasContext;
  const foregroundCanvasCenterPos = { x: (foregroundCanvasContext.canvas.width / 2), y: (foregroundCanvasContext.canvas.height / 2) };
  const rectDimensions = { widthPx: 200, heightPx: 200 }
  const centerRectPos = { x: foregroundCanvasCenterPos.x - (rectDimensions.widthPx / 2), y: foregroundCanvasCenterPos.y - (rectDimensions.heightPx / 2) }
  const foregroundCanvasContextAttributes = { lineWidth: 4, fillStyle: `rgba(13, 110, 253, 0.7)`, strokeStyle: `rgba(52, 58, 64, 0.7)` }
  const rect = new CanvasRectObj(centerRectPos.x, centerRectPos.y, rectDimensions.widthPx, rectDimensions.heightPx, foregroundCanvasContextAttributes.lineWidth, foregroundCanvasContextAttributes.fillStyle, foregroundCanvasContextAttributes.strokeStyle)
  canvasState.pushForegroundCanvasRect(rect);
  drawAndInitForegroundCanvas();
}