import "./style.scss";

import jquery from "jquery"
window.$ = jquery;
import * as bootstrap from "bootstrap"
import { CanvasStateObj } from "./classes/CanvasStateObj.js";
import { makeCanvasesResizable } from "./functions/makeCanvasResizable.js";
import { createRectAtCanvasCenter } from "./functions/createRectAtCanvasCenter.js";
import { makeCanvasRectsSelectable } from "./functions/makeCanvasRectsSelectable.js";
import { makeCanvasRectsDraggable } from "./functions/makeCanvasRectsDraggable.js";

let canvasState;

export function getCanvasState() {
  return canvasState;
}

async function main() {
  canvasState = new CanvasStateObj();
  await canvasState.isInitialized()
    .then(() => {
      makeCanvasesResizable();
      createRectAtCanvasCenter();
      makeCanvasRectsSelectable();
      makeCanvasRectsDraggable();
    }).catch((error) => {
      console.log("CanvasStatObj isInitialized catch");
      console.log(`Error: ${error.message}`);
      alert(`CanvasStatObj isInitialized catch error: ${error.message}`);
    })
}

$(document).ready(main);