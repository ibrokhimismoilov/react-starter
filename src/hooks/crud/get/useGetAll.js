import { useQuery } from "react-query";
import { api, queryBuilder } from "services";

async function getAll({ queryKey }) {
	console.log("queryKey>>>", queryKey[1].props);
	const { url, params } = queryKey[1].props;
	const res = await api.get(queryBuilder(url, params));
	return res?.data || [];
}

const useGetAll = props => {
	console.log("props>>>", props);
	const { name, onSuccess, onError } = props;
	const { data = [], isLoading, isFetched, ...otherProps } = useQuery({
		queryKey: [name, { props }],
		queryFn: getAll,
		onSuccess: onSuccess,
		onError: onError
	});

	return { data, isLoading, isFetched, otherProps };
};

export default useGetAll;
