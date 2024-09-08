import { debug } from "../../App";
import ReactGA4 from "react-ga4";
export const generateId=(length)=>{
  let result='';
  const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter=0;
  while (counter<length) {
    result+=characters.charAt(Math.floor(Math.random() * charactersLength));
    counter+=1;
  }
  return btoa(result);
}
export const timeout=(ms)=>{
  return new Promise(resolve => setTimeout(resolve, ms));
}
export function getBase64(file) {
  var res;
  const reader=new FileReader();
  return reader.readAsDataURL(file);
}
export function dataURItoBlob(dataURI){
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if(dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else byteString = unescape(dataURI.split(',')[1]);
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  var ia = new Uint8Array(byteString.length);
  for(var i = 0; i < byteString.length; i++){
    ia[i] = byteString.charCodeAt(i);}
  return new Blob([ia], {type: mimeString});
}
export function getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
}
export const queryParams=getQueryParams(window.location.search);