import * as model from "./model.js";
import photoView from "./views/photoView.js";
import factsView from "./views/factsView.js";
import pinsView from "./views/pinsView.js";
import navView from "./views/navView.js";

// POLYFILLS
import "core.js";
import "regenerator-runtime";

const controlGetPicture = async function () {
  try {
    await model.loadPicture();
    photoView.render(model.state.picture);
  } catch (err) {
    console.error(err);
  }
};

const controlRegenerateImage = async function () {
  await model.loadPicture();
  photoView.render(model.state.picture);
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

const controlAddPin = function () {
  model.addPin();
  pinsView.render(model.state.pins);
};

const controlLoadPin = function (imgUrl) {
  photoView.render(imgUrl);
};

const init = function () {
  photoView.addHandlerLoad(controlGetPicture);
  photoView.addHandlerRegenerate(controlRegenerateImage);
  navView.addListenerOpenNav();
  pinsView.addHandlerAddPin(controlAddPin);
  pinsView.addHandlerLoadPin(controlLoadPin);
  pinsView.addListenerOpenPins();
  pinsView.addListenerClosePins();
};
init();
