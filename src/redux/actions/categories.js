import axios from 'axios'


export const getCategories = () => ({
    type: "GET_CATEGORIES",
    payload: axios.get('http:/192.168.1.32:3000/api/v1/category')
})