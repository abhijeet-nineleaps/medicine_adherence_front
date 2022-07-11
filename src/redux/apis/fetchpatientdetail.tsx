import axios from './axios';

async function fetchpatientdetail(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/user?userId=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default fetchpatientdetail;