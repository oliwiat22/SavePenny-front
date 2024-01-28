import Axios from 'axios';
export const SERVER_URL = 'http://localhost:8080/api/shopping-list';

export const addProduct = (name, price) => {
    const url = `${SERVER_URL}/add`;
    const newProduct= {
        name: name, 
        price: price,
    }
    return Axios.post(url, newProduct)
}

