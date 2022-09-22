import axios from "axios";

const URL_ROOT = 'https://demo-api-2.onrender.com/api/auth'

const CONFIG = {
    headers: {
        'auth-token': localStorage.getItem('token')
    }
}

export const loginService = async (form) => {
    //const resp = await axios.post('https://demo-api-2-0gy6.onrender.com/api/auth',
    const resp = await axios.post(`${URL_ROOT}/login`,
        form
    );
    return resp.data;
}

export const signupService = async (form) => {
    const resp = await axios.post(`${URL_ROOT}`,
        form
    );
    return resp.data;
}

export const verifyingTokenService = async () => {
    const resp = await axios.get(`${URL_ROOT}`, {
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    });
    return resp.data;
}
