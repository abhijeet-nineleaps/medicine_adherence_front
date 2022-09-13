import {API_URL} from '../../repositories/var';
import RNFetchBlob from 'rn-fetch-blob';

const {config} = RNFetchBlob;

const DownloadPdf = async (globalmedId) => {
  const date = new Date();
  let downloadPath = RNFetchBlob.fs.dirs.DownloadDir.pdf;
  const options = {
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true, 
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
