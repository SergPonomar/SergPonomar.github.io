import { az as defineComponent, aJ as reactive, aK as resolveComponent, aE as openBlock, aF as createBlock, aG as withCtx, aM as createVNode, aN as createBaseVNode, aP as createElementBlock, ba as renderList, bb as Fragment, bc as normalizeStyle } from "./vendor-CIlITjv8.js";
import { U as UiButton } from "./UiButton-t-tMt7Jm.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const block0 = (Comp) => {
  Comp.doc = `<h2 id="uibutton-an-ui-kit-button-component" tabindex="-1">UiButton: An ui kit button component. <a class="header-anchor" href="#uibutton-an-ui-kit-button-component" aria-hidden="true">#</a></h2>
<ul>
<li>Can be sized by 'size' property.</li>
<li>Can be styled by 'styleType' property.</li>
<li>Can be disabled by 'state' property.</li>
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
<td>size</td>
<td>Size of button according to design system. <code> 'l' | 'm' | 's' | 'xs'</code></td>
<td>'l’</td>
</tr>
<tr>
<td>label</td>
<td>Button text. <code>string</code></td>
<td>-</td>
</tr>
<tr>
<td>state</td>
<td>Can be used for disable component. <code>disabled</code></td>
<td>-</td>
</tr>
<tr>
<td>styleType</td>
<td>Style type according to design system. <code>'primary' | 'secondary' | 'tertiary'</code></td>
<td>'primary'</td>
</tr>
</tbody>
</table>
<h3 id="component-usage" tabindex="-1">Component usage <a class="header-anchor" href="#component-usage" aria-hidden="true">#</a></h3>
<pre><code class="language-vue"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">vue</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #C9D1D9">&lt;</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">  &lt;</span><span style="color: #FFA198; font-style: italic">UiButton</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">label</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;Купить&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">size</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;l&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">style-type</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;primary&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">    </span><span style="color: #79C0FF">state</span><span style="color: #C9D1D9">=</span><span style="color: #A5D6FF">&quot;disabled&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">  /&gt;</span></span>
<span class="line"><span style="color: #C9D1D9">&lt;/</span><span style="color: #7EE787">template</span><span style="color: #C9D1D9">&gt;</span></span>
<span class="line"></span></code></pre></div></code></pre>
`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiButton.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const sizeOptions = [
      {
        label: "Default (l)",
        value: void 0
      },
      {
        label: "Large (l)",
        value: "l"
      },
      {
        label: "Medium (m)",
        value: "m"
      },
      {
        label: "Small (s)",
        value: "s"
      },
      {
        label: "X-Small (xs)",
        value: "xs"
      }
    ];
    const stateOptions = [
      {
        label: "Default",
        value: void 0
      },
      {
        label: "Disabled",
        value: "disabled"
      }
    ];
    const styleOptions = [
      {
        label: "Default (primary)",
        value: void 0
      },
      {
        label: "Primary",
        value: "primary"
      },
      {
        label: "Secondary",
        value: "secondary"
      },
      {
        label: "Tertiary",
        value: "tertiary"
      }
    ];
    const storyState = reactive({
      label: "Label",
      size: "l",
      state: void 0,
      styleType: void 0
    });
    const __returned__ = { sizeOptions, stateOptions, styleOptions, storyState, UiButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "story-sandbox" };
const _hoisted_2 = { class: "story-sandbox__container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_HstText = resolveComponent("HstText");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Ui kit/UiButton",
    "auto-props-disabled": ""
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Sizes & styles" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.styleOptions.slice(1), (style) => {
                return openBlock(), createElementBlock(
                  "div",
                  {
                    key: style.value,
                    style: normalizeStyle(`--content: '${style.label}';`),
                    class: "story-sandbox__container"
                  },
                  [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList($setup.sizeOptions.slice(1), (size) => {
                        return openBlock(), createBlock($setup["UiButton"], {
                          key: size.value,
                          label: "Label",
                          size: size.value,
                          "style-type": style.value
                        }, null, 8, ["size", "style-type"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  4
                  /* STYLE */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Playground" }, {
        controls: withCtx(() => [
          createVNode(_component_HstText, {
            modelValue: $setup.storyState.label,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.storyState.label = $event),
            title: "Label"
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.storyState.size,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.storyState.size = $event),
            title: "Size",
            options: $setup.sizeOptions
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.storyState.state,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.storyState.state = $event),
            title: "State",
            options: $setup.stateOptions
          }, null, 8, ["modelValue"]),
          createVNode(_component_HstSelect, {
            modelValue: $setup.storyState.styleType,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.storyState.styleType = $event),
            title: "Style",
            options: $setup.styleOptions
          }, null, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["UiButton"], {
              label: $setup.storyState.label,
              size: $setup.storyState.size,
              "style-type": $setup.storyState.styleType,
              state: $setup.storyState.state
            }, null, 8, ["label", "size", "style-type", "state"])
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
_sfc_main.__file = "src/components/ui-kit/UiButton.story.vue";
const UiButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-febfee4b"], ["__file", "/home/sergey/coding/vue/forms-ui-kit/src/components/ui-kit/UiButton.story.vue"]]);
export {
  UiButton_story as default
};
