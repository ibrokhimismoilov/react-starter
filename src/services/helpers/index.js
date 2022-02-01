import get from "lodash/get";
import truncate from "lodash/truncate";

const isEnableLang = lang => {
	if (lang === "uz" || lang === "ru" || lang === "en" || lang === "oz")
		return true;
	else return false
};

const generateNewPath = (langCode, item, key = "slug") => {
	let newPath = "";

	const pathname = window.location.pathname;
	const splitPath = pathname.split("/");
	let _l = get(item, "translations", []).find(i => i.lang === langCode);

	let hasL = isEnableLang(splitPath[1]);

	if (item) {
		if (_l) {
			let beingArr = ["", langCode];
			let arr = [];
			if (hasL) {
				arr = [...beingArr, splitPath[2], _l[key]];
			} else {
				arr = [...beingArr, splitPath[1], _l[key]];
			}
			newPath = arr.join("/");
		} else {
			let beingArr = ["", langCode];
			newPath = beingArr.join("/");
		}
	}

	if (!item) {
		if (isEnableLang(splitPath[1])) {
			splitPath[1] = langCode;

			newPath = splitPath.join("/");
		} else {
			let beingArr = ["", langCode];
			let arr = [...beingArr, ...splitPath.slice(1)];

			newPath = arr.join("/");
		}
	}

	return newPath;
};

const cutStringText = (word, length, last) => {
	if (typeof word === "string") {
		return truncate(word, {
			length: length,
			omission: last ? last : "..."
		});
	} else {
		return null;
	}
};

const formatDate = (date, format) => {
	let dt = new Date(date);
	let month = ("00" + (dt.getMonth() + 1)).slice(-2);
	let day = ("00" + dt.getDate()).slice(-2);
	let year = dt.getFullYear();
	let hours = ("00" + dt.getHours()).slice(-2);
	let minutes = ("00" + dt.getMinutes()).slice(-2);
	let seconds = ("00" + dt.getSeconds()).slice(-2);

	switch (format) {
		case "DD-MM-YYYY":
			return day + "-" + month + "-" + year;
		case "DD.MM.YYYY / HH:mm:ss":
			return (
				day +
				"." +
				month +
				"." +
				year +
				" / " +
				hours +
				":" +
				minutes +
				":" +
				seconds
			);
		case "forComment":
			return (
				hours + ":" + minutes + " / " + day + "." + month + "." + year
			);
		default:
			return day + "." + month + "." + year;
	}
};

const stringToCode = element => {
	const content = element.textContent;

	function toNode(iframeString) {
		const div = document.createElement("div");
		div.innerHTML = iframeString;
		const isYoutubePlayer = iframeString.includes("youtube.com");
		if (isYoutubePlayer) div.classList.add("youtube-player-wrapper");
		return div;
	}

	const parent = element.parentNode;
	const childOembed = parent.querySelector("code");
	childOembed.replaceWith(toNode(content));
};

const months = [
	{
		id: 1,
		month_uz: "Январ",
		month_oz: "Yanvar",
		month_ru: "Январь",
		month_en: "January"
	},
	{
		id: 2,
		month_uz: "Феврал",
		month_oz: "Fevral",
		month_ru: "Февраль",
		month_en: "February"
	},
	{
		id: 3,
		month_uz: "Март",
		month_oz: "Mart",
		month_ru: "Марть",
		month_en: "March"
	},
	{
		id: 4,
		month_uz: "Апрел",
		month_oz: "Aprel",
		month_ru: "Апрель",
		month_en: "Aprel"
	},
	{
		id: 5,
		month_uz: "Май",
		month_oz: "May",
		month_ru: "Май",
		month_en: "May"
	},
	{
		id: 6,
		month_uz: "Июн",
		month_oz: "Iyun",
		month_ru: "Июнь",
		month_en: "June"
	},
	{
		id: 7,
		month_uz: "Июл",
		month_oz: "Iyul",
		month_ru: "Июль",
		month_en: "July"
	},
	{
		id: 8,
		month_uz: "Август",
		month_oz: "Avgust",
		month_ru: "Августь",
		month_en: "August"
	},
	{
		id: 9,
		month_uz: "Сентябр",
		month_oz: "Sentabr",
		month_ru: "Сентябрь",
		month_en: "September"
	},
	{
		id: 10,
		month_uz: "Октябр",
		month_oz: "Oktabr",
		month_ru: "Октябрь",
		month_en: "October"
	},
	{
		id: 11,
		month_uz: "Ноябр",
		month_oz: "Noyabr",
		month_ru: "Ноябрь",
		month_en: "November"
	},
	{
		id: 12,
		month_uz: "Декабр",
		month_oz: "Dekabr",
		month_ru: "Декабрь",
		month_en: "December"
	}
];

const formatToDate = (date, currLang) => {
	const formattedDate = new Date(date);
	const month = formattedDate.getMonth();
	const year = formattedDate.getFullYear();
	const day = formattedDate
		.getDate()
		.toString()
		.padStart(2, 0);

	return {
		month: get(months[month], `month_${currLang}`),
		day,
		year
	};
};

const formatBytes = (bytes, decimals = 2) => {
	if (bytes === 0) return "0 Bytes";

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export default {
	isEnableLang,
	generateNewPath,
	cutStringText,
	formatDate,
	stringToCode,
	formatToDate,
	months,
	formatBytes
};
