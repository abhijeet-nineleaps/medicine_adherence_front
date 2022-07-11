import axios from './axios';
​
async function syncmeds(payload) {
    console.log('payload',payload);
    const response = await axios.get('/api/v1/medicines/sync=${payload}');
    console.log(response + 'Saga');
    return response.data;
}
​
export default syncmeds;