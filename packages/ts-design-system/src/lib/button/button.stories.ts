import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button';

const meta: Meta<ButtonComponent> = {
  title: 'Design System/Button',
  component: ButtonComponent,
  // 'autodocs' genera automáticamente una página de documentación leyendo tus @Inputs
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// Historia 1: Botón Principal
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Comprar Tractor',
  },
};

// Historia 2: Botón Secundario
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'small',
    label: 'Ver Detalles',
  },
};