import Types from "./AllTypes";

export function downloadPdf(globalmedId){
    return{
        type: Types.PDF_DOWNLOAD,
        payload: globalmedId
    };
}

export function downloadPdfSuccess(data){
    return{
        type: Types.SUCCESS_PDF_DOWNLOAD,
        paylaod: data
    };
}

export function downloadPdfError(error){
    return{
        type: Types.FAILED_PDF_DOWNLOAD,
        payload: error
    };
}