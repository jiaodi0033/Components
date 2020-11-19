import axios from 'axios'

export function api(data){
    return axios({
        method:'get',
        //url='https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=手机号码'
        url:'/cc/json/mobile_tel_segment.htm?tel='+data,//淘宝手机号归属地查询接口
        headers:{'Content-Type': 'application/x-www-form-urlencoded'}
    })
}