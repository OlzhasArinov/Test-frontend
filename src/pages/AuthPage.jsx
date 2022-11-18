import React from 'react'
import {Form, Input, Select, Button} from 'antd'
import { LockOutlined } from '@ant-design/icons';
import {Link, useNavigate} from 'react-router-dom'

const {Option} = Select

function AuthPage() {
  const navigate = useNavigate()
    const onFinish = (values) => {
        if (localStorage.getItem('password') === values.password && localStorage.getItem('Phone') === values.phone) {
          navigate('/main')
        } else {
          alert('Invalid phone number or password')
        }
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
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            prefix: '+7',
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="phone"
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
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to='/registration'>register now!</Link>
          </Form.Item>
        </Form>
      );
}

export default AuthPage