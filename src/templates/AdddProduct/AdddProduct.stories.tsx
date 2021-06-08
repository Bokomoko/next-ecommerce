import { Story, Meta } from "@storybook/react";
import AddProduct from "./AdddProduct";

export default {
  title: "Templates/AddProduct",
  component: AddProduct,
} as Meta;

const Template: Story = () => <AddProducto />;

export const Default = Template.bind({});
Default.args = {};
