import { action } from "@storybook/addon-actions";
import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { NavBar } from "./NavBar";

export default {
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

export const Default: ComponentStoryObj<typeof NavBar> = {
  args: { onClick: action("クリック") },
  parameters: {
    docs: {
      description: {
        component: `コンポーネントの説明マークダウン。`,
      },
    },
  },
};
export const Story: ComponentStoryObj<typeof NavBar> = {
  args: { onClick: action("クリック") },
  parameters: {
    docs: {
      description: {
        story: `Storyの説明マークダウン。`,
      },
    },
  },
};
