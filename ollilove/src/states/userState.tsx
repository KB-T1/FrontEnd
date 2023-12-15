import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: "",
});

export const barState = atom({
  key: "barState",
  default: "home",
});
