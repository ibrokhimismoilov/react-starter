import config from "config";

const useDocumentTitle = (title = config.APP_NAME) => {
	return document.title = title;
};

export default useDocumentTitle;
