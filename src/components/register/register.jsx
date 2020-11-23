

import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import axios from 'axios';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};


class Register extends React.Component {


    onFinish = (values) => {
        // console.log('Success:', values);
        const {handleClick}=this.props;
        axios.get('./users.json').then(
            res=>{
                const user=res.data;
                if(values.username === user.userName && values.password === user.passWord){
                    handleClick()
                }else {
                    window.confirm("用户名或者密码不正确，请重新输入")
                }

            }
        )

    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {


        return (
            <div >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input   placeholder="Email or tel" prefix={<UserOutlined />}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Password" prefix={<LockOutlined />}/>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" block ghost >
                            SIGNUP
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        )
    }
}

export default Register;