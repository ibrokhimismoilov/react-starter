import { combineReducers } from "redux";
import systemReducer from "./systemReducer";

const rootReducer = combineReducers({
    system: systemReducer,
});

export default rootReducer;