import * as model from "./model.js";
import photoView from "./views/photoView.js";
import factsView from "./views/factsView.js";

const controlGetPicture = async function () {
  try {
    await model.loadPicture();
    photoView.renderPicture(model.state.picture);
  } catch (err) {
    console.error(err);
  }
};

const controlRegenerateImage = async function () {
  await model.loadPicture();
  photoView.renderPicture(model.state.picture);
};

const controlGetFact = async function () {
  try {
    await model.loadFact();
    factsView.render(model.state.facts);
  } catch (err) {
    console.error(err);
  }
};
controlGetFact();

const init = function () {
  photoView.addHandlerLoad(controlGetPicture);
  photoView.addHandlerRegenerate(controlRegenerateImage);
};
init();
