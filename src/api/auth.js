import Api from './api';

export function login(params) {
  return Api().post('/login', params);
}

export function sendSMSCode(params) {
  return Api().post('/sms', params);
}

export function register(params) {
  console.log(params);
  return Api().post('/register/phone', params);
}

export function info(params) {
  console.log(params);
  return Api().post('/register/info', params);
}
