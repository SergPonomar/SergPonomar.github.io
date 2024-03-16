import { az as defineComponent, aV as createMachine, aW as useMachine, aX as watch, aA as provide, aH as renderSlot } from "./vendor-BdWLuvDD.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LogMachine",
  props: {
    state: { type: String, required: false, default: "idle" }
  },
  emits: ["machineEvent"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const props = __props;
    const testMachine = createMachine({
      id: "test",
      initial: props.state,
      states: {
        idle: {
          on: {
            error: "error"
          }
        },
        error: {
          on: {
            idle: "idle"
          }
        }
      }
    });
    const { actorRef, send } = useMachine(testMachine, {
      inspect: (inspectionEvent) => {
        if (inspectionEvent.type === "@xstate.event" && inspectionEvent.event.type !== "xstate.init") {
          emit("machineEvent", inspectionEvent.event);
        }
      }
    });
    watch(() => props.state, (state) => {
      send({ type: state });
    });
    provide("formActor", actorRef);
    const __returned__ = { emit, props, testMachine, actorRef, send };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
_sfc_main.__file = "src/story/LogMachine.vue";
const LogMachine = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/story/LogMachine.vue"]]);
export {
  LogMachine as L
};
