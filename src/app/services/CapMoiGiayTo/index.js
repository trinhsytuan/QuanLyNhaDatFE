const { API } = require("@api");
const { createBase } = require("../Base");

export const createNewCapMoi = async (data) => {
  return createBase(API.CREATE_NEW_CAP_MOI, data);
};

