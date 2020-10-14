import axios, { AxiosRequestConfig, ResData } from 'axios'
import qs from 'qs'

export interface Request {
  <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<ResData<T>>;
}

const service = axios.create({
  timeout: 5000
})

export const get: Request = async (url, params, config) => {
  const res = await service.get(url, { params, ...config })
  return res.data
}

export const post: Request = async (url, params) => {
  const res = await service.post(url, qs.stringify(params))
  return res.data
}
