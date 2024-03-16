import { az as defineComponent, aE as openBlock, aF as createBlock, aG as withCtx, aH as renderSlot, aP as createElementBlock, aQ as createCommentVNode, b9 as resolveDynamicComponent, aN as createBaseVNode } from "./vendor-CIlITjv8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/forms-ui-kit/story/images/spinner.svg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PreloaderComponent",
  props: {
    renderAs: { type: null, required: false, default: "div" },
    loading: { type: Boolean, required: true, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "ui-preloader-component__overlay"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "img",
  {
    class: "ui-preloader-component__spinner",
    src: _imports_0
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.renderAs), { class: "ui-preloader-component" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default"),
      $props.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [..._hoisted_3])) : createCommentVNode("v-if", true)
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main.__file = "src/components/ui-kit/PreloaderComponent.vue";
const PreloaderComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/ui-kit/PreloaderComponent.vue"]]);
export {
  PreloaderComponent as P
};
