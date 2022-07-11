import axios from './axios';

async function fetchmedimages(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/medicine-images?medId=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default fetchmedimages;
