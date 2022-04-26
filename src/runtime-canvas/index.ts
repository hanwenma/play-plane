
import { Container, Sprite, Texture, Text } from "pixi.js";
import { createRenderer } from "vue";

//  自定义 renderer
const renderer = createRenderer({
  patchProp(el, key, preValue, nextValue) {
    switch (key) {
      case 'texture':
        (el as Sprite).texture = Texture.from(nextValue);
        break;

      default:
        // 处理 x 和 y
        el[key] = nextValue
        break;
    }
  },
  insert(el, parent) {
    if (el && parent) {
      console.log(parent);

      parent.addChild(el);
    }
  },
  remove(el) {
    const parent = el.parent;
    if (el && parent) {
      parent.removeChild(el);
    }
  },
  createElement(type) {
    switch (type) {
      case 'Container':
        return new Container();

      case 'Sprite':
        return new Sprite();

      default:
        throw TypeError(`not exit type such as ${type}`);
    }

  },
  createText(text) {
    return new Text(text);
  },
  createComment(comment) {
    return new Text(comment);
  },
  setText() { },
  setElementText() { },
  parentNode(node) {
    return node.parent;
  },
  nextSibling() {
    return null;
  }
});

export default function createApp(RooComponet: any) {
  return renderer.createApp(RooComponet)
}