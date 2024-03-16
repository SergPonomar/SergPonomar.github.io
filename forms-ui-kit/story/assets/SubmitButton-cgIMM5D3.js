import { az as defineComponent, aR as inject, aT as useSelector, aU as computed, aE as openBlock, aF as createBlock, aS as withModifiers } from "./vendor-CIlITjv8.js";
import { U as UiButton } from "./UiButton-t-tMt7Jm.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SubmitButton",
  props: {
    next: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const formActor = inject("formActor");
    const formState = formActor ? useSelector(formActor, (snapshot) => snapshot.value) : void 0;
    const isValid = computed(() => formState && formState.value !== "error");
    const onSubmit = (_e) => {
      if (!formActor) {
        return;
      }
      if (props.next) {
        formActor.send({ type: "TRYNEXT" });
      } else {
        formActor.send({ type: "TRYSUBMIT" });
      }
    };
    const __returned__ = { props, formActor, formState, isValid, onSubmit, UiButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiButton"], {
    state: !$setup.isValid ? "disabled" : void 0,
    onClick: withModifiers($setup.onSubmit, ["prevent"])
  }, null, 8, ["state"]);
}
_sfc_main.__file = "src/components/form/SubmitButton.vue";
const SubmitButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/form/SubmitButton.vue"]]);
export {
  SubmitButton as S
};
