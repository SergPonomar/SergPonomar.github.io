const __resolved__virtual_storySource_srcComponentsFormFormcomponentStoryVue = `<script setup lang="ts">
import { reactive } from 'vue'
import { logEvent } from 'histoire/client'
import FormComponent from '@/components/form/FormComponent.vue'
import TextInput from '@/components/form/TextInput.vue'
import SubmitButton from '@/components/form/SubmitButton.vue'
import PreviousButton from '@/components/form/PreviousButton.vue'

type Props = InstanceType<typeof FormComponent>['$props'];

const storyStateSingle = reactive<Props>({
  name: 'test-form-single',
  numberOfSteps: 1,
  url: 'https://sergponomar-form-demo.builtwithdark.com/demo-form',
  method: 'post'
})

const storyStateMulti = reactive<Props>({
  name: 'test-form-multi',
  numberOfSteps: 2,
  url: 'https://sergponomar-form-demo.builtwithdark.com/demo-form',
  method: 'post'
})

const stateOptions: { label: string, value: Props['url'] }[] = [
  {
    label: 'Random response',
    value: 'https://sergponomar-form-demo.builtwithdark.com/demo-form'
  },
  {
    label: 'Success response',
    value: 'https://sergponomar-form-demo.builtwithdark.com/demo-form-success'
  },
  {
    label: 'Error response',
    value: 'https://sergponomar-form-demo.builtwithdark.com/demo-form-error'
  }
]
<\/script>

<template>
  <Story
    title="Components/Form/FormComponent"
    auto-props-disabled
  >
    <Variant title="Single step form">
      <div class="story-sandbox__container">
        <FormComponent
          class="form-component-story"
          :name="storyStateSingle.name"
          :number-of-steps="storyStateSingle.numberOfSteps"
          :url="storyStateSingle.url"
          :method="storyStateSingle.method"
          @done="logEvent('done', $event)"
          @error="logEvent('error', $event)"
        >
          <TextInput
            label="Поле 1"
            name="field1"
            class="form-component-story__input"
          />
          <SubmitButton
            label="Отправить"
            style="width: 100%;"
          />
        </FormComponent>
      </div>
      <template #controls>
        <HstText
          v-model="storyStateSingle.name"
          title="Name"
        />
        <HstNumber
          v-model="storyStateSingle.numberOfSteps"
          title="Number of steps"
        />
        <HstSelect
          v-model="storyStateSingle.url"
          title="Url"
          :options="stateOptions"
        />
        <HstText
          v-model="storyStateSingle.method"
          title="Http method"
        />
      </template>
    </Variant>
    <Variant title="Multistep form">
      <div class="story-sandbox__container">
        <FormComponent
          v-slot="{ step, numberOfSteps }"
          class="form-component-story"
          :name="storyStateMulti.name"
          :number-of-steps="storyStateMulti.numberOfSteps"
          :url="storyStateMulti.url"
          :method="storyStateMulti.method"
          @done="logEvent('done', $event)"
          @error="logEvent('error', $event)"
        >
          <p class="form-component-story__title">
            Шаг {{ step }}/{{ numberOfSteps }}
          </p>
          <div v-if="step === 1">
            <TextInput
              label="Поле 1"
              name="field1"
              class="form-component-story__input"
            />
            <div class="form-component-story__buttons">
              <SubmitButton
                label="Далее"
                next
              />
            </div>
          </div>
          <div v-if="step === 2">
            <TextInput
              label="Поле 2"
              name="field2"
              required
              class="form-component-story__input"
            />
            <div class="form-component-story__buttons">
              <PreviousButton
                label="Назад"
              />
              <SubmitButton
                label="Отправить"
                class="demo-form__submit"
              />
            </div>
          </div>
        </FormComponent>
      </div>
      <template #controls>
        <HstText
          v-model="storyStateMulti.name"
          title="Name"
        />
        <HstNumber
          v-model="storyStateMulti.numberOfSteps"
          title="Number of steps"
        />
        <HstSelect
          v-model="storyStateMulti.url"
          title="Url"
          :options="stateOptions"
        />
        <HstText
          v-model="storyStateMulti.method"
          title="Http method"
        />
      </template>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.story-sandbox__container {
  width: fit-content;
}

.form-component-story {
  min-width: 288px;

  &__title {
    margin-bottom: 8px;
  }

  &__input {
    margin-bottom: 16px;
  }

  &__buttons {
    display: flex;
    gap: 16px;

    button {
      width: 100%;

      &:last-child {
        margin-left: auto;
      }
    }
  }
}
</style>

<docs lang="md">
## FormComponent: A multi step form component.

- Build with custom state machine.
- Automatically send request to provided url/method.
- Multiple steps via provided slotProps.
- Retains state after reload page/rerender component.

Must be used with form control components. For example: [SubmitButton](./SubmitButton.story.vue)

### Component API

#### @Props

| Name          | Description                                                                                | Default |
|---------------|--------------------------------------------------------------------------------------------|---------|
| name          | The name of the form. The value must not be the empty string, and must be unique. \`string\` | -       |
| numberOfSteps | Number of steps for multi step mode. \`number\`                                              | 1       |
| url           | Request url. \`string\`                                                                      | -       |
| method        | Request method. \`Method\` ( axios type)                                                     | 'post’  |

#### @Events

| Name  | Description                        | Payload        |
|-------|------------------------------------|----------------|
| done  | Emitted after successful request   | Response body  |
| error | Emitted after unsuccessful request | Response error |

#### @Providers

| Name      | Description                                                             |
|-----------|-------------------------------------------------------------------------|
| formName  | The name of the form. Provided for form components usage. \`string\`      |
| formActor | Form actor. Provided for form components usage. \`Actor\` ( xstate type ) |

### Component usage

\`\`\`vue
<template>
  <FormComponent
    v-slot="{ step, numberOfSteps }"
    name="form-name"
    :number-of-steps="1"
    url="https://example.com/"
    method="post"
    @done="onDone"
    @error="onError"
  >
    <p>{{ step }}/{{ numberOfSteps }}</p>
    <TextInput
      label="Поле 1"
      name="field1"
    />
    <SubmitButton
      label="Отправить"
    />
  </FormComponent>
</template>
\`\`\`
</docs>
`;
export {
  __resolved__virtual_storySource_srcComponentsFormFormcomponentStoryVue as default
};
