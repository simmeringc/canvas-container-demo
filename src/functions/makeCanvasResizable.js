import { getCanvasState } from "../index.js";
import { drawAndInitForegroundCanvas } from "./drawAndInitForegroundCanvas.js";


export function makeCanvasesResizable() {
  window.addEventListener('resize', setCanvasSize80VP);
}

function setCanvasSize80VP() {
  const canvasState = getCanvasState();
  canvasState.resizeCanvasesTo80VP();
  canvasState.centerCanvases();
  canvasState.repositionForegroundRects();
  drawAndInitForegroundCanvas();
}