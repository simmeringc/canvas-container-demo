import "./style.scss";

import jquery from "jquery"
window.$ = jquery;

import { CanvasStateObj } from "./classes/CanvasStateObj";
import { makeCanvasesResizable } from "./functions/makeCanvasResizable";
import { createRectAtCanvasCenter } from "./functions/createRectAtCanvasCenter";
import { makeCanvasRectsSelectable } from "./functions/makeCanvasRectsSelectable";
import { makeCanvasRectsDraggable } from "./functions/makeCanvasRectsDraggable";

let canvasState;

export function getCanvasState() {
  return canvasState;
}

async function main() {
  try {
    canvasState = new CanvasStateObj();
    await canvasState.isInitialized()
    makeCanvasesResizable();
    createRectAtCanvasCenter();
    makeCanvasRectsSelectable();
    makeCanvasRectsDraggable();
  } catch (error) {
    console.error(`CanvasStateObj isInitialized catch: ${error.message}`);
    alert(`CanvasStateObj isInitialized catch error: ${error.message}`);
  }
}

$(document).ready(main);