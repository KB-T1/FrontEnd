import { atom } from "recoil";

export const familyState = atom({
  key: "familyState",
  default: [{
    userName: "",
    nickName: "",
    userId: 0,
  },],
});