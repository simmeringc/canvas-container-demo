import "./style.scss";

import jquery from "jquery"
window.$ = jquery;
import * as bootstrap from "bootstrap"
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