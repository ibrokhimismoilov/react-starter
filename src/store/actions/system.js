// import { api, queryBuilder } from "services";
// import { CHANGE_LANGUAGE, GET_MENU_FAIL, GET_MENU_START, GET_MENU_SUCCESS } from "../actionTypes";
import { CHANGE_LANGUAGE } from "../actionTypes";

// const getMenuStart = () => ({ type: GET_MENU_START });

// const getMenuSuccess = (menus) => ({ type: GET_MENU_SUCCESS, payload: menus });

// const getMenuError = (error) => ({ type: GET_MENU_FAIL, payload: error });

export const changeLanguage = (lang) => ({ type: CHANGE_LANGUAGE, payload: lang });

// actions
// export const menuAction = () => {
//     return async (dispatch) => {
//         dispatch(getMenuStart());
//         try {
//             const { data } = await api(queryBuilder("/menus", { include: "menuItems" }));
//             dispatch(getMenuSuccess(data));
//         } catch (error) {
//             dispatch(getMenuError(error?.message || "Cennot getMenus"));
//         }
//     }
// }