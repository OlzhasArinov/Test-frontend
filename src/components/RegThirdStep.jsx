import React from 'react'
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

function RegThirdStep() {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const onFinish = (values) => {
        localStorage.setItem('password', values.password)
        navigate('/main')
    };
  return (
    <Form 
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
    >
        <Form.Item
            name="password"
            label="Password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
                {
                    min: 6,
                    message: 'Minimum length of password should be 6!',
                },
                {
                    max: 20,
                    message: 'Maximum length of password should be 20!',
                }
            ]}
            hasFeedback
        >
        <Input.Password />
        </Form.Item>
        <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
            }),
            ]}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Register
            </Button>
        </Form.Item>
    </Form>
  )
}

export default RegThirdStep