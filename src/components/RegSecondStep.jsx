import React from 'react'
import { Button, Form, Input } from 'antd';


function RegSecondStep({changeStepOnClick}) {
    const [form] = Form.useForm();
    const onFinish = () => {
        changeStepOnClick(3)
    };
    
  return (
    <>
        <Form
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
            prefix: '+7',
            }}
            scrollToFirstError
        >
            <Form.Item
                        name="passcode"
                        label="Passcode"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your passcode!',
                            whitespace: true,
                        },
                        {
                            min: 4,
                            message: 'Passcode length should be 4!',
                        },
                        {
                            max: 4,
                            message: 'Passcode length should be 4!',
                        }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                
                <Form.Item>
                    <Button type="primary" htmlType="submit" >
                            Register
                    </Button>
                </Form.Item>
        </Form>
    </>
  )
}

export default RegSecondStep