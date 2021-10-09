import bluebird from 'bluebird';
window.fetch.Promise = bluebird;
const Fetch = (data) => {
  return fetch(data).then(res => {
    return res.json()
  })
}

export default Fetch;