import axios from './Axiosdeclaration';

async function fetchcaretaker(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/caretakers?patientId=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default fetchcaretaker;
