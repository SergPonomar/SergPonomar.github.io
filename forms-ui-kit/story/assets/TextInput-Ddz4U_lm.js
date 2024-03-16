import { aW as useMachine, aY as onUpdated, az as defineComponent, aR as inject, aB as setup, aZ as sendTo, aC as assign, a_ as assertEvent, aT as useSelector, a$ as ref, b0 as useAttrs, aU as computed, b1 as onMounted, b2 as onUnmounted, b3 as fromCallback, aE as openBlock, aF as createBlock, aG as withCtx, b4 as withDirectives, aN as createBaseVNode, b5 as mergeProps, b6 as vModelText } from "./vendor-CIlITjv8.js";
import { U as UiInputContainer } from "./UiInputContainer-CpS-5xZv.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const useSaveMachine = (machine, machineId, rootObject) => {
  if (!machineId) {
    return useMachine(machine);
  }
  const restoredState = rootObject ? function() {
    const root = sessionStorage.getItem(rootObject);
    if (!root) {
      return void 0;
    }
    return JSON.parse(root)[machineId];
  }() : function() {
    const state = sessionStorage.getItem(machineId);
    if (!state) {
      return void 0;
    }
    return JSON.parse(state);
  }();
  const useMachineOut = useMachine(machine, {
    snapshot: restoredState
  });
  onUpdated(() => {
    const persistedState = useMachineOut.actorRef.getPersistedSnapshot();
    if (!rootObject) {
      sessionStorage.setItem(machineId, JSON.stringify(persistedState));
    } else {
      const root = sessionStorage.getItem(rootObject) || "{}";
      const rootParsed = JSON.parse(root);
      rootParsed[machineId] = persistedState;
      sessionStorage.setItem(rootObject, JSON.stringify(rootParsed));
    }
  });
  return { ...useMachineOut, restoredState };
};
const emptyStorage = (machineId, rootObject) => {
  if (!machineId) {
    return;
  }
  if (!rootObject) {
    sessionStorage.removeItem(machineId);
  } else {
    const root = sessionStorage.getItem(rootObject);
    if (!root) {
      return;
    }
    const rootParsed = JSON.parse(root);
    delete rootParsed[machineId];
    sessionStorage.setItem(rootObject, JSON.stringify(rootParsed));
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextInput",
  props: {
    name: { type: String, required: false, default: void 0 },
    formName: { type: String, required: false, default: "" },
    label: { type: String, required: false, default: "" },
    supportText: { type: String, required: false, default: "" },
    required: { type: Boolean, required: false, default: false },
    validationFunc: { type: Function, required: false, default: function(value) {
      return this.required && !value.length ? "Поле обязательно для заполнения" : "";
    } }
  },
  emits: ["register", "unregister"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const props = __props;
    const formName = props.formName || inject("formName", void 0) || "";
    const validationActor = fromCallback(({ sendBack, receive }) => {
      receive((event) => {
        assertEvent(event, "VALIDATE");
        const value = event.data.value;
        const error = props.validationFunc(value);
        sendBack(!error ? {
          type: "SUCCESS"
        } : {
          type: "ERROR",
          data: {
            error
          }
        });
      });
    });
    const inputId = `${formName}-${props.name}`;
    const formActor = inject("formActor");
    const inputMachine = setup({
      types: {},
      actions: {
        validateAction: sendTo("validationActor", ({ context }) => {
          return { type: "VALIDATE", data: { value: context.value } };
        })
      },
      actors: {
        validationActor
      }
    }).createMachine({
      id: inputId,
      initial: "idle",
      context: {
        value: "",
        error: ""
      },
      invoke: {
        id: "validationActor",
        src: "validationActor"
      },
      on: {
        VALIDATE: {
          actions: ["validateAction"]
        },
        DISABLE: ".disabled",
        ERROR: ".error",
        RESET: {
          target: ".idle",
          actions: [
            assign({
              value: () => "",
              error: () => ""
            }),
            () => {
              emptyStorage(props.name, formName);
            }
          ]
        },
        COLLECT: {
          actions: [
            ({ context }) => {
              if (!formActor) {
                return;
              }
              formActor.send({ type: "VALUE", data: { name: props.name, value: context.value } });
            }
          ]
        }
      },
      states: {
        idle: {
          on: {
            FOCUS: "editing"
          }
        },
        editing: {
          on: {
            INPUT: {
              actions: assign({
                value: ({ event }) => event.data.value
              })
            },
            BLUR: {
              actions: ["validateAction"]
            },
            SUCCESS: {
              target: "idle",
              actions: [
                assign({
                  error: () => ""
                }),
                () => {
                  if (!formActor) {
                    return;
                  }
                  formActor.send({ type: "UNERROR", data: { name: props.name } });
                }
              ]
            },
            ERROR: "error"
          }
        },
        error: {
          entry: [
            ({ event }) => {
              assertEvent(event, "ERROR");
              if (!formActor) {
                return;
              }
              formActor.send({ type: "ERROR", data: { name: props.name, error: event.data.error } });
            },
            assign({
              error: ({ event }) => {
                assertEvent(event, "ERROR");
                return event.data.error;
              }
            })
          ],
          on: {
            FOCUS: "editing"
          }
        },
        disabled: {
          on: {
            ACTIVATE: "idle"
          }
        }
      }
    });
    const { snapshot, send, actorRef } = useSaveMachine(inputMachine, props.name, formName);
    const inputValue = useSelector(actorRef, (snapshot2) => snapshot2.context.value);
    const textInput = ref();
    emit("register", { type: "REGISTER", data: { name: props.name, actor: actorRef } });
    if (formActor) {
      formActor.send({ type: "REGISTER", data: { name: props.name, actor: actorRef } });
    }
    const errorText = useSelector(actorRef, (snapshot2) => snapshot2.context.error);
    const attrs = useAttrs();
    const attrsNoStyles = computed(() => {
      const { class: _c, style: _s, ...rest } = attrs;
      return rest;
    });
    onMounted(() => {
      if (textInput.value !== document.activeElement && snapshot.value.value === "editing") {
        textInput.value.focus();
      }
    });
    onUnmounted(() => {
      emit("unregister", { type: "UNREGISTER", data: { name: props.name } });
      if (formActor) {
        formActor.send({ type: "UNREGISTER", data: { name: props.name } });
      }
    });
    const __returned__ = { emit, props, formName, validationActor, inputId, formActor, inputMachine, snapshot, send, actorRef, inputValue, textInput, errorText, attrs, attrsNoStyles, UiInputContainer };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["name", "disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiInputContainer"], {
    "input-id": $setup.inputId,
    state: $setup.snapshot.value,
    required: $props.required,
    label: $props.label,
    "support-text": $props.supportText,
    "error-text": $setup.errorText
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode("input", mergeProps({
        id: $setup.inputId,
        ref: "textInput",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.inputValue = $event),
        type: "text",
        name: $props.name,
        disabled: $setup.snapshot.value === "disabled"
      }, $setup.attrsNoStyles, {
        class: "text-input__input",
        onInput: _cache[1] || (_cache[1] = (e) => $setup.send({ type: "INPUT", data: { value: e.target.value } })),
        onBlur: _cache[2] || (_cache[2] = (e) => $setup.send({ type: "BLUR", data: { value: e.target.value } })),
        onFocus: _cache[3] || (_cache[3] = (e) => $setup.send({ type: "FOCUS", data: { value: e.target.value } }))
      }), null, 16, _hoisted_1), [
        [vModelText, $setup.inputValue]
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["state", "required", "label", "support-text", "error-text"]);
}
_sfc_main.__file = "src/components/form/TextInput.vue";
const TextInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/form/TextInput.vue"]]);
export {
  TextInput as T,
  emptyStorage as e,
  useSaveMachine as u
};
