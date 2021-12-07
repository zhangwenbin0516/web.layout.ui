let xhr = null;
if (window.ActiveXObject) {
  xhr = new ActiveXObject('Microsoft.XMLHTTP');
} else {
  xhr = new XMLHttpRequest();
}

const XHR = (data) => {
  console.log(data)
}

export default XHR;