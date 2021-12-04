import {Avatar, Button, List, Space, Tag} from 'antd';
import React from "react";
import "./style.scss"
import HistoryListHeader from "../HistoryListHeader";
import {historyListData} from "../../../../data";


const IconText = ({icon, text}) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const HistoryList = () => {
    return (
        <List
            className="HistoryList"
            itemLayout="vertical"
            size="large"
            pagination={{
                pageSize: 3,
            }}
            dataSource={historyListData}
            header={
                <HistoryListHeader/>
            }
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        <Button>Связаться с сотрудником</Button>,
                        <Button type="primary">Изменить</Button>,
                    ]}
                    extra={
                        <img
                            height={180}
                            alt="logo"
                            src={item.uploaded}
                        />
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar}/>}
                        title={<a href={item.href}>{item.title}&nbsp;&nbsp;&nbsp;<Tag>{item.tag}</Tag></a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    )
}

export default HistoryList

