import axios from 'axios';

const accessToken = localStorage.getItem("accessToken");

const AxiosApi = axios.create({

    headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    }
});

export default AxiosApi;