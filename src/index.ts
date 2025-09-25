import CanvasKitWasm from "canvaskit-wasm/bin/full/canvaskit.wasm?url";

export default {
  fetch() {
    return new Response(`CanvasKitWasm is published at ${CanvasKitWasm}!`);
  },
};
