import HeroBanner from '@/components/home-hero.component';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/HeroBanner',
  component: HeroBanner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Valtech',
    subtitle: 'Banner subtitle',
    description: 'Welcome to Valtech!',
    backgroundAsset: {
      url: 'https://placehold.co/1196x480/F3F2EF/F3F2EF',
      alt: 'banner background picture',
    },
    foregroundAsset: {
      url: 'https://placehold.co/345x570/D1D3CA/D1D3CA',
      alt: 'banner foreground picture',
    },
  },
};
