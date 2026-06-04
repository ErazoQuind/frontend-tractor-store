import { Meta, StoryObj } from '@storybook/angular';
import { ProductCardComponent } from './product-card';

const meta: Meta<ProductCardComponent> = {
  title: 'Design System/Product Card',
  component: ProductCardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ProductCardComponent>;

// Historia 1: Tarjeta completa con precio
export const WithPrice: Story = {
  args: {
    title: 'Tractor Agrícola Pro 5000',
    // Usamos una imagen de muestra para el catálogo
    imageUrl: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 45000,
  },
};

// Historia 2: Tarjeta sin precio (para productos próximos a salir o sin stock)
export const WithoutPrice: Story = {
  args: {
    title: 'Cosechadora Industrial X (Próximamente)',
    imageUrl: 'https://images.unsplash.com/photo-1620619767323-b95a89183081?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    // Al omitir la propiedad 'price', el *ngIf ocultará el elemento
  },
};