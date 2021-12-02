let xhr = null;
if (window.ActiveXObject) {
  xhr = new ActiveXObject('Microsoft.XMLHTTP');
} else {
  xhr = new XMLHttpRequest();
}

const XHR = (data) => {

}

export default XHR;