import React, {useState} from 'react';
import {Button, Form, Input, Select} from 'antd';
import "./style.scss"
import Title from "antd/es/typography/Title";

const {Option} = Select;

const PriceInput = ({value = {}, onChange}) => {
    const [number, setNumber] = useState(0);
    const [currency, setCurrency] = useState('rmb');

    const triggerChange = (changedValue) => {
        onChange?.({
            number,
            currency,
            ...value,
            ...changedValue,
        });
    };

    return (
        <span className="form">
      <Input type="text"/>
      <Select className="select">
        <Option value="rmb">Все</Option>
        <Option value="0">Брак</Option>
        <Option value="dollar">Номера</Option>
      </Select>
    </span>
    );
};

const HistoryListHeader = () => {
    return (
        <Form
            name="customized_form_controls"
            className="HistoryListHeader"
            layout="inline"
            initialValues={{
                price: {
                    currency: 'rmb',
                },
            }}
        >
            <Title level={3}>Глобальная история проверок</Title>
            <div className="form-main">
                <PriceInput/>
                <Button type="primary" htmlType="submit">
                    Применить
                </Button>
            </div>
        </Form>
    );
};

export default HistoryListHeader