import axios from "axios";

export const api = axios.create({
    baseURL: "https://fakestoreapi.com/products",
})

export const infiniteAPI = axios.create({
    baseURL: "https://dummyjson.com/products"
})