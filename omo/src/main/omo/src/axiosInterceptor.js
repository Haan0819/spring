import axios from 'axios';

const TOKEN = sessionStorage.getItem('ACCESS_TOKEN');
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + TOKEN,
    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const {
            config,
            response: { status },
        } = error;

        const originalRequest = config;

        if (status === 403) {
            const accessToken = sessionStorage.getItem('ACCESS_TOKEN');


            try {
                const { data } = await axios({
                    method: 'post',
                    url: `/members/reissue`,
                    data: { accessToken },
                });
                const newAccessToken = data.data.accessToken;

                originalRequest.headers = {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + newAccessToken,
                };
                sessionStorage.setItem('ACCESS_TOKEN', newAccessToken);

                return await axios(originalRequest);
            } catch (err) {
                new Error(err);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;