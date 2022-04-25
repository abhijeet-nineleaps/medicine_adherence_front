import {API_URL} from '@env';

const NetworkCalls = {
  synchistory: async (medId: Number, medHistory: any) => {
    console.log(medHistory);
    let response = await fetch(
      `${API_URL}/api/v1/medicine-history/sync?medId=${medId}`,
      {
        method: 'POST',
        body: JSON.stringify(medHistory),
        headers: {
          'Content-type': 'application/json',
        },
      },
    );
    return response;
  },
  getmedicineHistory: async medId => {
    let response = await fetch(
      `${API_URL}/api/v1/medicine-histories?medId=${medId}`,
      {
        headers: {
          'Content-type': 'application/json',
        },
      },
    );
    return response.json();
  },
  fetchCaretakers: async (user_id: any) => {
    let response = await fetch(
      `${API_URL}/api/v1/caretakers?patientId=${user_id}`,
      {
        headers: {
          'Content-type': 'application/json',
        },
      },
    );
    return response.json();
  },
};

export default NetworkCalls;
