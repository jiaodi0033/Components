import React from 'react'
import {Input} from "antd";
import {api} from '../../apis/api-urls'


import 'antd/dist/antd.css';

import '../../App.css'
import Show from "./show";
const { Search } = Input;




class Query extends React.Component{
    state={
            isTrue:false,
            province:'',
            catName:'',
            telString:''
    }
    // 发送ajax请求
    onSearch = value => {
        console.log(value)
        const reg = /^1([0-9]*)?$/;		// 以数字1开头，任意数字结尾，且中间出现零个或多个数字
        if (!reg.test(value) || value.length<11 ) {
           alert('请输入正确的手机号！');
           return
        }
        // axios方式

        api(value).then(
            (response)=>{
                const result=response.data;
                let res=result.split('=')[1];
                res= eval ("(" + res + ")");
                if(res.province && res.catName && res.telString){
                    this.setState(
                        {
                            isTrue:true,
                            province:res.province,
                            catName:res.catName,
                            telString:res.telString
                        }
                    )
                }else {
                    this.setState(
                        {
                            isTrue:false
                        }
                    )
                }

            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )

    };

    render() {
        const {province,catName,telString,isTrue}=this.state
        return(
            <div className="container">
                <Search
                    placeholder="请输入手机号码"
                    required
                    allowClear
                    enterButton="查询"
                    size="large"
                    ref={(Search)=>this.input=Search}
                    onSearch={this.onSearch}
                    maxLength='11'

                />
                <Show province={province} catName={catName} telString={telString} isTrue={isTrue}/>
            </div>
        )
    }

}

export default Query;