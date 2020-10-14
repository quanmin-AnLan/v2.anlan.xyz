import { get, post } from './index'

export const getTest = (params?: object) => get('http://localhost:8088/switch', params)

export const postTest = (params?: object) => post('/channelApi/rec/classify_channel/v2/channel', params)
