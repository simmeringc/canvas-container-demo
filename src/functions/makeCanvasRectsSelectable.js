import { getCanvasState } from "../index.js";

export function makeCanvasRectsSelectable() {
  const canvasState = getCanvasState();
  const foregroundCanvas = canvasState.foregroundCanvas;
  foregroundCanvas.addEventListener("mousemove", detectCanvasRectHover);
}

let hoveredCanvasRect;

export function detectCanvasRectHover(event) {
  const canvasState = getCanvasState();
  const foregroundCanvas = canvasState.foregroundCanvas;
  hoveredCanvasRect = selectCanvasRect(event);
  if (hoveredCanvasRect) {
    foregroundCanvas.style.cursor = "grab";
  } else {
    foregroundCanvas.style.cursor = "default";
  }
}

function selectCanvasRect(event) {
  const canvasState = getCanvasState();
  const foregroundCanvas = canvasState.foregroundCanvas;
  const foregroundCanvasRects = canvasState.foregroundCanvasRects;
  const currentMousePos = { x: (event.clientX - foregroundCanvas.getBoundingClientRect().left), y: (event.clientY - foregroundCanvas.getBoundingClientRect().top) };
  let hoveredCanvasRect;
  foregroundCanvasRects.forEach(function (canvasRect) {
    if (currentMousePos.x >= canvasRect.x && currentMousePos.x <= (canvasRect.x + canvasRect.widthPx) && currentMousePos.y >= canvasRect.y && currentMousePos.y <= (canvasRect.y + canvasRect.heightPx)) {
      hoveredCanvasRect = canvasRect;
    } else {
      hoveredCanvasRect = false;
    }
  });
  return hoveredCanvasRect;
}

export function getHoveredCanvasRect() {
  return hoveredCanvasRect;
}