import { createBrowserHistory } from "history";
import { helpers } from "services";

const pathname = window.location.pathname;
const locationLang = pathname.split("/")[1];
const history = createBrowserHistory({
	basename: helpers.isEnableLang(locationLang) ? locationLang : ""
});

export default history;