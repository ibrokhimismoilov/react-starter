import { useQuery } from "react-query";
import { api, queryBuilder } from "services";

async function getOne({ queryKey }) {
	const { url, params } = queryKey[1].props;
	const res = await api.get(queryBuilder(url, params));
	return res?.data || {};
}

const useGetOne = props => {
	const { name, onSuccess, onError, id } = props;
	const { data = [], isLoading, isFetched, ...otherProps } = useQuery({
		queryKey: [`${name}-${id}`, { props }],
		queryFn: getOne,
		onSuccess: onSuccess,
		onError: onError
	});

	return { data, isLoading, isFetched, otherProps };
};

export default useGetOne;
