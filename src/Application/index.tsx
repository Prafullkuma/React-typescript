import React, { useEffect, useState, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoadingAction } from '../Redux/Actions/PostAction'

import {
    LoadingOutlined
} from '@ant-design/icons';

const ListPost = React.lazy(() => import('./ListPost'))

const Application = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    useEffect(() => {
        dispatch(setLoadingAction())
    }, [])

    const post = useSelector((state: any) => {
        return state?.postReducer?.post
    })
    useEffect(() => {
        setData(post)
    }, [post])
    return (
        <div className=" container m-14">
            <Suspense fallback={
                <div>
                    <LoadingOutlined style={{ color: 'red' }} className=' text-9xl mt-14' />
                </div>
            }>
                <ListPost post={data} />
            </Suspense>
        </div>
    )
}

export default Application
