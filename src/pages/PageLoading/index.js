import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const PageLoading = ({ time }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		let timeOut = setTimeout(() => setShow(true), time);

		return () => {
			clearTimeout(timeOut);
		};
	}, []);

	return <>{show && <div>PageLoading...</div>}</>;
};

PageLoading.propTypes = {
	time: PropTypes.number
};

PageLoading.defaultProps = {
	time: 3000
};

export default PageLoading;
