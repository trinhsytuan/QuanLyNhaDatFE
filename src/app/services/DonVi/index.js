import { API } from "@api";
import { getAllPaginationBaseParamsString, getSimple } from "../Base";

export function getAllDonVi(page, limit, query) {
    return getSimple(API.GET_ALL_ORG, page, limit, query);
}
