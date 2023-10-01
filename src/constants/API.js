export const API = {
  LOGIN: "/api/v1/user/login",
  GET_MY_KEY: "/api/v1/pki/getMyKey",
  MY_INFO: "/api/v1/user/myInfo",
  UPDATE_MY_INFO: "/api/v1/user/updateMyInfo",
  USER_CHANGE_PASSWORD: "/api/v1/user/changePassword",
  PREVIEW_ID: "/api/images/{0}",
  UPDATE_KEY: "/api/v1/pki/updateTitle/{0}",
  CREATE_KEY: "/api/v1/pki/createNew",
  DELETE_KEY: "/api/v1/pki/revoke",
  GET_ALL_ORG: "/api/v1/org/getOrg?page={0}&limit={1}{2}",
  GET_ALL_USER: "/api/v1/user/getUserPagination?page={0}&limit={1}{2}",
  CREATE_ORG: "/api/v1/org/deleteOrg/{0}",
  EDIT_ORG: "/api/v1/org/editOrg/{0}",
  CREATE_ORG: "/api/v1/org/createNewOrg",
  DELETE_ORG: "/api/v1/org/deleteOrg/{0}",
  CREATE_USER: "/api/v1/user/register",
  UPDATE_USER: "/api/v1/user/updateUser/{0}",
  DELETE_USER: "/api/v1/user/deleteUser/{0}",
  CREATE_NEW_CAP_MOI: "/api/v1/newcertificate/createNew",
  UPLOAD_IMAGE: "/api/v1/media/create",
  DELETE_IMAGE_FILENAME: "/api/v1/media/delete/{0}",
  GET_GIAY_TO_CAP_MOI: "/api/v1/newcertificate/getCertificate/{0}",
  GET_BY_MA_GIAY_TO: "/api/v1/newcertificate/getByCode/{0}",
  DELETE_GIAY_TO_CAP_MOI: "/api/v1/newcertificate/deleteCertificate/{0}",
  GET_PAGINATION_GIAY_TO_CAP_MOI: "/api/v1/newcertificate/getAllPagination?page={0}&limit={1}{2}",
  EDIT_CAP_MOI: "/api/v1/newcertificate/editCertificate/{0}",
  CREATE_CHUYEN_NHUONG: "/api/v1/transfer/create",
  EDIT_CHUYEN_NHUONG_BY_ID: "/api/v1/transfer/editReCertificate/{0}",
  DELETE_CHUYEN_NHUONG_BY_ID: "/api/v1/transfer/deleteReCeritificate/{0}",
  GET_PAGINATION_CHUYEN_NHUONG: "/api/v1/transfer/getTableChuyenNhuong?page={0}&limit={1}{2}",
  GET_CHUYEN_NHUONG_BY_ID: "/api/v1/transfer/getById/{0}",
  CREATE_NEW_RECERTIFICATE: "/api/v1/reCertificate/create",
};





