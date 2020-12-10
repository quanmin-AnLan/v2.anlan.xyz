import '../element-variables.scss'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import { App } from 'vue'

export default (app: App<Element>) => {
  app.use(ElementPlus, { locale })
}
