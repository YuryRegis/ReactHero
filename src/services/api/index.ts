import axios, { AxiosInstance, AxiosResponse } from 'axios'


const API: AxiosInstance = axios.create({
    baseURL: 'https://developer.marvel.com/',
})


export const getAllHeroes = async() => {
    try {
        const response: AxiosResponse = await API.get('')
        const data = Object.keys(response.data.message)
       
        return data
    } catch (error) {
        console.log(error)
    }
}



export default API