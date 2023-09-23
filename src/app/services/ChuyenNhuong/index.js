const { API } = require("@api");
const { createBase, uploadImageArray, getByIdBase } = require("../Base");

export const createChuyenNhuong = async (data, anhKhuDat) => {
  const response = await createBase(API.CREATE_CHUYEN_NHUONG, data);
  await uploadImageArray(anhKhuDat, response._id);
  return response;
};
export const getChuyenNhuongByID = (id) => {
  return getByIdBase(API.GET_CHUYEN_NHUONG_BY_ID, id);
};
