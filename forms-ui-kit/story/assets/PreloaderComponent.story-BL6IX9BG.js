import { az as defineComponent, aJ as reactive, aK as resolveComponent, aE as openBlock, aF as createBlock, aG as withCtx, aM as createVNode, aN as createBaseVNode, b7 as pushScopeId, b8 as popScopeId } from "./vendor-CIlITjv8.js";
import { P as PreloaderComponent } from "./PreloaderComponent-B-izKuBw.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="preloadercomponent-an-ui-kit-preloader-component" tabindex="-1">PreloaderComponent: An ui kit preloader component. <a class="header-anchor" href="#preloadercomponent-an-ui-kit-preloader-component" aria-hidden="true">#</a></h2>
<ul>
<li>Can be used as wrapper for other component. Root can be rendered as provided component.</li>
<li>Display spinner and block interaction by overlay (on loading state).</li>
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
<td>renderAs</td>
<td>Render root element as provided component. <code>string | Component</code></td>
<td>'div'</td>
</tr>
<tr>
<td>loading</td>
<td>Activate loading state of component. <code>boolean</code></td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="component-usage" tabindex="-1">Component usage <a class="header-anchor" href="#component-usage" aria-hidden="true">#</a></h3>
<pre><code class="language-vue"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">vue</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">  &lt;</span><span style="color: #FFA198; font-style: italic">PreloaderComponent</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">render-as</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;div&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">:loading</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;true&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">  &gt;</span></span>
<span class="line"><span style="color: #C9D1D9">    &lt;</span><span style="color: #7EE787">span</span><span style="color: #C9D1D9">&gt;Input slot&lt;/</span><span style="color: #7EE787">span</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">  &lt;/</span><span style="color: #FFA198; font-style: italic">PreloaderComponent</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">&lt;/</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"></span></code></pre></div></code></pre>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PreloaderComponent.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const storyState = reactive({
      renderAs: "div",
      loading: true
    });
    const __returned__ = { storyState, PreloaderComponent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-82c30ac3"), n = n(), popScopeId(), n);
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
  const _component_HstCheckbox = resolveComponent("HstCheckbox");
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Ui kit/PreloaderComponent",
    "auto-props-disabled": ""
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Playground" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.storyState.renderAs,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.storyState.renderAs = $event),
            title: "Render root as"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstCheckbox, {
            modelValue: $setup.storyState.loading,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.storyState.loading = $event),
            title: "Loading"
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["PreloaderComponent"], {
              "render-as": $setup.storyState.renderAs,
              loading: $setup.storyState.loading
            }, {
              default: withCtx(() => [
                _hoisted_2
              ]),
              _: 1
              /* STABLE */
            }, 8, ["render-as", "loading"])
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
_sfc_main.__file = "src/components/ui-kit/PreloaderComponent.story.vue";
const PreloaderComponent_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-82c30ac3"], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/ui-kit/PreloaderComponent.story.vue"]]);
export {
  PreloaderComponent_story as default
};
