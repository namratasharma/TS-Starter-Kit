export default function getBaseUrl():any {
  //return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://polar-cliffs-67333.herokuapp.com/';
}
/* eslint-disable no-useless-escape */
function getQueryStringParameterByName(name:any) {
  var url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
