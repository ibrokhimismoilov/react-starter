import axios from "axios";
import config from "config";
import store from "store";

const api = axios.create({
	baseURL: config.API_ROOT,
	timeout: 30000,
});

api.defaults.params = {};
api.defaults.params["_f"] = "json";
api.defaults.params['_l'] = store.getState().system.currentLangCode;
api.defaults.headers.common["Accept"] = "application/json";
api.defaults.headers.common["Cache-Control"] = "no-cache";
api.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";

api.interceptors.request.use(
	(configs) => {
		// const token = store.getState()?.user?.token || "";
		// if (token) {
		// 	configs.headers.Authorization = `Berear ${token}`;
		// }
		return configs;
	},
	(error) => {
		console.log("SERVICES RESPONSE ERROR", error?.request);
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response) => response,
	(error) => {
		console.log("SERVICES RESPONSE ERROR", error?.response);
		return Promise.reject(error);
	}
);

export default api;
