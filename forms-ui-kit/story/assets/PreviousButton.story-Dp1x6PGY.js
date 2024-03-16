import { az as defineComponent, aK as resolveComponent, aE as openBlock, aF as createBlock, aG as withCtx, aL as logEvent, aM as createVNode, aN as createBaseVNode } from "./vendor-CIlITjv8.js";
import { P as PreviousButton } from "./PreviousButton-BKtyRqy6.js";
import { L as LogMachine } from "./LogMachine-Cmf4ow5k.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./UiButton-t-tMt7Jm.js";
const block0 = (Comp) => {
  Comp.doc = '<h2 id="previousbutton-a-previous-step-form-component" tabindex="-1">PreviousButton: A previous step form component. <a class="header-anchor" href="#previousbutton-a-previous-step-form-component" aria-hidden="true">#</a></h2>\n<ul>\n<li>Used as previous step button in multi step forms.</li>\n<li>Based on <a href="/forms-ui-kit/story/story/src-components-ui-kit-uibutton-story-vue" data-route="true">UiButton</a> so can be used with its props (size, label, styleType).</li>\n</ul>\n<p>Must be used with <a href="/forms-ui-kit/story/story/src-components-form-formcomponent-story-vue" data-route="true">FormComponent</a>.</p>\n<h3 id="component-usage" tabindex="-1">Component usage <a class="header-anchor" href="#component-usage" aria-hidden="true">#</a></h3>\n<pre><code class="language-vue"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">vue</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">  &lt;</span><span style="color: #FFA198; font-style: italic">FormComponent</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">    &lt;</span><span style="color: #FFA198; font-style: italic">SubmitButton</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">label</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;Назад&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">size</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;l&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #79C0FF">style-type</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;primary&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">    /&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">  &lt;/</span><span style="color: #FFA198; font-style: italic">FormComponent</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"><span style="color: #C9D1D9">&lt;/</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>\n<span class="line"></span></code></pre></div></code></pre>\n';
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PreviousButton.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get logEvent() {
      return logEvent;
    }, PreviousButton, LogMachine };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "story-sandbox__container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Components/Form/PreviousButton",
    "auto-props-disabled": ""
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Playground" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["LogMachine"], {
              onMachineEvent: _cache[0] || (_cache[0] = ($event) => $setup.logEvent("Machine Event", $event))
            }, {
              default: withCtx(() => [
                createVNode($setup["PreviousButton"], { label: "Previous step" })
              ]),
              _: 1
              /* STABLE */
            })
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
_sfc_main.__file = "src/components/form/PreviousButton.story.vue";
const PreviousButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eaf1d7ff"], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/form/PreviousButton.story.vue"]]);
export {
  PreviousButton_story as default
};
