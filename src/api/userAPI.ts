import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl:any = getBaseUrl();

export function getUsers() {
  return get('users');
}

export function deleteUser(id: Number) {
  return del(`users/${id}`);
}

function del(url: String) {
  const request = new Request(baseUrl + url, {
    method : 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function get(url:String){
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response:any):any{
  return response.json();
}

function onError(error:String):any {
  console.log(error); //eslint-disable-line no-console
}
