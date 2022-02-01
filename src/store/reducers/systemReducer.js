import config from "config";
// import { CHANGE_LANGUAGE, GET_MENU_FAIL, GET_MENU_START, GET_MENU_SUCCESS } from "../actionTypes";
import { CHANGE_LANGUAGE } from "../actionTypes";

const initialState = {
    currentLangCode: config.DEFAULT_LANGUAGE,
    loading: false,
    error: null,
};

const systemReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        // case GET_MENU_START:
        //     return {
        //         ...state,
        //         error: null,
        //         loading: true,
        //     };

        // case GET_MENU_SUCCESS:
        //     return {
        //         ...state,
        //         error: null,
        //         loading: false,
        //         menus: [...action.payload],
        //     };

        // case GET_MENU_FAIL:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.payload,
        //     };

        case CHANGE_LANGUAGE: return {
            ...state,
            currentLangCode: payload,
        }

        default:
            return state;
    }
};

export default systemReducer;