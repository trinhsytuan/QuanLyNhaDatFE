import { API } from "@api";
import { createBase, getAllBase, updateBaseFormatID } from "../Base";

export function getMyKey() {
  return getAllBase(API.GET_MY_KEY);
}
export function updateTitleKey(id, title) {
  return updateBaseFormatID(API.UPDATE_KEY, id, { title });
}
export function createKey(password) {
  return createBase(API.CREATE_KEY, { password });
}
