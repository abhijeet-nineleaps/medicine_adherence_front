import {API_URLS} from '../../constants/apiUrl';
export const Signupuser = {
  signup: async (params) => {
    const {userinfo, token} = params;
    let url = new URL(API_URLS.SIGNUP);
    url.searchParams.append('fcmToken', token);
    url.searchParams.append('picPath', userinfo.user.photo);

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        userName: userinfo.user.givenName,
        email: userinfo.user.email,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return response;
  },
  loginuser: async (params) => {
    const {userinfo, token} = params;
    let url = new URL(API_URLS.LOGIN);
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: userinfo.user.email,
        fcmToken: token,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return response;
  },
};
