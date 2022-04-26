import { Application } from "pixi.js";

// 初始化 pixi.js
const container = new Application({ width: 1200, height: 570 });
document.body.appendChild(container.view);

export default container;