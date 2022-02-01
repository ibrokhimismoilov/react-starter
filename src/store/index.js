import thunk from "redux-thunk";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./reducers";
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
};

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store as default, persistor };