const __resolved__virtual_storySource_srcComponentsFormTextinputStoryVue = `<script setup lang="ts">
import { reactive } from 'vue'
import { logEvent } from 'histoire/client'
import TextInput from '@/components/form/TextInput.vue'

type Props = InstanceType<typeof TextInput>['$props'];

const storyState = reactive<Props>({
  name: 'field-name',
  formName: 'test-id',
  label: 'Label',
  supportText: 'Enter "text"',
  required: false,
  validationFunc: function (val) {
    return val !== 'text' ? 'Error: this not a "text"' : ''
  }
})

<\/script>

<template>
  <Story
    title="Components/Form/TextInput"
    auto-props-disabled
  >
    <Variant title="Playground">
      <div class="story-sandbox__container">
        <TextInput
          :name="storyState.name"
          :form-id="storyState.formName"
          :label="storyState.label"
          :support-text="storyState.supportText"
          :required="storyState.required"
          :validation-func="storyState.validationFunc"
          @focus="logEvent('focus', $event)"
          @register="logEvent('register', $event)"
        />
      </div>
      <template #controls>
        <HstText
          v-model="storyState.name"
          title="Field name"
        />
        <HstText
          v-model="storyState.formName"
          title="Form id"
        />
        <HstText
          v-model="storyState.label"
          title="Label"
        />
        <HstText
          v-model="storyState.supportText"
          title="Support text"
        />
        <HstCheckbox
          v-model="storyState.required"
          title="Required"
        />
      </template>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.story-sandbox__container {
  width: fit-content;
}
</style>

<docs lang="md">
## TextInput: A text input form component.

- Build with custom state machine.
- Based on [UiInputContainer](../ui-kit/UiInputContainer.story.vue).
- Can be used with provided validation function or used with default 'not empty' function.
- Emit registration events with internal state machine ref.
- Retains state after reload page/rerender component.

Can be used with [FormComponent](./FormComponent.story.vue) or other machine based components.

### Component API

#### @Props

| Name           | Description                                                                           | Default   |
|----------------|---------------------------------------------------------------------------------------|-----------|
| name           | Input's name, will be form field in request body. \`string\`                            | -         |
| formName       | Form name, can be used for overwrite value provided by FormComponent. \`string\`        | -         |
| label          | Input’s label. \`string\`                                                               | -         |
| supportText    | Annotation text under input. \`string\`                                                 | -         |
| required       | Flag used for default validation function and also for styling input label. \`boolean\` | false     |
| validationFunc | Custom function for validate input’s value. \`(value: any) => string\`                  | see below |

\`\`\`ts
function (value: string): string {
  return props.required && !value.length
    ? 'Поле обязательно для заполнения'
    : ''
}
\`\`\`

#### @Events

| Name       | Description                    | Payload                                                      |
|------------|--------------------------------|--------------------------------------------------------------|
| register   | Emitted on component creation. | \`{ type: 'REGISTER', data: { name: string, actor: Actor } }\` |
| unregister | Emitted on component destroy.  | \`{ type: 'UNREGISTER', data: { name: string } }\`             |

### Component usage

\`\`\`vue
<template>
  <FormComponent>
    <TextInput
      label="Поле 1"
      name="field1"
      form-name="form-name"
      support-text="support text"
      :required="false"
      :validationFunc="(value) => value === '22' ? 'Ошибка 22': ''"
      @register="onRegister"
      @unregister="onUnregister"
    />
  </FormComponent>
</template>
\`\`\`
</docs>
`;
export {
  __resolved__virtual_storySource_srcComponentsFormTextinputStoryVue as default
};
