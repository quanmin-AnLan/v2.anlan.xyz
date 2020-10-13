import axios, { AxiosRequestConfig, ResData } from 'axios'

export interface Get {
  <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<ResData<T>>;
}

const service = axios.create({
  timeout: 5000
})

export const get: Get = async (url, params, config) => {
  const res = await service.get(url, { params, ...config })
  return res.data
}
