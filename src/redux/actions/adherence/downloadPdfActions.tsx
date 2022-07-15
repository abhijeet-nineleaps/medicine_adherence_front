import Types from '../allTypes';

function downloadPdf(globalmedId) {
  return {
    type: Types.PDF_DOWNLOAD,
    payload: globalmedId,
  };
}

function downloadPdfSuccess(data) {
  return {
    type: Types.SUCCESS_PDF_DOWNLOAD,
    paylaod: data,
  };
}

function downloadPdfError(error) {
  return {
    type: Types.FAILED_PDF_DOWNLOAD,
    payload: error,
  };
}

export const downloadPdfActions = {
  downloadPdf,
  downloadPdfSuccess,
  downloadPdfError,
};
