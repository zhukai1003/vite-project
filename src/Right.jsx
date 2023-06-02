import { useState } from 'react'
import { Tabs, Button, Checkbox, Form, Input, Select, DatePicker } from 'antd';
import ShowTable from './ShowTable'
const { RangePicker } = DatePicker;

const { Option } = Select;
const onChange = (key) => {
    console.log(key);
};

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const onGenderChange = (value) => {
    console.log(value);

};
const items = [
    {
        key: '1',
        label: `代办任务`,
        children: <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="任务编码"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="任务描述"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="节点编码"
                    name="password1"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password1!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="gender" label="运行标志描述" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a 运行标志描述"
                        onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                   label="数据日期"
                    
                >
                    <RangePicker />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        查询
                    </Button>
                </Form.Item>
            </Form>
            <ShowTable />
        </div>,
    },
    {
        key: '2',
        label: `日志监控`,
        children: `日志监控`,
    }
];
function Right() {
    return <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
}
export default Right