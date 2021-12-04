import {Card, message, Upload} from "antd";
import Meta from "antd/es/card/Meta";
import "./style.scss"
import {UploadOutlined} from "@ant-design/icons";
import HistoryList from "./_components/HistoryList";


const props = {
    name: 'file',
    multiple: false,
    action: 'https://2f45-178-66-208-236.ngrok.io/recognitors/car_number/',
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