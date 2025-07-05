import axios from "axios";

const APi_URL = "http://localhost:5000/api"

export const my_axios = axios.create({
    withCredentials: true,
    baseURL: APi_URL
})

my_axios.interceptors.request.use((config) => {

    const userKey = localStorage.getItem("lokalKey")
    if(userKey) {
        config.headers.Authorization = `Bearer ${userKey}`
    } 
    return config 
    
})



my_axios.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config

        if(error.response.status === 401 &&
           !originalRequest._isRetry
        ) {
            originalRequest._isRetry = true

            try {
                const response = await axios.get(`${APi_URL}/refresh`, {
                    withCredentials: true
                })
                localStorage.setItem("lokalKey", response.data.accessToken)
                return my_axios.request(originalRequest)
            } catch (error) {
                if(error instanceof Error) console.log(error.message)
                return Promise.reject(error)
            }
        }

        return Promise.reject(error)
    }

)
