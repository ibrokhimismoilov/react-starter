import React from "react";
import PropTypes from "prop-types";
import { useGetAll } from "hooks/crud";

const ContainerAll = ({ name, url, params, onSuccess, onError, children }) => {
	console.log("name", name);
	console.log("url", url);

	const data = useGetAll({ name, url, params, onSuccess, onError });

	return <>{children(data)}</>;
};

ContainerAll.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
	params: PropTypes.object,
	onSuccess: PropTypes.func,
	onError: PropTypes.func
};

ContainerAll.defaultProps = {
	onSuccess: () => {},
	onError: () => {}
};

export default ContainerAll;
