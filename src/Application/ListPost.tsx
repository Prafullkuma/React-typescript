import { Modal, Button, Input } from 'antd';
import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addPostActionLoading, deletePostActionLoading, editPostActionLoading } from '../Redux/Actions/PostAction'
import ModalComp from './ModalComp';
import {
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';

type postProp = {
    post: {}[]
}

const ListPost = (props: postProp) => {


    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [currentObj, setCurrentObj] = useState({})

    const handleDelete = (id: number) => {
        dispatch(deletePostActionLoading(id))
    }

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleOk = () => {
        const formData = {
            userId: Number(new Date()),
            title: title,
            body: body
        }
        dispatch(addPostActionLoading(formData))
        setTitle("")
        setBody("")
        setIsModalVisible(false);
        // dispatch(editPostActionLoading(formData))
    };

    const handleEdit = (userId: any, id: any) => {
        const result = props.post.find((ele: any) => {
            return ele.id === id
        })
        setCurrentObj({ ...result })
        setIsModalVisible(true);
    }

    const handleChange = (e: any) => {
        const attr = e.target.value
        setTitle(attr)
    }

    const handlebodyChange = (e: any) => {
        const attr = e.target.value
        setBody(attr)
    }
    return (
        <div className='container'>
            <div>
                <button onClick={showModal} className='p-4 text-xl border-2 border-indigo-300 bg-black text-white'>Add Post</button>
            </div>
            {
                props.post.map((ele: any) => {
                    return (
                        <div key={ele.id} className="p-7 m-6  border-2 border-solid drop-shadow-lg border-indigo-200 flex justify-between bg-gray-300 hover:bg-red-100">{/**tablet:bg-blue-300 tablet:p-3 m-5 laptop:bg-blue-400 laptop:p-7 laptop:m-6 tablet:p-3 m-5 */}
                            <h4 className="text-2xl" key={ele.id}>{ele.title}</h4>
                            {/* <span onClick={() => handleEdit(ele?.userId, ele?.id)} >Edit</span> */}
                            <div>
                                {/* <EditOutlined style={{ color: 'green' }} onClick={() => handleEdit(ele?.userId, ele?.id)} className='mr-9 cursor-pointer text-4xl' /> */}
                                <DeleteOutlined style={{ color: 'red' }} onClick={() => handleDelete(ele?.id)} className='cursor-pointer text-4xl' />
                            </div>
                        </div>
                    )
                })
            }

            <ModalComp
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                handleChange={handleChange}
                title={title}
                body={body}
                currentObj={currentObj}
                handlebodyChange={handlebodyChange}
            />

            {/* {Object.keys(currentObj).length !== 0 &&
                <ModalComp
                    isModalVisible={isModalVisible}
                    handleOk={handleOk}
                    handleCancel={handleCancel}
                    handleChange={handleChange}
                    title={currentObj?.title}
                    body={currentObj?.body}
                    currentObj={currentObj}
                    handlebodyChange={handlebodyChange}
                />
            } */}
        </div >
    )
}

export default ListPost
