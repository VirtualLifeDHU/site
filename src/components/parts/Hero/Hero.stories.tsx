import { action } from "@storybook/addon-actions";
import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Hero } from "./Hero";

export default {
  component: Hero,
} as ComponentMeta<typeof Hero>;

export const Default: ComponentStoryObj<typeof Hero> = {
  args: { onClick: action("クリック") },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
};
export const Story: ComponentStoryObj<typeof Hero> = {
  args: { onClick: action("クリック") },
  parameters: {
    docs: {
      description: {
        story: `Storyの説明マークダウン。`,
      },
    },
  },
};
