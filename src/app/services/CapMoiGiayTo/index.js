const { API } = require("@api");
const { createBase, uploadImageArray, getByIdBase, deleteByIdBase, getSimple } = require("../Base");

export const createNewCapMoi = async (data, anhKhuDat, hopDong, cacLoaiGiayTo, taichinh) => {
  const imageTotal = [...anhDonDangKy, ...anhKhuDat, ...hopDong, ...cacLoaiGiayTo, ...taichinh];
  const response = await createBase(API.CREATE_NEW_CAP_MOI, data);
  const responseImage = await uploadImageArray(imageTotal, response._id);
  return response;
};
export const getCapMoi = async (id) => {
  return getByIdBase(API.GET_GIAY_TO_CAP_MOI, id);
};
export const removeGiayToCapMoi = async (id) => {
  return deleteByIdBase(API.DELETE_GIAY_TO_CAP_MOI, id);
};
export const getAllGiayToCapMoi = (page, limit, query = "") => {
  return getSimple(API.GET_PAGINATION_GIAY_TO_CAP_MOI, page, limit, query);
};

