const { REACT_APP_API_ROOT } = process.env;

const config = {
	APP_NAME: "React APP | Ibrokhim",
	API_ROOT: REACT_APP_API_ROOT,
	DEFAULT_LANGUAGE: "uz",
	API_LANGUAGES: [
		{ id: 1, code: "uz", title: "Ўзбекча", short: "ЎЗ" },
		{ id: 2, code: "ru", title: "Русский", short: "RU" },
		{ id: 3, code: "en", title: "English", short: "EN" },
		{ id: 4, code: "oz", title: "O'zbekcha", short: "OZ" }
	]
};

export default config;
