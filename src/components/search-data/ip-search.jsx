import React from 'react'
import {Input} from "antd";
import ShowData from "./show-data";


const {Search}=Input
const rgb={}
for (let i=0;i<256;i++){
    rgb[i]="rgb(250,250,250)"
}

class IpSearch extends React.Component {
    state={
        "background":rgb
    }

    onSearch = value => {
        const ips=value.split('.')
        const getRes={};
        fetch('../test.json').then(res=>res.json())
            .then((data)=>{
                console.log(data)
                getRes[`${ips[0]}`]=data[`${ips[0]}`];
                getRes[ips[1]]=data[ips[1]];
                getRes[ips[2]]=data[ips[2]];
                getRes[ips[3]]=data[ips[3]];
                }

            )

        //获取输入数据，向服务器发送请求，得到返回数据getRes

        const maxV=[getRes[ips[0]],getRes[ips[1]],getRes[ips[2]],getRes[ips[3]]].sort().reverse()
        const a=(255-(getRes[ips[0]]/maxV[0])*240)
            ,b=(255-(getRes[ips[1]]/maxV[0])*240)
            ,c=(255-(getRes[ips[2]]/maxV[0])*240)
            ,d=(255-(getRes[ips[3]]/maxV[0])*240)
        getRes[ips[0]]=`rgb(${a},${a},${a})`
        getRes[ips[1]]=`rgb(${b},${b},${b})`
        getRes[ips[2]]=`rgb(${c},${c},${c})`
        getRes[ips[3]]=`rgb(${d},${d},${d})`
        const background=this.state.background;
        background[ips[0]]=getRes[ips[0]]
        background[ips[1]]=getRes[ips[1]]
        background[ips[2]]=getRes[ips[2]]
        background[ips[3]]=getRes[ips[3]]
        //更新状态
        this.setState({
           background:background
        })
    }

    render() {
        const {background}=this.state
        return (
            <div className="container">
                <h5>Please input your ip to search</h5>
                <Search
                    placeholder="82.156.42.11"
                    required
                    allowClear
                    enterButton="Search"
                    size="large"
                    ref={(Search)=>this.input=Search}
                    onSearch={this.onSearch}
                />
                <ShowData background={background}/>

            </div>
        )
    }
}

export default IpSearch;
