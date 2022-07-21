import { API_URL } from '../../repositories/var';
import RNFetchBlob from 'rn-fetch-blob';
import { logger } from 'react-native-logs';

const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  transportOptions: {
    colors: {
      debug: "greenBright",
      info: "blueBright",
      warn: "yellowBright",
      error: "redBright",
    },
  },
};

var log = logger.createLogger(defaultConfig);

const {config} = RNFetchBlob;

const DownloadPdf = async (globalmedId: any) => {
  const date = new Date();

  let downloaddir = RNFetchBlob.fs.dirs.DownloadDir;
  let downloadPath = `${downloaddir}/report_${Math.floor(
    date.getTime() + date.getSeconds() / 2,
  )}.pdf`;
  const options = {
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true, // true will use native manager and be shown on notification bar.
      notification: true,
      path: downloadPath,
      description: 'Downloading your report',
    },
  };
  let generate_pdf_url = `${API_URL}/api/v1/pdf?medId=${globalmedId}`;
  let response = '';

  try {
    await fetch(generate_pdf_url)
      .then(res => res.json())
      .then(async resp => {
        log.info(resp.message);
        await config(options)
          .fetch('GET', `${API_URL}/upload/static/pdf/${resp.message}.pdf`)
          .catch(() => {
            return 'err';
          });
      })
      .catch(() => {
        response = 'err';
        return response;
      });
    return response;
  } catch (err) {
    response = 'err';
    return response;
  }
};

export default DownloadPdf;
