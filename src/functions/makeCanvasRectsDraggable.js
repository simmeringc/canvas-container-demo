import { getCanvasState } from "../index";
import { getHoveredCanvasRect } from "./makeCanvasRectsSelectable";
import { drawAndInitForegroundCanvas } from "./drawAndInitForegroundCanvas";

export function makeCanvasRectsDraggable() {
  const canvasState = getCanvasState();
  const foregroundCanvas = canvasState.foregroundCanvas;
  foregroundCanvas.addEventListener("mousedown", handleMakeCanvasRectsDraggableMouseDown);
}

let selectedCanvasRect;
let lastMousePos = { x: null, y: null };

function handleMakeCanvasRectsDraggableMouseDown() {
  const canvasState = getCanvasState();
  const foregroundCanvas = canvasState.foregroundCanvas;
  selectedCanvasRect = getHoveredCanvasRect();
  if (selectedCanvasRect) {
    window.addEventListener("mousemove", handleMakeCanvasRectsDraggableMouseMove);
    window.addEventListener("mouseup", handleMakeCanvasRectsDraggableMouseUp);
    foregroundCanvas.style.cursor = "grabbing";
    $("body").css("cursor", "grabbing");
    $(".header-bar-icon").css("cursor", "grabbing");
    lastMousePos.x = (event.clientX - foregroundCanvas.getBoundingClientRect().left);
    lastMousePos.y = (event.clientY - foregroundCanvas.getBoundingClientRect().top);
  }
}

function handleMakeCanvasRectsDraggableMouseMove(event) {
  const canvasState = getCanvasState();
  const foregroundCanvas = canvasState.foregroundCanvas;
  foregroundCanvas.style.cursor = "grabbing";
  $("body").css("cursor", "grabbing");
  const currentMousePos = { x: (event.clientX - foregroundCanvas.getBoundingClientRect().left), y: (event.clientY - foregroundCanvas.getBoundingClientRect().top) };
  const dMouseX = (currentMousePos.x - lastMousePos.x);
  const dMouseY = (currentMousePos.y - lastMousePos.y);
  lastMousePos.x = currentMousePos.x;
  lastMousePos.y = currentMousePos.y;
  const drawX = (selectedCanvasRect.x + dMouseX);
  const drawY = (selectedCanvasRect.y + dMouseY);
  if (selectedCanvasRectPositionWithinBounds(foregroundCanvas, selectedCanvasRect, drawX, drawY)) {
    selectedCanvasRect.setXY(drawX, drawY);
  }
  // drawAndInitForegroundCanvas();
}

function handleMakeCanvasRectsDraggableMouseUp() {
  const canvasState = getCanvasState();
  const foregroundCanvas = canvasState.foregroundCanvas;
  window.removeEventListener("mousemove", handleMakeCanvasRectsDraggableMouseMove);
  window.removeEventListener("mouseup", handleMakeCanvasRectsDraggableMouseUp);
  foregroundCanvas.style.cursor = "grab";
  $("body").css("cursor", "default");
  $(".header-bar-icon").css("cursor", "pointer");
  lastMousePos = { x: null, y: null };
}

function selectedCanvasRectPositionWithinBounds(foregroundCanvas, selectedCanvasRect, drawX, drawY) {
  const foregroundCanvasRect = foregroundCanvas.getBoundingClientRect();
  const foregroundCanvasWidth = foregroundCanvasRect.width;
  const foregroundCanvasHeight = foregroundCanvasRect.height;
  const selectedCanvasRectWidth = selectedCanvasRect.widthPx;
  const selectedCanvasRectHeight = selectedCanvasRect.heightPx;
  if (drawX >= 0 && drawX <= (foregroundCanvasWidth - selectedCanvasRectWidth) && drawY >= 0 && drawY <= (foregroundCanvasHeight - selectedCanvasRectHeight)) {
    return true;
  } else {
    return false;
  }
}