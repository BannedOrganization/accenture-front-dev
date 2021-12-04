import {Button, Card, message, Upload} from "antd";
import Meta from "antd/es/card/Meta";
import "./style.scss"
import {UploadOutlined} from "@ant-design/icons";
import HistoryList from "./_components/HistoryList";
import {useState} from "react";


const props = {
    name: 'file',
    multiple: false,
    action: `${process.env.REACT_APP_ML_HOST}/recognitors/car_number/`,
    onChange(info) {
        const {status} = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    }
}

const CheckRejectPerc = () => {
    return (

        <Card className="check-tool">
            <Upload {...props} className="upload">
                <UploadOutlined className="upload-icon"/>
                <Meta
                    title="Проверить процент брака вручную"
                    description="Загрузите фотографию сырья с устройства"
                />
            </Upload>
        </Card>

    )
}

const CheckCarNumber = () => {
    return (
        <Card className="check-tool">
            <Upload {...props} className="upload">
                <UploadOutlined className="upload-icon"/>
                <Meta
                    title="Занести поставку в отчет по автомобильному номеру"
                    description="Загрузите фотографию номера с устройства"
                />
            </Upload>
        </Card>

    )
}



const Modal = () => {
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)

    const showModal = () => {
        setVisible(true)
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal with customized footer
            </Button>
            <Modal
                visible={visible}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Submit
                    </Button>,
                    <Button
                        key="link"
                        href="https://google.com"
                        type="primary"
                        loading={loading}
                        onClick={handleOk}
                    >
                        Search on Google
                    </Button>,
                ]}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}

const Tools = () => {
    return (
        <div>
            <div className="tools">
                <CheckRejectPerc/>
                <CheckCarNumber/>
            </div>
            <HistoryList/>
        </div>

    )
}

export default Tools