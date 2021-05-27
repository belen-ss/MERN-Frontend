import Cookies from 'universal-cookie';
import axios from 'axios';

import {APIHOST as host} from '../../app.json';

var cookies = new Cookies();

export const calculateExp = () => {
  const now = new Date().getTime();
  const expDate = now + 60 * 30 * 1000;
  return new Date(expDate);
};

export const getSession = () => {
  return cookies.get('_s') === undefined ? false : cookies.get('_s');
}

const renewSession = () => {
  const session = getSession()
  if (!session) window.location.href = '/login';

  cookies.set('_s', session, {
    path: '/',
    expires: calculateExp()
  })
  return session;
};

export const request = {
  get: function(service){
    let token = renewSession()
    return axios.get(`${host}${service}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}