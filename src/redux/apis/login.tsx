import axios from './AxiosDeclaration';
​
async function sendLoginRequest(payload) {
    console.log('payload',payload);
    const response = await axios.get('/api/v1/login=${payload}');
    console.log(response + 'Saga');
    return response.data;
}
​
export default sendLoginRequest;