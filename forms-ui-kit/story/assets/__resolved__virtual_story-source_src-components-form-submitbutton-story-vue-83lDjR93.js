const __resolved__virtual_storySource_srcComponentsFormSubmitbuttonStoryVue = `<script setup lang="ts">
import { reactive } from 'vue'
import { logEvent } from 'histoire/client'
import SubmitButton from '@/components/form/SubmitButton.vue'
import LogMachine from '@/story/LogMachine.vue'

type SubmitButtonProps = InstanceType<typeof SubmitButton>['$props']
type LogMachineProps = InstanceType<typeof LogMachine>['$props']
type Props = SubmitButtonProps & LogMachineProps

const storyState = reactive<Props>({
  next: false,
  state: 'idle'
})

const logMachineStateOptions: { label: string, value: Props['state'] }[] = [
  {
    label: 'Idle',
    value: 'idle'
  },
  {
    label: 'Error',
    value: 'error'
  }
]
<\/script>

<template>
  <Story
    title="Components/Form/SubmitButton"
    auto-props-disabled
  >
    <Variant title="Playground">
      <div class="story-sandbox__container">
        <LogMachine
          :state="storyState.state"
          @machine-event="logEvent('Machine Event', $event)"
        >
          <SubmitButton
            :next="storyState.next"
            label="Submit"
          />
        </LogMachine>
      </div>
      <template #controls>
        <HstCheckbox
          v-model="storyState.next"
          title="Next step button"
        />
        <HstSelect
          v-model="storyState.state"
          title="FormActor state"
          :options="logMachineStateOptions"
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
## SubmitButton: A next step / submit form component.

- Used for send form request.
- Can be used as next step button in multi step forms.
- Disabled if form in 'error' state.
- Based on [UiButton](../ui-kit/UiButton.story.vue) so can be used with its props (size, label, styleType).

Must be used with [FormComponent](./FormComponent.story.vue).

### Component API

#### @Props

| Name | Description                                          | Default |
|------|------------------------------------------------------|---------|
| next | Use this flag for use as next step button. \`boolean\` | false   |

### Component usage

\`\`\`vue
<template>
  <FormComponent>
    <SubmitButton
      label="Отправить"
      :next='false'
      size="l"
      style-type="primary"
    />
  </FormComponent>
</template>
\`\`\`
</docs>
`;
export {
  __resolved__virtual_storySource_srcComponentsFormSubmitbuttonStoryVue as default
};
