import { Story, Meta } from "@storybook/react";
import Products from "./Products";
import type { IProps } from "./types";

const product = [
  {
    id: 1,
    name: "Product 1",
    price: 9.99,
    image: "https://placehold.it/250x170",
    description: "blas kbaskdfb oasbdflkjabsd ",
    buyAction: () => {},
  },

  {
    id: 1,
    name: "Product 1",
    price: 9.99,
    image: "https://placehold.it/250x170",
    description: "blas kbaskdfb oasbdflkjabsd ",
    buyAction: () => {},
  },

  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    image: "https://placehold.it/250x170",
    description: "blas kbaskdfb oasbdflkjabsd ",
    buyAction: () => {},
  },

  {
    id: 3,
    name: "Product 3",
    price: 29.99,
    image: "https://placehold.it/250x170",
    description: "blas kbaskdfb oasbdflkjabsd ",
    buyAction: () => {},
  },

  {
    id: 4,
    name: "Product 4",
    price: 39.99,
    image: "https://placehold.it/250x170",
    description: "blas kbaskdfb oasbdflkjabsd ",
    buyAction: () => {},
  },

  {
    id: 5,
    name: "Product 5",
    price: 95.55,
    image: "https://placehold.it/250x170",
    description: "blas kbaskdfb oasbdflkjabsd ",
    buyAction: () => {},
  },
];

export default {
  title: "Components/Produts",
  component: Products,
} as Meta;

const Template: Story<IProps> = (args: IProps) => <Products {...args} />;

export const Default = Template.bind({});
Default.args = {
  products,
};
