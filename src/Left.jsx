import { useState } from 'react'
import { Button, Tree } from 'antd';
import './Left.css'
const { DirectoryTree } = Tree;
const treeData = [
    {
        title: '成都农商银行',
        key: '0-0',
        children: [
            {
                title: '常用菜单',
                key: '0-0-0',
                isLeaf: true,
            },
            {
                title: '常用菜单_1',
                key: '0-0-1',
                isLeaf: true,
            },
        ],
    },
    {
        title: '系统管理',
        key: '0-1',
        children: [
            {
                title: '日志管理',
                key: '0-1-0',
                isLeaf: true,
            },
            {
                title: '权限管理',
                key: '0-1-1',
                isLeaf: true,
            },
        ],
    },
];
function Left() {
    const onSelect = (keys, info) => {
        console.log('Trigger Select', keys, info);
    };
    const onExpand = (keys, info) => {
        console.log('Trigger Expand', keys, info);
    };
    return (
        <div>
            <div className='top'>
                <div>展开</div>
                <div>折叠</div>
                <div>刷新</div>
            </div>
            <DirectoryTree
                multiple
                defaultExpandAll
                onSelect={onSelect}
                onExpand={onExpand}
                treeData={treeData}
            />
        </div>
    )
}
export default Left