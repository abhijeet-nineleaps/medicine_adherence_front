import axios from './axios';

async function fetchPatient(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/patients?caretakerId=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default fetchPatient;
