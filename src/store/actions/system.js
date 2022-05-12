// import { api, queryBuilder } from "services";
import { CHANGE_LANGUAGE } from "../actionTypes";

export const changeLanguage = lang => ({ type: CHANGE_LANGUAGE, payload: lang });
