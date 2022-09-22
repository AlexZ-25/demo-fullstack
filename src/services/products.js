import axios from 'axios';

const URL = 'https://demo-api-2.onrender.com/api/products'
const CONFIG = {
    headers: {
        'auth-token': localStorage.getItem('token')
    }
}

export const obtenerProductosService = async () => {
    const resp = await axios.get(`${URL}`, CONFIG)
    console.log(resp.data.data);
    return resp.data;
}

export const crearProductoService = async (form) => {
    const resp = await axios.get(`${URL}`,
        form, CONFIG)
    return resp.data;
}

export const eliminarProductoService = async (id) => {
    const resp = await axios.delete(
        `${URL}/${id}`,
        CONFIG
    );
    return resp.data;
};

export const obtenerProductoService = async (id) => {
    const resp = await axios.get(`${URL}/${id}`, CONFIG);
    return resp.data
}

export const actualizarProductoService = async (id, form) => {
    const resp = await axios.put(`${URL}/${id}`,
        form, CONFIG);
    return resp.data
}