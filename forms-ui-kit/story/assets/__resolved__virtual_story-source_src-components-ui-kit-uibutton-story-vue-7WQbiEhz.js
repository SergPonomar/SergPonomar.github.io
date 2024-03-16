const __resolved__virtual_storySource_srcComponentsUiKitUibuttonStoryVue = `<script setup lang="ts">
import { reactive } from 'vue'
import UiButton from '@/components/ui-kit/UiButton.vue'

type Props = InstanceType<typeof UiButton>['$props'];

const sizeOptions: { label: string, value: Props['size'] }[] = [
  {
    label: 'Default (l)',
    value: undefined
  },
  {
    label: 'Large (l)',
    value: 'l'
  },
  {
    label: 'Medium (m)',
    value: 'm'
  },
  {
    label: 'Small (s)',
    value: 's'
  },
  {
    label: 'X-Small (xs)',
    value: 'xs'
  }
]

const stateOptions: { label: string, value: Props['state'] }[] = [
  {
    label: 'Default',
    value: undefined
  },
  {
    label: 'Disabled',
    value: 'disabled'
  }
]

const styleOptions: { label: string, value: Props['styleType'] }[] = [
  {
    label: 'Default (primary)',
    value: undefined
  },
  {
    label: 'Primary',
    value: 'primary'
  },
  {
    label: 'Secondary',
    value: 'secondary'
  },
  {
    label: 'Tertiary',
    value: 'tertiary'
  }
]

const storyState = reactive<Props>({
  label: 'Label',
  size: 'l',
  state: undefined,
  styleType: undefined
})

<\/script>

<template>
  <Story
    title="Ui kit/UiButton"
    auto-props-disabled
  >
    <Variant title="Sizes & styles">
      <div class="story-sandbox">
        <div
          v-for="style in styleOptions.slice(1)"
          :key="style.value"
          :style="\`--content: '\${style.label}';\`"
          class="story-sandbox__container"
        >
          <UiButton
            v-for="size in sizeOptions.slice(1)"
            :key="size.value"
            label="Label"
            :size="size.value"
            :style-type="style.value"
          />
        </div>
      </div>
    </Variant>

    <Variant title="Playground">
      <div class="story-sandbox__container">
        <UiButton
          :label="storyState.label"
          :size="storyState.size"
          :style-type="storyState.styleType"
          :state="storyState.state"
        />
      </div>
      <template #controls>
        <HstText
          v-model="storyState.label"
          title="Label"
        />
        <HstSelect
          v-model="storyState.size"
          title="Size"
          :options="sizeOptions"
        />
        <HstSelect
          v-model="storyState.state"
          title="State"
          :options="stateOptions"
        />
        <HstSelect
          v-model="storyState.styleType"
          title="Style"
          :options="styleOptions"
        />
      </template>
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
.story-sandbox {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  &__container {
    width: fit-content;

    & > *:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>

<docs lang="md">
## UiButton: An ui kit button component.

- Can be sized by 'size' property.
- Can be styled by 'styleType' property.
- Can be disabled by 'state' property.
- Сomponent is made based on the [Design System 1.4.1](https://www.figma.com/community/file/1255349027535859598).

### Component API

#### @Props

| Name      | Description                                                                     | Default   |
|-----------|---------------------------------------------------------------------------------|-----------|
| size      | Size of button according to design system. \` 'l' \\| 'm' \\| 's' \\| 'xs'\`         | 'l’       |
| label     | Button text. \`string\`                                                           | -         |
| state     | Can be used for disable component. \`disabled\`                                   | -         |
| styleType | Style type according to design system. \`'primary' \\| 'secondary' \\| 'tertiary'\` | 'primary' |

### Component usage

\`\`\`vue
<template>
  <UiButton
    label="Купить"
    size="l"
    style-type="primary"
    state="disabled"
  />
</template>
\`\`\`
</docs>
`;
export {
  __resolved__virtual_storySource_srcComponentsUiKitUibuttonStoryVue as default
};
