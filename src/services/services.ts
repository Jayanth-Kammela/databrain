import axios from "axios"

export const productsService = async () => {
    const response = axios.get('https://fakestoreapi.com/products');
    return (await response).data
}

export const listsService = async () => {
    const response = axios.get('https://jsonplaceholder.typicode.com/todos');
    return (await response).data
}