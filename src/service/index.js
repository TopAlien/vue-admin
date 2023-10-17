import axios from 'axios'
import { message, Modal } from 'ant-design-vue'
import useSettingStore from '@/store/setting.js'
import { getToken } from '@/utils/storage.js'

const setting = useSettingStore()

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers['X-Token'] = token
    }

    if (config.showLoading) {
      setting.changeSpin(true)
    }

    return config
  },
  (error) => {
    setting.changeSpin(false)
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    // if the custom code is not 20000, it is judged as an error.
    if (response.status !== 200) {
      message.error('Error')

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   Modal.confirm({
      //     title: '确认登录',
      //     content: '您已注销，可以取消以留在此页面，也可以重新登录',
      //     okText: '确认退出',
      //     onOk() {
      //       message.success('重写登录')
      //     },
      //     onCancel() {}
      //   })
      // }
      // return Promise.reject(new Error(res.message || 'Error'))
      setting.changeSpin(false)
      return Promise.reject(new Error('Error'))
    } else {
      setting.changeSpin(false)
      return response.data
    }
  },
  (error) => {
    message.error(error.message)
    setting.changeSpin(false)
    return Promise.reject(error)
  }
)

export default service
