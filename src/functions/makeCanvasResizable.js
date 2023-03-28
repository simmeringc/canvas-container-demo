import { getCanvasState } from "../index";
import { drawForegroundCanvas } from "./drawForegroundCanvas";


export function makeCanvasesResizable() {
  window.addEventListener("resize", setCanvasSize80VP);
}

function setCanvasSize80VP() {
  const canvasState = getCanvasState();
  canvasState.resizeCanvasesTo80VP();
  canvasState.centerCanvases();
  canvasState.repositionForegroundRects();
  drawForegroundCanvas();
}