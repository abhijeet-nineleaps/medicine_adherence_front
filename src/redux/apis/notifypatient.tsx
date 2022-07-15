import { logger } from 'react-native-logs';
import axios from './axios';
const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
};
var log = logger.createLogger(defaultConfig);
async function notifypatient(payload) {
  log.info('payload', payload);
  const response = await axios.put(`/api/v1/notifyuser?medname=${payload}`);
  log.info(response + ' Saga ');
  return response.data;
}

export default notifypatient;
