# 飞机大战

# 自定义渲染器 —— custom renderer
vue 默认的渲染器是将试图渲染到浏览器平台，但是当前实现游戏需要将视图渲染到 canvas 当中，因此必须通过 custom renderer 实现自定义渲染。
- 集成 pixijs
- 实现 renderer 渲染接口

# 实现游戏核心逻辑
- 我方飞机
- 我方飞机发射子弹
- 敌方飞机
- 子弹和敌方飞机碰撞