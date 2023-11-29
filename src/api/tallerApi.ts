import axios from "axios";

export const tallerApi = axios.create({
    baseURL: "http://localhost:3500/api/"
})