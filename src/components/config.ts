import { App } from 'vue'
const ctx = require.context('../components', true, /\.vue$/)

export default (app: App<Element>) => {
  ctx.keys().forEach(row => {
    if (/.*Al.*/.test(row) && !(/components/.test(row))) {
      const component = ctx(row).default
      app.component(
        component.name,
        component
      )
    }
  })
}
