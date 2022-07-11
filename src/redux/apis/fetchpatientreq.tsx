import axios from './axios';

async function fetchpatientreq(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/patient/requests?userId=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default fetchpatientreq;

