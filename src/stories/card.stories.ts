import { HomeCard } from '@/components/card.component';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/HomeCard',
  component: HomeCard,
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
} satisfies Meta<typeof HomeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Venice',
    subtitle: 'Italy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit in turpis eu volutpat. Quisque pellentesque scelerisque nisl, sit amet convallis orci convallis sit amet. Nam a neque dolor',
    backgroundAsset: {
      url: 'https://placehold.co/588x479/D1D3CA/D1D3CA',
      alt: 'Venice card image',
    },
    cta: {
      url: '/article',
      text: 'Explore More',
      ariaLabel: 'explore more button',
      target: '_blank',
    },
  },
};
