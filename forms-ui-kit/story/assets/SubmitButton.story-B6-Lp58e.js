import { az as defineComponent, aJ as reactive, aK as resolveComponent, aE as openBlock, aF as createBlock, aG as withCtx, aL as logEvent, aM as createVNode, aN as createBaseVNode } from "./vendor-BdWLuvDD.js";
import { S as SubmitButton } from "./SubmitButton-BKNkIo2i.js";
import { L as LogMachine } from "./LogMachine-CQr84Ti8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./UiButton-DJIR-7u_.js";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="submitbutton-a-next-step-submit-form-component" tabindex="-1">SubmitButton: A next step / submit form component. <a class="header-anchor" href="#submitbutton-a-next-step-submit-form-component" aria-hidden="true">#</a></h2>
<ul>
<li>Used for send form request.</li>
<li>Can be used as next step button in multi step forms.</li>
<li>Disabled if form in 'error' state.</li>
<li>Based on <a href="/forms-ui-kit/story/story/src-components-ui-kit-uibutton-story-vue" data-route="true">UiButton</a> so can be used with its props (size, label, styleType).</li>
</ul>
<p>Must be used with <a href="/forms-ui-kit/story/story/src-components-form-formcomponent-story-vue" data-route="true">FormComponent</a>.</p>
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
<td>next</td>
<td>Use this flag for use as next step button. <code>boolean</code></td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="component-usage" tabindex="-1">Component usage <a class="header-anchor" href="#component-usage" aria-hidden="true">#</a></h3>
<pre><code class="language-vue"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">vue</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">  &lt;</span><span style="color: #FFA198; font-style: italic">FormComponent</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">    &lt;</span><span style="color: #FFA198; font-style: italic">SubmitButton</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">label</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;Отправить&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">:next</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&#39;false&#39;</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">size</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;l&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">style-type</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;primary&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    /&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">  &lt;/</span><span style="color: #FFA198; font-style: italic">FormComponent</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">&lt;/</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"></span></code></pre></div></code></pre>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SubmitButton.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const storyState = reactive({
      next: false,
      state: "idle"
    });
    const logMachineStateOptions = [
      {
        label: "Idle",
        value: "idle"
      },
      {
        label: "Error",
        value: "error"
      }
    ];
    const __returned__ = { storyState, logMachineStateOptions, get logEvent() {
      return logEvent;
    }, SubmitButton, LogMachine };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "story-sandbox__container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Form/SubmitButton",
    "auto-props-disabled": ""
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Playground" }, {
        controls: withCtx(() => [
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.storyState.next,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.storyState.next = $event),
            title: "Next step button"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.storyState.state,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.storyState.state = $event),
            title: "FormActor state",
            options: $setup.logMachineStateOptions
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["LogMachine"], {
              state: $setup.storyState.state,
              onMachineEvent: _cache[0] || (_cache[0] = ($event) => $setup.logEvent("Machine Event", $event))
            }, {
              default: withCtx(() => [
                createVNode($setup["SubmitButton"], {
                  next: $setup.storyState.next,
                  label: "Submit"
                }, null, 8, ["next"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["state"])
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
_sfc_main.__file = "src/components/form/SubmitButton.story.vue";
const SubmitButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0f8b9262"], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/form/SubmitButton.story.vue"]]);
export {
  SubmitButton_story as default
};
