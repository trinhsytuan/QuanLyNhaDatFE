const { API } = require("@api");
const {
  createBase,
  uploadImageArray,
  getByIdBase,
  deleteByIdBase,
  getSimple,
  updateBaseFormatID,
  deleteImage,
} = require("../Base");

export const createNewCapMoi = async (data, anhKhuDat, hopDong, cacLoaiGiayTo, taichinh) => {
  const imageTotal = [...anhKhuDat, ...hopDong, ...cacLoaiGiayTo, ...taichinh];
  const response = await createBase(API.CREATE_NEW_CAP_MOI, data);
  await uploadImageArray(imageTotal, response._id);
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
export const editGiayToCapMoi = async (
  id,
  data,
  anhKhuDat,
  hopDong,
  cacLoaiGiayTo,
  taichinh,
  removeAnhKhuDat,
  removeHopDong,
  removeCacLoaiGiayTo,
  removeTaiChinh
) => {
  const imageTotal = [...anhKhuDat, ...hopDong, ...cacLoaiGiayTo, ...taichinh];
  const removeTotal = [...removeAnhKhuDat, ...removeHopDong, ...removeTaiChinh, ...removeCacLoaiGiayTo];
  const response = await updateBaseFormatID(API.EDIT_CAP_MOI, id, data);
  await uploadImageArray(imageTotal, id);
  await deleteImage(removeTotal);
  return response;
};

