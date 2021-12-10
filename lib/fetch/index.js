import Request from './fetch';
import XHR from './xhr';

const Fetch = async (data) => {
  if (window.fetch) {
    return Request(data);
  } else {
    return XHR(data);
  }
}

export default Fetch;