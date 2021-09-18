import Axios from 'axios'


// const url = window.location.host; 


Axios.defaults.baseURL = 'http://xxx.xx.xxx.xx'


export function demo(data) {
  return Axios.post('/demo', data).then(data => data)
}
