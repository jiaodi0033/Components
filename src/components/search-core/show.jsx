import React from 'react'
import {Card} from "antd";


class Show extends React.Component{
    render() {
        const {province,catName,telString,isTrue}=this.props
        let display=isTrue?"":"none";
        let display1=isTrue?"none":"";
        return(
            <Card title="归属地查询">
                <Card type="inner" title={catName} extra={<a href="#">More</a>} style={{display:display}}>
                            省份：{province}<br/>
                            电话号码：{telString}
                </Card>
                <Card type="inner" style={{display:display1}}>
                    该手机号为空！
                </Card>

            </Card>


        )
    }
}
export default Show;