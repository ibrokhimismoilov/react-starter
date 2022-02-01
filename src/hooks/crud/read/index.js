import { useQuery } from "react-query";
import { api, queryBuilder } from "services";

// api call function
async function getData({ queryKey }) {
	const { url, params } = queryKey[1].props;
	const res = await api.get(queryBuilder(url, params));
	return res.data;
}

const useGetData = props => {
	const { name, onSuccess, onError } = props;
	const { data, status, isLoading, ...otherProps } = useQuery({
		queryKey: [name, { props }],
		queryFn: getData,
		onSuccess: onSuccess,
		onError: onError
	});

	return { data, status, isLoading, otherProps };
};

export default useGetData