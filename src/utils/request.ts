import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// create an axios instance
const service = axios.create({
  baseURL:
    import.meta.env.VITE_APP_PUBLIC_PATH + import.meta.env.VITE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
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
  response => {
    // Login or other response handle place here.
    return response
  },
  error => {
    console.log('err' + error) // for debug
    console.error(error.message)
    return Promise.reject(error)
    // console.log('err' + error)
    // let { message } = error
    // if (message == 'Network Error') {
    //   message = '后端接口连接异常'
    // } else if (message.includes('timeout')) {
    //   message = '系统接口请求超时'
    // } else if (message.includes('Request failed with status code')) {
    //   message = '系统接口' + message.substr(message.length - 3) + '异常'
    // }
    // Message({
    //   message: message,
    //   type: "error",
    //   duration: 5 * 1000
    // });
    // return Promise.reject(error)
  }
)

export default service
