import { get } from './index'

export const reportPV = (params?: object) => get('/report/pv', params)
