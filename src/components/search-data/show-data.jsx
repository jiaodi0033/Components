import React from 'react'
import {Col, Divider, Row} from "antd";


const arr=[],dataLength=256;
for (let i=0;i<dataLength;i++){
    arr.push(i)
}
class ShowData extends React.Component {


    render() {
        const {background}=this.props
        return (
            <div>
                <Divider orientation="left">Vertical</Divider>
                <Row gutter={[1, 1]}>
                    { arr.map((item ,index)=>
                        (<Col className="gutter-row" span={1.5} key={index}>
                        <div className="gutter-row-item" style={{background:background[index]}}>{item}</div>
                    </Col>)
                    )}

                </Row>
            </div>
        )
    }
}

export default ShowData;