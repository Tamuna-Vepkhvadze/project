import { api } from "../http/Api"


const fachData = async (category: string) => {
    const result = await api.get(`/category${category}`)
    return result.data
}


export default fachData



