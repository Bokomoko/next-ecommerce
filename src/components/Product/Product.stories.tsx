import { Story, Meta } from "@storybook/react";
import Product from "./Product";
import type { IProps } from "./types";

export default {
  title: "Components/Product",
  component: Product,
} as Meta;

const Template: Story<IProps> = (args: IProps) => <Product {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  nome: "Product 1",
  descricao: "Lorem pasdfj pasjidbfpasjdb asdfg",
  imagem: "https://placehold.it/250x170",
  preco: 9.99,
  acaoComprar: () => {},
};
