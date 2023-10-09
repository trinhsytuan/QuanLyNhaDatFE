const { API } = require("@api");
const {
  createBase,
  uploadImageArray,
  getByIdBase,
  updateBaseFormatID,
  deleteImage,
  deleteBase,
  deleteByIdBase,
  getSimple,
} = require("../Base");

export const createChuyenNhuong = async (data, anhKhuDat) => {
  const response = await createBase(API.CREATE_CHUYEN_NHUONG, data);
  await uploadImageArray(anhKhuDat, response._id);
  return response;
};
export const editChuyenNhuong = async (data, anhKhuDat, removeAnhKhuDat, id) => {
  const response = await updateBaseFormatID(API.EDIT_CHUYEN_NHUONG_BY_ID, id, data);
  await uploadImageArray(anhKhuDat, id);
  await deleteImage(removeAnhKhuDat);
  return response;
};
export const getChuyenNhuongByID = (id) => {
  return getByIdBase(API.GET_CHUYEN_NHUONG_BY_ID, id);
};
export const deleteChuyenNhuongByID = (id) => {
  return deleteByIdBase(API.DELETE_CHUYEN_NHUONG_BY_ID, id);
};
export const getTableChuyenNhuong = (page, limit, query) => {
  return getSimple(API.GET_PAGINATION_CHUYEN_NHUONG, page, limit, query);
};
export const sendTransferToOrg = (id, privateKey) => {
  return updateBaseFormatID(API.SEND_TRANSFER_TO_ORG, id, { privateKey });
};
export const getTableChuyenNhuongDepartment = (page, limit, query) => {
  return getSimple(API.GET_PAGINATION_THAM_DINH_CHUYEN_NHUONG, page, limit, query);
};


