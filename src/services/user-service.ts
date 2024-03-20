import axios from 'axios';

export async function getUsers() {
    try {
        const response = await axios.get('https://fakestoreapi.com/users');
        return response;
    } catch (error) {
        console.error(error);
    }
}