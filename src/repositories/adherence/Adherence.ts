import {API_URLS} from '../../constants/Apiurl';

interface Iparams {
  meds_id: any;
  syncData: any;
}

const Adherence = {
  syncmedicineHistory: async (params: Iparams) => {
    const {meds_id, syncData} = params;
    let response = await fetch(`${API_URLS.SYNC_HISTORY}?medId=${meds_id}`, {
      method: 'POST',
      body: JSON.stringify(syncData),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return response;
  },
};

export default Adherence;
