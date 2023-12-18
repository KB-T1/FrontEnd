import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    userName:"",
    userId: 0,
  },
});

export const barState = atom({
  key: "barState",
  default: "home",
});
