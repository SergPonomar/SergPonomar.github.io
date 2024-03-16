import { az as defineComponent, aJ as reactive, aK as resolveComponent, aE as openBlock, aF as createBlock, aG as withCtx, aM as createVNode, aN as createBaseVNode, b7 as pushScopeId, b8 as popScopeId } from "./vendor-BdWLuvDD.js";
import { U as UiInputContainer } from "./UiInputContainer-DgXUscUZ.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="uiinputcontainer-an-ui-kit-input-container-component" tabindex="-1">UiInputContainer: An ui kit input container component. <a class="header-anchor" href="#uiinputcontainer-an-ui-kit-input-container-component" aria-hidden="true">#</a></h2>
<ul>
<li>Style changing according to component state.</li>
<li>Properties added for change appropriate text placeholders.</li>
<li>Сomponent is made based on the <a href="https://www.figma.com/community/file/1255349027535859598" target="_blank">Design System 1.4.1</a>.</li>
</ul>
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
<td>inputId</td>
<td>Can be used for connect label with input in slot. <code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>state</td>
<td>State of component. Style changing according to this property.<code>'idle' | 'editing' | 'error' | 'disabled'</code></td>
<td>'idle’</td>
</tr>
<tr>
<td>required</td>
<td>Add red sign to label.  <code>boolean</code></td>
<td>false</td>
</tr>
<tr>
<td>label</td>
<td>Label text. <code>string</code></td>
<td>'’</td>
</tr>
<tr>
<td>supportText</td>
<td>Support text. <code>string</code></td>
<td>'’</td>
</tr>
<tr>
<td>errorText</td>
<td>Error text. <code>string</code></td>
<td>'’</td>
</tr>
</tbody>
</table>
<h3 id="component-usage" tabindex="-1">Component usage <a class="header-anchor" href="#component-usage" aria-hidden="true">#</a></h3>
<pre><code class="language-vue"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">vue</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">  &lt;</span><span style="color: #FFA198; font-style: italic">UiInputContainer</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">input-id</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;input-id&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">required</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;true&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">state</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;idle&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">label</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;Label&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">support-text</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;Support text&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">error-text</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;Error text&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">  &gt;</span></span>
<span class="line"><span style="color: #C9D1D9">    &lt;</span><span style="color: #7EE787">span</span><span style="color: #C9D1D9">&gt;Input slot&lt;/</span><span style="color: #7EE787">span</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">  &lt;/</span><span style="color: #FFA198; font-style: italic">UiInputContainer</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">&lt;/</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"></span></code></pre></div></code></pre>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiInputContainer.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const stateOptions = [
      {
        label: "Default (idle)",
        value: void 0
      },
      {
        label: "Idle",
        value: "idle"
      },
      {
        label: "Editing",
        value: "editing"
      },
      {
        label: "Error",
        value: "error"
      },
      {
        label: "Disabled",
        value: "disabled"
      }
    ];
    const storyState = reactive({
      inputId: "formId-inputName",
      state: void 0,
      required: false,
      label: "Label",
      supportText: "Support text",
      errorText: "Error text"
    });
    const __returned__ = { stateOptions, storyState, UiInputContainer };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-568f1ba5"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "story-sandbox__container" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Input slot",
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstText = resolveComponent("HstText");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Ui kit/UiInputContainer",
    "auto-props-disabled": ""
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Playground" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.storyState.inputId,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.storyState.inputId = $event),
            title: "Input id"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.storyState.state,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.storyState.state = $event),
            title: "State",
            options: $setup.stateOptions
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.storyState.required,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.storyState.required = $event),
            title: "Required"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.storyState.label,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.storyState.label = $event),
            title: "Label"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.storyState.supportText,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.storyState.supportText = $event),
            title: "Support text"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.storyState.errorText,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.storyState.errorText = $event),
            title: "Error text"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["UiInputContainer"], {
              "input-id": $setup.storyState.inputId,
              required: $setup.storyState.required,
              state: $setup.storyState.state,
              label: $setup.storyState.label,
              "support-text": $setup.storyState.supportText,
              "error-text": $setup.storyState.errorText
            }, {
              default: withCtx(() => [
                _hoisted_2
              ]),
              _: 1
              /* STABLE */
            }, 8, ["input-id", "required", "state", "label", "support-text", "error-text"])
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
_sfc_main.__file = "src/components/ui-kit/UiInputContainer.story.vue";
const UiInputContainer_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-568f1ba5"], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/ui-kit/UiInputContainer.story.vue"]]);
export {
  UiInputContainer_story as default
};
