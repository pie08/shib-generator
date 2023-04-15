import { API_URL, API_FACTS_URL } from "./config";
import pinsView from "./views/pinsView";

export const state = {
  picture: "",
  facts: [],
  pins: [],
};

export const loadPicture = async function () {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const picture = data[0];
    state.picture = picture;
  } catch (err) {
    throw err;
  }
};

export const loadFact = async function () {
  try {
    const res = await fetch(`${API_FACTS_URL}?number=1`);
    const data = await res.json();
    state.facts = data.data;
  } catch (err) {
    throw err;
  }
};

export const addPin = function () {
  console.log(state);
  if (state.pins.includes(state.picture)) return;
  state.pins.push(state.picture);

  persistPins();
};

export const clearPins = function () {
  localStorage.removeItem("pins");
  state.pins = [];
};

const persistPins = function () {
  localStorage.setItem("pins", JSON.stringify(state.pins));
};

const init = function () {
  const storage = localStorage.getItem("pins");
  if (storage) state.pins = JSON.parse(storage);
};
init();
