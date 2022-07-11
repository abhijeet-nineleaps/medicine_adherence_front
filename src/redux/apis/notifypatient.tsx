import axios from './axios';

async function notifypatient(payload) {
  console.log('payload', payload);
  const response = await axios.put(`/api/v1/notifyuser?medname=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default notifypatient;
