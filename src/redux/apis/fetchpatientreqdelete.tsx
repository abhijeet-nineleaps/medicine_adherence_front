import axios from './axios';

async function fetchpatientreqdelete(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/accept`);
  console.log(response + ' Saga ');
  return response.data;
}

export default fetchpatientreqdelete;

