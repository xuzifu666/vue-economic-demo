import axios from 'axios'
import { Message, Loading } from 'element-ui';

let loading;

function startLoading() {
  loading = Loading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

function stopLoading() {
  loading.close();
}

axios.interceptors.request.use(config=>{
  startLoading();
  config.headers['X-TOKEN'] = localStorage.getItem('token')
  console.info('设置头属性')
  return config;
},
error => {
  Promise.reject(error);
})

axios.interceptors.response.use(response=>{
  stopLoading();
  Message.success("请求成功");
  return response;

},error => {
  stopLoading();
  Message.error("请求失败");
  return Promise.reject(error);
})

export default axios;
