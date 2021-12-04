import React, {useState} from 'react';
import {Avatar, Card, Menu} from 'antd';
import {AppstoreAddOutlined, CarOutlined, LogoutOutlined} from "@ant-design/icons";
import "./style.scss"
import {Link} from "react-router-dom";


const Logout = () => {
    return (
        <Card
            hoverable={true}
            bordered={true}
            className="logout"
        >
            <LogoutOutlined width="100"/>
        </Card>
    )
}


const SideMenu = () => {
    return (
        <div className="SideMenu">
            <Menu
                defaultSelectedKeys={['3']}
                mode="inline"
                className="menu"
            >
                <Menu.ItemGroup>
                    <Link to="/delivery-schedule">
                        <Menu.Item
                            eventKey="2"
                            icon={<CarOutlined/>}
                        />
                    </Link>
                    <Link to="/tools">
                        <Menu.Item
                            eventKey="3"
                            icon={<AppstoreAddOutlined/>}
                        />
                    </Link>
                </Menu.ItemGroup>
            </Menu>
        </div>
    );
};

export default SideMenu