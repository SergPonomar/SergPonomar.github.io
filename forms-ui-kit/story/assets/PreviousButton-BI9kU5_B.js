import { az as defineComponent, aR as inject, aE as openBlock, aF as createBlock, aS as withModifiers } from "./vendor-BdWLuvDD.js";
import { U as UiButton } from "./UiButton-DJIR-7u_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PreviousButton",
  setup(__props, { expose: __expose }) {
    __expose();
    const formActor = inject("formActor");
    const onSubmit = (_e) => {
      if (!formActor) {
        return;
      }
      formActor.send({ type: "PREVIOUS" });
    };
    const __returned__ = { formActor, onSubmit, UiButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiButton"], {
    "style-type": "secondary",
    onClick: withModifiers($setup.onSubmit, ["prevent"])
  });
}
_sfc_main.__file = "src/components/form/PreviousButton.vue";
const PreviousButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/form/PreviousButton.vue"]]);
export {
  PreviousButton as P
};
