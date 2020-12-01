import axios from 'axios';

axios.interceptors.request.use(config => {
    const passURL = ['/api/login','/api/register'];
    if (passURL.includes(config.url)) return config;
    const tk = localStorage.getItem('@Token');
    if (tk){
        config.headers.Authorization = 'Bearer ' + tk;
    }else{
        delete config.headers.Authorization;
    }
    return config;
})

axios.interceptors.response.use( response =>{
    const { status,msg } = response.data;
    if ( status === 1 && msg === 'Token Error'){
        window.location.href = './login';
    }
    return response;
});

export default axios;