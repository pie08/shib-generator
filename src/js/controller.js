import * as model from "./model.js";
import view from "./view.js";

const controlGetPicture = async function () {
  try {
    await model.loadPicture();
    view.renderPicture(model.state.picture);
  } catch (err) {
    console.error(err);
  }
};

const controlRegenerateImage = async function () {
  await model.loadPicture();
  view.renderPicture(model.state.picture);
};

const init = function () {
  view.addHandlerLoad(controlGetPicture);
  view.addHandlerRegenerate(controlRegenerateImage);
};
init();
