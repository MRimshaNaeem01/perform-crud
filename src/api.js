import axios from 'axios';

const API_URL = 'https://backend.efinder24.com/public';
const token = '719|wGpEPtw0hQLiuI0P6Qp89pfDx8bzfITH8rJuTb3veba50a89';

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
});


export const getData = () => axiosInstance.get('/api/admin/events');
export const createData = (data) => axiosInstance.post('/api/admin/events', data);
export const updateData = (id, data) => axiosInstance.put(`/api/admin/events/${id}`, data);
export const deleteData = (id) => axiosInstance.delete(`/api/admin/events/${id}`);