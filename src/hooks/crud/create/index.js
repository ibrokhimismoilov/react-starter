import { useMutation } from "react-query";
import { api, queryBuilder } from "services";

async function createData({ queryKey }) {
	const { url, params } = queryKey;

	const res = await api.post(queryBuilder(url, params));

	return res.data;
}

const useCreateData = props => {
	const { name, onSuccess, onError } = props;

	const { data, status, isLoading, ...otherProps } = useMutation({
		mutationKey: [name, props],
		mutationFn: createData,
		onSuccess: onSuccess,
		onError: onError
	});

	return { data, status, isLoading, otherProps };
};

export default useCreateData;
