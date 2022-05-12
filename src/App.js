import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import i18next from "i18next";
import config from "./config";
import { helpers } from "./services";
import { RouteWrapper } from "./routes";
import { useSelector } from "react-redux";
import { changeLanguage } from "store/actions/system";

const App = () => {
	const dispatch = useDispatch();
	const lang = useSelector(state => state.system.currentLangCode);

	const setLanguage = () => {
		const pathname = window.location.pathname;
		const locationLang = pathname.split("/")[1] || lang;

		if (helpers.isEnableLang(locationLang)) {
			i18next.changeLanguage(locationLang);
			dispatch(changeLanguage(locationLang));
		} else {
			i18next.changeLanguage(config.DEFAULT_LANGUAGE);
			dispatch(changeLanguage(config.DEFAULT_LANGUAGE));
		}
	};

	useEffect(() => {
		setLanguage();
	}, []);

	return <RouteWrapper />;
};

export default App;
