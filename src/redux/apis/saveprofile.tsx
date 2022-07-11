import axios from './axios';

async function saveprofile(payload) {
  console.log('payload', payload);
  const response = await axios.put(`/api/v1/user-details?userId=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default saveprofile;
