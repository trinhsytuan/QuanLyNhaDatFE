import { API } from "@api";
import { createBase } from "../Base";

export const createNewCapLai = (e) => {
  return createBase(API.CREATE_NEW_RECERTIFICATE, e);
};
