const __resolved__virtual_storySource_srcComponentsFormPreviousbuttonStoryVue = `<script setup lang="ts">
import { logEvent } from 'histoire/client'
import PreviousButton from '@/components/form/PreviousButton.vue'
import LogMachine from '@/story/LogMachine.vue'
<\/script>

<template>
  <Story
    title="Components/Form/PreviousButton"
    auto-props-disabled
  >
    <Variant title="Playground">
      <div class="story-sandbox__container">
        <LogMachine
          @machine-event="logEvent('Machine Event', $event)"
        >
          <PreviousButton
            label="Previous step"
          />
        </LogMachine>
      </div>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.story-sandbox__container {
  width: fit-content;
}
</style>

<docs lang="md">
## PreviousButton: A previous step form component.

- Used as previous step button in multi step forms.
- Based on [UiButton](../ui-kit/UiButton.story.vue) so can be used with its props (size, label, styleType).

Must be used with [FormComponent](./FormComponent.story.vue).

### Component usage

\`\`\`vue
<template>
  <FormComponent>
    <SubmitButton
      label="Назад"
      size="l"
      style-type="primary"
    />
  </FormComponent>
</template>
\`\`\`
</docs>
`;
export {
  __resolved__virtual_storySource_srcComponentsFormPreviousbuttonStoryVue as default
};
