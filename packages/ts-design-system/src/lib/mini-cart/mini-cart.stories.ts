import { Meta, StoryObj } from '@storybook/angular';
import { MiniCartComponent } from './mini-cart';

const meta: Meta<MiniCartComponent> = {
  title: 'Design System/Mini Cart',
  component: MiniCartComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<MiniCartComponent>;

// Historia 1: Carrito vacío
export const Empty: Story = {
  args: {
    itemCount: 0,
    isHighlighted: false,
  },
};

// Historia 2: Carrito con productos (Badge visible)
export const WithItems: Story = {
  args: {
    itemCount: 3,
    isHighlighted: false,
  },
};

// Historia 3: Estado estático resaltado
export const Highlighted: Story = {
  args: {
    itemCount: 4,
    isHighlighted: true,
  },
};

// Historia Especial: Simulación de Evento Cross-Component (Micro-frontends)
export const EventInteraction: Story = {
  args: {
    itemCount: 0,
    isHighlighted: false,
  },
  // La función play se ejecuta automáticamente en Storybook al cargar esta historia
  play: async () => {
    // 1. Esperamos 1.5 segundos para que veas el carrito vacío
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // 2. Simulamos que otro Micro-frontend (ej: Catálogo) disparó el evento global
    const event = new CustomEvent('cart-updated', { detail: { count: 1 } });
    window.dispatchEvent(event);
  },
};