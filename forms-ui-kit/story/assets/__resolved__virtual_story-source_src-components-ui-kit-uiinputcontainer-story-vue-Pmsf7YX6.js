const __resolved__virtual_storySource_srcComponentsUiKitUiinputcontainerStoryVue = `<script setup lang="ts">
import { reactive } from 'vue'
import UiInputContainer from '@/components/ui-kit/UiInputContainer.vue'

type Props = InstanceType<typeof UiInputContainer>['$props'];

const stateOptions: { label: string, value: Props['state'] }[] = [
  {
    label: 'Default (idle)',
    value: undefined
  },
  {
    label: 'Idle',
    value: 'idle'
  },
  {
    label: 'Editing',
    value: 'editing'
  },
  {
    label: 'Error',
    value: 'error'
  },
  {
    label: 'Disabled',
    value: 'disabled'
  }
]

const storyState = reactive<Props>({
  inputId: 'formId-inputName',
  state: undefined,
  required: false,
  label: 'Label',
  supportText: 'Support text',
  errorText: 'Error text'
})

<\/script>

<template>
  <Story
    title="Ui kit/UiInputContainer"
    auto-props-disabled
  >
    <Variant title="Playground">
      <div class="story-sandbox__container">
        <UiInputContainer
          :input-id="storyState.inputId"
          :required="storyState.required"
          :state="storyState.state"
          :label="storyState.label"
          :support-text="storyState.supportText"
          :error-text="storyState.errorText"
        >
          <span>Input slot</span>
        </UiInputContainer>
      </div>
      <template #controls>
        <HstText
          v-model="storyState.inputId"
          title="Input id"
        />
        <HstSelect
          v-model="storyState.state"
          title="State"
          :options="stateOptions"
        />
        <HstCheckbox
          v-model="storyState.required"
          title="Required"
        />
        <HstText
          v-model="storyState.label"
          title="Label"
        />
        <HstText
          v-model="storyState.supportText"
          title="Support text"
        />
        <HstText
          v-model="storyState.errorText"
          title="Error text"
        />
      </template>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.story-sandbox__container{
  width: 100%;
  max-width: 327px;
}
</style>

<docs lang="md">
## UiInputContainer: An ui kit input container component.

- Style changing according to component state.
- Properties added for change appropriate text placeholders.
- Сomponent is made based on the [Design System 1.4.1](https://www.figma.com/community/file/1255349027535859598).

### Component API

#### @Props

| Name        | Description                                                                                                  | Default |
|-------------|--------------------------------------------------------------------------------------------------------------|---------|
| inputId     | Can be used for connect label with input in slot. \`string\`                                                   | -       |
| state       | State of component. Style changing according to this property.\`'idle' \\| 'editing' \\| 'error' \\| 'disabled'\` | 'idle’  |
| required    | Add red sign to label.  \`boolean\`                                                                            | false   |
| label       | Label text. \`string\`                                                                                         | '’      |
| supportText | Support text. \`string\`                                                                                       | '’      |
| errorText   | Error text. \`string\`                                                                                         | '’      |

### Component usage

\`\`\`vue
<template>
  <UiInputContainer
    input-id="input-id"
    required="true"
    state="idle"
    label="Label"
    support-text="Support text"
    error-text="Error text"
  >
    <span>Input slot</span>
  </UiInputContainer>
</template>
\`\`\`
</docs>
`;
export {
  __resolved__virtual_storySource_srcComponentsUiKitUiinputcontainerStoryVue as default
};
