import styled from "styled-components";

export const ProductContainer = styled.article`
  border: 1px solid #d1d5db;
  max-width: 250px;
  border-radius: 8px;

  .product-data {
    padding: 1em;
  }

  figure {
    margin: 0;
  }

  h2 {
    font-size: 1.2em;
    margin-top: 0;
  }

  .price {
    color: #895df4;
    font-weight: bold;
  }

  .description {
    color: #6b7280;
    margin-bottom: 0;
  }

  .actions {
    margin-top: 1em;
    text-align: center;
  }
`;
