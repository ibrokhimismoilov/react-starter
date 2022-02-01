import i18n from "i18next";
import XHR from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import config from "config";

const fallbackLng = ["uz"];
const availableLanguages = ["uz", "ru", "en"];

const options = {
	fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
	debug: false,
	whitelist: availableLanguages,

	interpolation: {
		escapeValue: false
	},
	saveMissing: true,
	backend: {
		addPath: `${config.API_ROOT}/translations/translation/{{lng}}`
	},
	// keySeparator: false,
	// nsSeparator: false
};

export default () => {
	i18n.use(XHR)
		.use(initReactI18next) // pass the i18n instance to react-i18next.
		.init(options);

	return i18n;
};
