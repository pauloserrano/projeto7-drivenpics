import axios from 'axios'

const unsplashAPI = axios.create({
    baseURL: 'https://api.unsplash.com/photos/'
})

export default unsplashAPI