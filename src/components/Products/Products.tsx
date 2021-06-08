import { FC } from "react";
import Product from "../Product/Product";
import { ProductsWrapper } from "./styled-components";
import { IProps } from "./types";

const Products: FC<IProps> = ({ products }) => (
  <ProductsWrapper>
    {products?.map((product) => (
      <Product {...product} key={product.id} />
    ))}
  </ProductsWrapper>
);

export default Products;
