import axios from 'axios'
import { getToken } from '../auth'
import { message, Modal } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';
let temMessageBox: boolean | null = null

const instance = axios.create({
    baseURL: '',
    timeout: 15000
})

//请求拦截
instance.interceptors.request.use(
    config => {
        const token = getToken()
        if (token) {
            config.headers['Authorization'] = token
        }
        return config
    },
    error => {
        return Promise.reject(error);
    }
)

//响应拦截
instance.interceptors.response.use(
    response => {
        const res = response.data
        if (res.status === 40001) {
            message.warning('用户不存在或账户密码错误！')
            return Promise.reject("error");
        }
        if (
            response.status === 401 ||
            res.status === 40101 ||
            res.status === 40501
        ) {
            if (!temMessageBox) {
                temMessageBox = true
                Modal.confirm({
                    title: '你已被登出或登录超时，可以关闭继续留在该页面，或者重新登录',
                    icon: createVNode(ExclamationCircleOutlined),
                    onOk() {
                        console.log('Modal.confirm.onOk');
                        //此处需要添加前端登出功能
                        temMessageBox = false
                    },
                    onCancel() {
                        console.log('Modal.confirm.onCancel');
                        temMessageBox = false
                    },
                });
            }
            return Promise.reject("error");
        }
        if (res.status === 40301) {
            message.warning('无相关权限')
            return Promise.reject("error");
        }
        if (response.status !== 200 && res.status !== 200) {
            message.error(`${res.message}`)
            return Promise.reject("error");
        } else {
            return res
        }
    },
    error => {
        const res = error.response.data
        if (res.status === 40001) {
            message.warning('用户不存在或账户密码错误！')
        }
        if (
            error.response.status === 401 ||
            res.status === 40101 ||
            res.status === 40501
        ) {
            if (!temMessageBox) {
                temMessageBox = true
                Modal.confirm({
                    title: '你已被登出或登录超时，可以关闭继续留在该页面，或者重新登录',
                    icon: createVNode(ExclamationCircleOutlined),
                    onOk() {
                        console.log('Modal.confirm.onOk');
                        //此处需要添加前端登出功能
                        temMessageBox = false
                    },
                    onCancel() {
                        console.log('Modal.confirm.onCancel');
                        temMessageBox = false
                    },
                });
            }
        }
        if (res.status === 40301) {
            message.warning('无相关权限')
        }
        if (error.response.status !== 200 && res.status !== 200) {
            message.error(`${res.message}`)
        } else {
            return res
        }
        return Promise.reject(error);
    }
)