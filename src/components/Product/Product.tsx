import { FC } from "react";
import Button from "../Button/Button";
import { ProductContainer } from "./styled-components";
import { IProps } from "./types";

const Product: FC<IProps> = ({
  id,
  name,
  price,
  image,
  description,
  buyAction,
}) => (
  <ProductContainer>
    <figure>
      <img src={image} alt={name} />
    </figure>
    <div className="product-data">
      <h2>{name}</h2>
      <p className="price">
        {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </p>
      <p className="description">{description}</p>
      <div className="actions">
        <Button data-product-id={id} onClick={buyAction}>
          Buy
        </Button>
      </div>
    </div>
  </ProductContainer>
);

export default Product;
