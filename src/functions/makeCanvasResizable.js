import { getCanvasState } from "../index";
// import { drawAndInitForegroundCanvas } from "./drawAndInitForegroundCanvas";


export function makeCanvasesResizable() {
  window.addEventListener('resize', setCanvasSize80VP);
}

function setCanvasSize80VP() {
  const canvasState = getCanvasState();
  canvasState.resizeCanvasesTo80VP();
  canvasState.centerCanvases();
  canvasState.repositionForegroundRects();
  // drawAndInitForegroundCanvas();
}