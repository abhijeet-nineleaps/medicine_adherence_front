const caretaker = (state) => state.caretaker.caretaker;
const emailcaretaker = (state) => state.emailcaretaker.emailcaretaker;
const reqCaretaker = (state) => state.reqCaretaker.reqCaretaker;
const sendImage = (state) => state.sendImage.sendImage;

const caretakerLoad = (state) => state.caretaker.loading.fetchCaretakers;
const emailLoad = (state) => state.emailcaretaker.loading.sendEmail;
const reqCaretakerLoad = (state) => state.reqCaretajer.loading.sendReqCaretaker;
const sendImageLoad = (state) => state.sendImage.loading.sendImageRequest;

const caretakerError = (state) => state.caretaker.error.fetchCaretakerserror;
const emailError = (state) => state.emailcaretaker.error.sendEmailFailed;
const reqCaretakerError = (state) => state.reqCaretaker.error.sendReqCaretakerFailed;
const sendImageError = (state) => state.sendImage.error.sendImageFailed;


export const CaretakerSelectors ={
caretaker,
emailcaretaker,
reqCaretaker,
sendImage,
caretakerLoad,
caretakerError,
emailLoad,
emailError,
reqCaretakerLoad,
reqCaretakerError,
sendImageLoad,
sendImageError,
}