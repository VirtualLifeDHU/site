import { action } from "@storybook/addon-actions";
import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { LoadingAnimationA } from "./LoadingAnimationA";

export default {
  component: LoadingAnimationA,
} as ComponentMeta<typeof LoadingAnimationA>;

export const Default: ComponentStoryObj<typeof LoadingAnimationA> = {
  args: { onClick: action("クリック") },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
};
export const Story: ComponentStoryObj<typeof LoadingAnimationA> = {
  args: { onClick: action("クリック") },
  parameters: {
    docs: {
      description: {
        story: `Storyの説明マークダウン。`,
      },
    },
  },
};
