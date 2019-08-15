import axios from 'axios';
import store from '@/store';

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API
});

service.interceptors.request.use(
    config => {
       config.headers['Access-Token'] = store.getters.token; // 让每个请求携带自定义token
       config.headers['X-Requested-With']  = 'XMLHttpRequest';
       if (!store.getters.token) {
            let href = [window.parent.location.protocol, '//', window.parent.location.host, '/'].join('');
            let loginurl = process.env.VUE_APP_SSO_URL + href;
            window.location.href = loginurl
       }
       return config;
    }, error => {
        Promise.reject(error);
    }
);

// respone 拦截器
service.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
       if (error && error.response && error.response.status === 401) {
           let href = [window.parent.location.protocol, '//', window.parent.location.host, '/'].join('');
           let loginurl = process.env.VUE_APP_SSO_URL + href;
           window.location.href = loginurl
       }
       return Promise.reject(error.response.data);
    }
);

export default service;
