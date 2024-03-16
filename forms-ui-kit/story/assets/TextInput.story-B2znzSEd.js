import { az as defineComponent, aJ as reactive, aK as resolveComponent, aE as openBlock, aF as createBlock, aG as withCtx, aL as logEvent, aM as createVNode, aN as createBaseVNode } from "./vendor-BdWLuvDD.js";
import { T as TextInput } from "./TextInput-C4P0ndJm.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./UiInputContainer-DgXUscUZ.js";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="textinput-a-text-input-form-component" tabindex="-1">TextInput: A text input form component. <a class="header-anchor" href="#textinput-a-text-input-form-component" aria-hidden="true">#</a></h2>
<ul>
<li>Build with custom state machine.</li>
<li>Based on <a href="/forms-ui-kit/story/story/src-components-ui-kit-uiinputcontainer-story-vue" data-route="true">UiInputContainer</a>.</li>
<li>Can be used with provided validation function or used with default 'not empty' function.</li>
<li>Emit registration events with internal state machine ref.</li>
<li>Retains state after reload page/rerender component.</li>
</ul>
<p>Can be used with <a href="/forms-ui-kit/story/story/src-components-form-formcomponent-story-vue" data-route="true">FormComponent</a> or other machine based components.</p>
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
<td>Input's name, will be form field in request body. <code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>formName</td>
<td>Form name, can be used for overwrite value provided by FormComponent. <code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>Input’s label. <code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>supportText</td>
<td>Annotation text under input. <code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>required</td>
<td>Flag used for default validation function and also for styling input label. <code>boolean</code></td>
<td>false</td>
</tr>
<tr>
<td>validationFunc</td>
<td>Custom function for validate input’s value. <code>(value: any) =&gt; string</code></td>
<td>see below</td>
</tr>
</tbody>
</table>
<pre><code class="language-ts"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">ts</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">function</span><span style="color: #C9D1D9"> (</span><span style="color: #FFA657">value</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span><span style="color: #C9D1D9">)</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">string</span><span style="color: #C9D1D9"> {</span></span>
<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FF7B72">return</span><span style="color: #C9D1D9"> props.required </span><span style="color: #FF7B72">&amp;&amp;</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">!</span><span style="color: #C9D1D9">value.</span><span style="color: #79C0FF">length</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #FF7B72">?</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;Поле обязательно для заполнения&#39;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;&#39;</span></span>
<span class="line"><span style="color: #C9D1D9">}</span></span>
<span class="line"></span></code></pre></div></code></pre>
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
<td>register</td>
<td>Emitted on component creation.</td>
<td><code>{ type: 'REGISTER', data: { name: string, actor: Actor } }</code></td>
</tr>
<tr>
<td>unregister</td>
<td>Emitted on component destroy.</td>
<td><code>{ type: 'UNREGISTER', data: { name: string } }</code></td>
</tr>
</tbody>
</table>
<h3 id="component-usage" tabindex="-1">Component usage <a class="header-anchor" href="#component-usage" aria-hidden="true">#</a></h3>
<pre><code class="language-vue"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">vue</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">  &lt;</span><span style="color: #FFA198; font-style: italic">FormComponent</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">    &lt;</span><span style="color: #FFA198; font-style: italic">TextInput</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">label</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;Поле 1&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">name</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;field1&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">form-name</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;form-name&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">support-text</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;support text&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">:required</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;false&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">:validationFunc</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;(value) =&gt; value === &#39;22&#39; ? &#39;Ошибка 22&#39;: &#39;&#39;&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">@register</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;onRegister&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">@unregister</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;onUnregister&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    /&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">  &lt;/</span><span style="color: #FFA198; font-style: italic">FormComponent</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">&lt;/</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"></span></code></pre></div></code></pre>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextInput.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const storyState = reactive({
      name: "field-name",
      formName: "test-id",
      label: "Label",
      supportText: 'Enter "text"',
      required: false,
      validationFunc: function(val) {
        return val !== "text" ? 'Error: this not a "text"' : "";
      }
    });
    const __returned__ = { storyState, get logEvent() {
      return logEvent;
    }, TextInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "story-sandbox__container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstText = resolveComponent("HstText");
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Form/TextInput",
    "auto-props-disabled": ""
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Playground" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.storyState.name,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.storyState.name = $event),
            title: "Field name"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.storyState.formName,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.storyState.formName = $event),
            title: "Form id"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.storyState.label,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.storyState.label = $event),
            title: "Label"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstText, {
            modelValue: $setup.storyState.supportText,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.storyState.supportText = $event),
            title: "Support text"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.storyState.required,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.storyState.required = $event),
            title: "Required"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["TextInput"], {
              name: $setup.storyState.name,
              "form-id": $setup.storyState.formName,
              label: $setup.storyState.label,
              "support-text": $setup.storyState.supportText,
              required: $setup.storyState.required,
              "validation-func": $setup.storyState.validationFunc,
              onFocus: _cache[0] || (_cache[0] = ($event) => $setup.logEvent("focus", $event)),
              onRegister: _cache[1] || (_cache[1] = ($event) => $setup.logEvent("register", $event))
            }, null, 8, ["name", "form-id", "label", "support-text", "required", "validation-func"])
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
_sfc_main.__file = "src/components/form/TextInput.story.vue";
const TextInput_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-96038a69"], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/form/TextInput.story.vue"]]);
export {
  TextInput_story as default
};
