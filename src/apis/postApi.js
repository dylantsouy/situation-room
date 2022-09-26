import { fetcher } from './apiSetup';

const postApi = async () => {
    const { data, error } = await fetcher('/deleteFWFile', 'POST', {});

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default postApi;
