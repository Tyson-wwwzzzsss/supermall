import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })
  //  相关拦截器的配置
  //  拦截请求
  instance.interceptors.request.use(config =>{

    return config
  }, error => {
    // console.log(error);
  })

  // 拦截响应
  instance.interceptors.response.use(res => {
    return res.data
  }, err =>{

  })
  return instance(config)
}
