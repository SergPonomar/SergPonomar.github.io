import { az as defineComponent, aU as computed, aE as openBlock, aP as createElementBlock, aN as createBaseVNode, aO as toDisplayString, aQ as createCommentVNode, aH as renderSlot, bd as normalizeClass } from "./vendor-CIlITjv8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiInputContainer",
  props: {
    inputId: { type: String, required: false, default: void 0 },
    state: { type: String, required: false, default: void 0 },
    required: { type: Boolean, required: false, default: false },
    label: { type: String, required: false, default: "" },
    supportText: { type: String, required: false, default: "" },
    errorText: { type: String, required: false, default: "" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const stateClasses = computed(() => {
      switch (props.state) {
        case "editing":
        case "error":
        case "disabled":
          return `ui-input-container__slot_${props.state}`;
        default:
          return "";
      }
    });
    const __returned__ = { props, stateClasses };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "ui-input-container" };
const _hoisted_2 = ["for"];
const _hoisted_3 = {
  key: 0,
  class: "ui-input-container__required"
};
const _hoisted_4 = {
  key: 1,
  class: "ui-input-container__support-text"
};
const _hoisted_5 = {
  key: 2,
  class: "ui-input-container__error-text"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    $props.label ? (openBlock(), createElementBlock("label", {
      key: 0,
      for: $props.inputId,
      class: "ui-input-container__label"
    }, [
      createBaseVNode(
        "span",
        null,
        toDisplayString($props.label),
        1
        /* TEXT */
      ),
      $props.required ? (openBlock(), createElementBlock("span", _hoisted_3, " * ")) : createCommentVNode("v-if", true)
    ], 8, _hoisted_2)) : createCommentVNode("v-if", true),
    $props.supportText ? (openBlock(), createElementBlock(
      "p",
      _hoisted_4,
      toDisplayString($props.supportText),
      1
      /* TEXT */
    )) : createCommentVNode("v-if", true),
    createBaseVNode(
      "div",
      {
        class: normalizeClass(["ui-input-container__slot", $setup.stateClasses])
      },
      [
        renderSlot(_ctx.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    $props.errorText ? (openBlock(), createElementBlock(
      "p",
      _hoisted_5,
      toDisplayString($props.errorText),
      1
      /* TEXT */
    )) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main.__file = "src/components/ui-kit/UiInputContainer.vue";
const UiInputContainer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/ui-kit/UiInputContainer.vue"]]);
export {
  UiInputContainer as U
};
