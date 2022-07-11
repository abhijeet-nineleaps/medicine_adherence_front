import axios from './axios';

async function emailcaretaker(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/email?email=${payload}&sender={udet.user.givenName}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default emailcaretaker;