import axios from './axios';

async function sendimages(payload) {
  console.log('payload', payload);
  const response = await axios.post(`/api/v1/image?medId=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default sendimages;