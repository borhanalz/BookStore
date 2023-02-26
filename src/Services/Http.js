import axios from 'axios'

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_HARRYPOTTER;

export function get(url,conf) {
    return axios.get(url,conf)
    .then(res=>res.data)
    .catch(error=>console.log(error))
}

export function post(url,data,conf) {
    return axios.post(url,data,conf)
    .then(res=>res.data)
    .catch(error=>console.log(error))
}