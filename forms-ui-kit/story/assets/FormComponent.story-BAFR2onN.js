import { az as defineComponent, aA as provide, aB as setup, aC as assign, aD as fromPromise, aE as openBlock, aF as createBlock, aG as withCtx, aH as renderSlot, aI as axios, aJ as reactive, aK as resolveComponent, aL as logEvent, aM as createVNode, aN as createBaseVNode, aO as toDisplayString, aP as createElementBlock, aQ as createCommentVNode } from "./vendor-BdWLuvDD.js";
import { P as PreloaderComponent } from "./PreloaderComponent-CmnBp85m.js";
import { e as emptyStorage, u as useSaveMachine, T as TextInput } from "./TextInput-C4P0ndJm.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { S as SubmitButton } from "./SubmitButton-BKNkIo2i.js";
import { P as PreviousButton } from "./PreviousButton-BI9kU5_B.js";
import "./UiInputContainer-DgXUscUZ.js";
import "./UiButton-DJIR-7u_.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormComponent",
  props: {
    name: { type: String, required: false, default: void 0 },
    numberOfSteps: { type: Number, required: false, default: 1 },
    url: { type: String, required: true },
    method: { type: String, required: false, default: "post" }
  },
  emits: ["done", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    provide("formName", props.name);
    const fetchForm = async (payload) => {
      const payloadObj = Object.fromEntries(payload.map((obj) => Object.entries(obj)).flat());
      const { data } = await axios({
        url: props.url,
        method: props.method,
        data: props.url !== "get" ? payloadObj : void 0,
        params: props.url === "get" ? payloadObj : void 0
      });
      return data;
    };
    const findStepByField = (payload, field) => {
      for (const [index, obj] of payload.entries()) {
        if (Object.prototype.hasOwnProperty.call(obj, field)) {
          return index + 1;
        }
      }
    };
    const formMachine = setup({
      actions: {
        validateAction: ({ context }) => {
          Object.values(context.inputs).forEach((actor) => {
            actor.send({ type: "VALIDATE" });
          });
        },
        resetAction: ({ context }) => {
          Object.values(context.inputs).forEach((actor) => {
            actor.send({ type: "RESET" });
          });
        },
        preparePayloadActionInc: assign({
          payload: ({ context }) => {
            if (context.step <= props.numberOfSteps) {
              const payloadObj = Object.fromEntries(Object.keys(context.inputs).map((name) => [name, void 0]));
              context.payload.push(payloadObj);
            }
            return context.payload;
          }
        }),
        preparePayloadActionDec: assign({
          payload: ({ context }) => {
            context.payload.pop();
            return context.payload;
          }
        }),
        collectPayloadAction: ({ context }) => {
          Object.values(context.inputs).forEach((actor) => {
            actor.send({ type: "COLLECT" });
          });
        },
        stepIncrement: assign({
          step: ({ context }) => Math.min(context.step + 1, props.numberOfSteps)
        }),
        stepDecrement: assign({
          step: ({ context }) => Math.max(context.step - 1, 1),
          errors: () => ({})
        })
      },
      actors: {
        fetchUser: fromPromise(
          ({ input }) => {
            const delay = new Promise((resolve, _reject) => {
              setTimeout(() => {
                resolve("delay");
              }, 100);
            });
            return delay.then(() => fetchForm(input.payload));
          }
        )
      }
    }).createMachine({
      id: props.name,
      context: {
        step: 1,
        inputs: {},
        errors: {},
        payload: []
      },
      initial: "idle",
      on: {
        REGISTER: {
          actions: assign({
            inputs: ({ context, event }) => {
              const { name, actor } = event.data;
              context.inputs[name] = actor;
              return context.inputs;
            }
          })
        },
        UNREGISTER: {
          actions: assign({
            inputs: ({ context, event }) => {
              delete context.inputs[event.data.name];
              return context.inputs;
            }
          })
        },
        ERROR: {
          target: ".error",
          actions: assign({
            errors: ({ context, event }) => {
              const { name, error } = event.data;
              context.errors[name] = error;
              return context.errors;
            }
          })
        },
        UNERROR: {
          actions: assign({
            errors: ({ context, event }) => {
              delete context.errors[event.data.name];
              return context.errors;
            }
          })
        },
        PREVIOUS: {
          actions: [
            "preparePayloadActionDec",
            "stepDecrement"
          ]
        },
        RESET: {
          target: ".idle",
          actions: [
            "resetAction",
            assign({
              step: () => 1,
              errors: () => ({}),
              payload: () => []
            }),
            () => {
              emptyStorage(props.name);
            }
          ]
        },
        VALUE: {
          actions: assign({
            payload: ({ context, event }) => {
              const { name, value } = event.data;
              const lastStepIndex = context.payload.length - 1;
              context.payload[lastStepIndex][name] = value;
              return context.payload;
            }
          })
        }
      },
      states: {
        idle: {
          on: {
            TRYSUBMIT: {
              actions: [
                "validateAction",
                ({ self }) => {
                  self.send({ type: "SUBMIT" });
                }
              ]
            },
            SUBMIT: {
              actions: [
                "preparePayloadActionInc",
                "collectPayloadAction"
              ],
              target: "loading"
            },
            TRYNEXT: {
              actions: [
                "validateAction",
                ({ self }) => {
                  self.send({ type: "NEXT" });
                }
              ]
            },
            NEXT: {
              actions: [
                "preparePayloadActionInc",
                "collectPayloadAction",
                "stepIncrement"
              ]
            }
          }
        },
        loading: {
          invoke: {
            src: "fetchUser",
            input: ({ context }) => ({ payload: context.payload }),
            onDone: {
              target: "idle",
              actions: ({ event, self }) => {
                self.send({ type: "RESET" });
                emit("done", event.output);
              }
            },
            onError: {
              target: "error",
              actions: [
                assign({
                  step: ({ event: { error }, context }) => {
                    emit("error", error);
                    const response = error.response;
                    if (response && response.data) {
                      const data = response.data;
                      let step;
                      for (const field in data.errors) {
                        step = findStepByField(context.payload, field);
                        if (step) {
                          break;
                        }
                      }
                      Object.entries(data.errors || []).forEach(([field, error2]) => {
                        setTimeout(() => {
                          const input = context.inputs[field];
                          if (input) {
                            input.send({ type: "ERROR", data: { error: error2 } });
                          }
                        }, 0);
                      });
                      return step || context.step;
                    }
                    return context.step;
                  }
                })
              ]
            }
          }
        },
        error: {
          always: {
            guard: ({ context }) => Object.keys(context.errors).length === 0,
            target: "idle"
          }
        }
      }
    });
    const { snapshot, send, actorRef: formActor } = useSaveMachine(formMachine, props.name, props.name);
    provide("formActor", formActor);
    const reset = () => {
      send({ type: "RESET" });
    };
    const __returned__ = { props, emit, fetchForm, findStepByField, formMachine, snapshot, send, formActor, reset, PreloaderComponent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["PreloaderComponent"], {
    "render-as": "form",
    loading: $setup.snapshot.value === "loading",
    name: $props.name
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {
        step: $setup.snapshot.context.step,
        numberOfSteps: $props.numberOfSteps,
        reset: $setup.reset
      })
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["loading", "name"]);
}
_sfc_main$1.__file = "src/components/form/FormComponent.vue";
const FormComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/form/FormComponent.vue"]]);
const block0 = (Comp) => {
  Comp.doc = `<h2 id="formcomponent-a-multi-step-form-component" tabindex="-1">FormComponent: A multi step form component. <a class="header-anchor" href="#formcomponent-a-multi-step-form-component" aria-hidden="true">#</a></h2>
<ul>
<li>Build with custom state machine.</li>
<li>Automatically send request to provided url/method.</li>
<li>Multiple steps via provided slotProps.</li>
<li>Retains state after reload page/rerender component.</li>
</ul>
<p>Must be used with form control components. For example: <a href="/forms-ui-kit/story/story/src-components-form-submitbutton-story-vue" data-route="true">SubmitButton</a></p>
<h3 id="component-api" tabindex="-1">Component API <a class="header-anchor" href="#component-api" aria-hidden="true">#</a></h3>
<h4 id="props" tabindex="-1">@Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>The name of the form. The value must not be the empty string, and must be unique. <code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>numberOfSteps</td>
<td>Number of steps for multi step mode. <code>number</code></td>
<td>1</td>
</tr>
<tr>
<td>url</td>
<td>Request url. <code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>method</td>
<td>Request method. <code>Method</code> ( axios type)</td>
<td>'post’</td>
</tr>
</tbody>
</table>
<h4 id="events" tabindex="-1">@Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Payload</th>
</tr>
</thead>
<tbody>
<tr>
<td>done</td>
<td>Emitted after successful request</td>
<td>Response body</td>
</tr>
<tr>
<td>error</td>
<td>Emitted after unsuccessful request</td>
<td>Response error</td>
</tr>
</tbody>
</table>
<h4 id="providers" tabindex="-1">@Providers <a class="header-anchor" href="#providers" aria-hidden="true">#</a></h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>formName</td>
<td>The name of the form. Provided for form components usage. <code>string</code></td>
</tr>
<tr>
<td>formActor</td>
<td>Form actor. Provided for form components usage. <code>Actor</code> ( xstate type )</td>
</tr>
</tbody>
</table>
<h3 id="component-usage" tabindex="-1">Component usage <a class="header-anchor" href="#component-usage" aria-hidden="true">#</a></h3>
<pre><code class="language-vue"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">vue</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">  &lt;</span><span style="color: #FFA198; font-style: italic">FormComponent</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">v-slot</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;{ step, numberOfSteps }&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">name</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;form-name&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">:number-of-steps</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;1&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">url</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;https://example.com/&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">method</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;post&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">@done</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;onDone&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">@error</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;onError&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">  &gt;</span></span>
<span class="line"><span style="color: #C9D1D9">    &lt;</span><span style="color: #7EE787">p</span><span style="color: #C9D1D9">&gt;{{ step }}/{{ numberOfSteps }}&lt;/</span><span style="color: #7EE787">p</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">    &lt;</span><span style="color: #FFA198; font-style: italic">TextInput</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">label</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;Поле 1&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">name</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;field1&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    /&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">    &lt;</span><span style="color: #FFA198; font-style: italic">SubmitButton</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">label</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;Отправить&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    /&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">  &lt;/</span><span style="color: #FFA198; font-style: italic">FormComponent</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">&lt;/</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"></span></code></pre></div></code></pre>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormComponent.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const storyStateSingle = reactive({
      name: "test-form-single",
      numberOfSteps: 1,
      url: "https://sergponomar-form-demo.builtwithdark.com/demo-form",
      method: "post"
    });
    const storyStateMulti = reactive({
      name: "test-form-multi",
      numberOfSteps: 2,
      url: "https://sergponomar-form-demo.builtwithdark.com/demo-form",
      method: "post"
    });
    const stateOptions = [
      {
        label: "Random response",
        value: "https://sergponomar-form-demo.builtwithdark.com/demo-form"
      },
      {
        label: "Success response",
        value: "https://sergponomar-form-demo.builtwithdark.com/demo-form-success"
      },
      {
        label: "Error response",
        value: "https://sergponomar-form-demo.builtwithdark.com/demo-form-error"
      }
    ];
    const __returned__ = { storyStateSingle, storyStateMulti, stateOptions, get logEvent() {
      return logEvent;
    }, FormComponent, TextInput, SubmitButton, PreviousButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "story-sandbox__container" };
const _hoisted_2 = { class: "story-sandbox__container" };
const _hoisted_3 = { class: "form-component-story__title" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "form-component-story__buttons" };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { class: "form-component-story__buttons" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstText = resolveComponent("HstText");
  const _component_HstNumber = resolveComponent("HstNumber");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Form/FormComponent",
    "auto-props-disabled": ""
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Single step form" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.storyStateSingle.name,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.storyStateSingle.name = $event),
            title: "Name"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.storyStateSingle.numberOfSteps,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.storyStateSingle.numberOfSteps = $event),
            title: "Number of steps"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.storyStateSingle.url,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.storyStateSingle.url = $event),
            title: "Url",
            options: $setup.stateOptions
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.storyStateSingle.method,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.storyStateSingle.method = $event),
            title: "Http method"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["FormComponent"], {
              class: "form-component-story",
              name: $setup.storyStateSingle.name,
              "number-of-steps": $setup.storyStateSingle.numberOfSteps,
              url: $setup.storyStateSingle.url,
              method: $setup.storyStateSingle.method,
              onDone: _cache[0] || (_cache[0] = ($event) => $setup.logEvent("done", $event)),
              onError: _cache[1] || (_cache[1] = ($event) => $setup.logEvent("error", $event))
            }, {
              default: withCtx(() => [
                createVNode($setup["TextInput"], {
                  label: "Поле 1",
                  name: "field1",
                  class: "form-component-story__input"
                }),
                createVNode($setup["SubmitButton"], {
                  label: "Отправить",
                  style: { "width": "100%" }
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["name", "number-of-steps", "url", "method"])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Multistep form" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.storyStateMulti.name,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.storyStateMulti.name = $event),
            title: "Name"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstNumber, {
            modelValue: $setup.storyStateMulti.numberOfSteps,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.storyStateMulti.numberOfSteps = $event),
            title: "Number of steps"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.storyStateMulti.url,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.storyStateMulti.url = $event),
            title: "Url",
            options: $setup.stateOptions
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.storyStateMulti.method,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.storyStateMulti.method = $event),
            title: "Http method"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["FormComponent"], {
              class: "form-component-story",
              name: $setup.storyStateMulti.name,
              "number-of-steps": $setup.storyStateMulti.numberOfSteps,
              url: $setup.storyStateMulti.url,
              method: $setup.storyStateMulti.method,
              onDone: _cache[6] || (_cache[6] = ($event) => $setup.logEvent("done", $event)),
              onError: _cache[7] || (_cache[7] = ($event) => $setup.logEvent("error", $event))
            }, {
              default: withCtx(({ step, numberOfSteps }) => [
                createBaseVNode(
                  "p",
                  _hoisted_3,
                  " Шаг " + toDisplayString(step) + "/" + toDisplayString(numberOfSteps),
                  1
                  /* TEXT */
                ),
                step === 1 ? (openBlock(), createElementBlock("div", _hoisted_4, [
                  createVNode($setup["TextInput"], {
                    label: "Поле 1",
                    name: "field1",
                    class: "form-component-story__input"
                  }),
                  createBaseVNode("div", _hoisted_5, [
                    createVNode($setup["SubmitButton"], {
                      label: "Далее",
                      next: ""
                    })
                  ])
                ])) : createCommentVNode("v-if", true),
                step === 2 ? (openBlock(), createElementBlock("div", _hoisted_6, [
                  createVNode($setup["TextInput"], {
                    label: "Поле 2",
                    name: "field2",
                    required: "",
                    class: "form-component-story__input"
                  }),
                  createBaseVNode("div", _hoisted_7, [
                    createVNode($setup["PreviousButton"], { label: "Назад" }),
                    createVNode($setup["SubmitButton"], {
                      label: "Отправить",
                      class: "demo-form__submit"
                    })
                  ])
                ])) : createCommentVNode("v-if", true)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["name", "number-of-steps", "url", "method"])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
if (typeof block0 === "function")
  block0(_sfc_main);
_sfc_main.__file = "src/components/form/FormComponent.story.vue";
const FormComponent_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bcace862"], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/form/FormComponent.story.vue"]]);
export {
  FormComponent_story as default
};
