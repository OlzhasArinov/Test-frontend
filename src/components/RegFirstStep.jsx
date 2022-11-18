import React from 'react'
import { Button, Form, Input, Select } from 'antd';

const {Option} = Select

function RegFirstStep({changeStepOnClick}) {

    const [form] = Form.useForm();
    const onFinish = (values) => {
        if (localStorage.getItem('Phone') === values.phone) {
            alert('Phone number is already used') 
            return
        } 
        localStorage.setItem('Phone', values.phone)
        changeStepOnClick(2)
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
            style={{
                width: 70,
            }}
            >
            <Option value="7">+7</Option>
            </Select>
        </Form.Item>
    )

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
                    name="firstName"
                    label="First name"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your first name!',
                        whitespace: true,
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="surname"
                    label="Surname"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your surname!',
                        whitespace: true,
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                    {
                    required: true,
                    message: 'Please input your phone number!',
                    },
                    {
                        pattern: new RegExp('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$'),
                        message: 'Wrong format',
                    },
                ]}
                >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                    width: '100%',
                    }}
                />
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

export default RegFirstStep 