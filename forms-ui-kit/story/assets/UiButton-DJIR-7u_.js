import { az as defineComponent, aU as computed, aE as openBlock, aP as createElementBlock, aO as toDisplayString, bd as normalizeClass } from "./vendor-BdWLuvDD.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiButton",
  props: {
    size: { type: String, required: false, default: "l" },
    label: { type: String, required: false, default: "" },
    state: { type: String, required: false, default: void 0 },
    styleType: { type: String, required: false, default: void 0 }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const sizeClasses = computed(() => {
      switch (props.size) {
        case "m":
        case "s":
        case "xs":
          return `ui-button_size-${props.size}`;
        default:
          return "";
      }
    });
    const styleClasses = computed(() => {
      switch (props.styleType) {
        case "secondary":
        case "tertiary":
          return `ui-button_${props.styleType}`;
        default:
          return "";
      }
    });
    const __returned__ = { props, sizeClasses, styleClasses };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["ui-button", [$setup.sizeClasses, $setup.styleClasses]]),
    disabled: $props.state === "disabled",
    focus: ""
  }, toDisplayString($props.label), 11, _hoisted_1);
}
_sfc_main.__file = "src/components/ui-kit/UiButton.vue";
const UiButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/ui-kit/UiButton.vue"]]);
export {
  UiButton as U
};
