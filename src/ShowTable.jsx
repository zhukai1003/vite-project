import { useState } from 'react'
import { Space, Table, Tag } from 'antd';
const columns = [
    {
        title: '数据日期',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '任务编码',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '任务描述',
        dataIndex: 'address',
        key: 'address',
    },
];
const data = [
    {
        key: '1',
        name: '数据日期',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: '任务编码',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: '任务描述',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const ShowTable = () => <Table columns={columns} dataSource={data} />;
export default ShowTable;