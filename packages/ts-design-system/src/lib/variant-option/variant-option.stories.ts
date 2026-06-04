import { Meta, StoryObj } from '@storybook/angular';
import { VariantOptionComponent } from './variant-option';

const meta: Meta<VariantOptionComponent> = {
  title: 'Design System/Variant Option',
  component: VariantOptionComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VariantOptionComponent>;

// Historia 1: No seleccionado
export const Unselected: Story = {
  args: {
    label: 'Llantas de 40"',
    selected: false,
  },
};

// Historia 2: Seleccionado (Highlight verde)
export const Selected: Story = {
  args: {
    label: 'Llantas de 40"',
    selected: true,
  },
};