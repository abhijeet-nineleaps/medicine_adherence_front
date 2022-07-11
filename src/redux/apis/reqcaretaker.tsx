import axios from './axios';

async function reqcaretaker(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/request`);
  console.log(response + ' Saga ');
  return response.data;
}

export default reqcaretaker;