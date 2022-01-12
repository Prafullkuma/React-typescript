
import { Modal, Button, Input } from 'antd';

type ModalProp = {
    isModalVisible: boolean,
    title: any,
    body: any,
    handleOk: any,
    handleCancel: any,
    handleChange: any,
    handlebodyChange: any,
    currentObj: any
}
const ModalComp = ({ isModalVisible, title, body, currentObj, handleOk, handleCancel, handleChange, handlebodyChange }: ModalProp) => {
    const { TextArea } = Input;

    return (
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Input placeholder="title" onChange={handleChange} value={currentObj?.title ? currentObj?.title : title} /><br /><br />
            <TextArea rows={4} placeholder="Body" value={currentObj?.body ? currentObj?.body : body} onChange={handlebodyChange} />
        </Modal>
    )
}

export default ModalComp 
