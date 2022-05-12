import config from "config";
import { CHANGE_LANGUAGE } from "../actionTypes";

const initialState = {
	currentLangCode: config.DEFAULT_LANGUAGE
};

const systemReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case CHANGE_LANGUAGE:
			return {
				...state,
				currentLangCode: payload
			};

		default:
			return state;
	}
};

export default systemReducer;
