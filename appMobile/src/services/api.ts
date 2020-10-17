import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.0.187:3333', //Ip do pc disponivel quando roda o expo
});

export default api;