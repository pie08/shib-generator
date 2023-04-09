import { API_URL } from "./config";

export const state = {
  picture: "",
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
