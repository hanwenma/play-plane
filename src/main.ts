import createApp from "./runtime-canvas";
import container from "./palne-container"
import App from './App.vue'

// 通过自定义渲染器挂载视图
createApp(App).mount(container.stage);