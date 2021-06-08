import { FormEvent } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import useValue from "./hooks/useValue";
import { Form } from "./styled-components";
import notEmpty from "./utils/notEmpty";

const AddProduct = () => {
  const [product, handleproduct, productValidation] = useValue(
    "",
    notEmpty,
    "Fill in the name of the product"
  );
  const [price, handleprice, priceValidation] = useValue(
    "",
    notEmpty,
    "Insert product price"
  );
  const [image, handleimage, imageValidation] = useValue(
    "",
    notEmpty,
    "Insert product image URL"
  );
  const [description, handledescription, descriptionValidation] = useValue(
    "",
    notEmpty,
    "Insert product description"
  );
  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    const payload = {
      name: product,
      price,
      image,
      description,
    };

    fetch("/api/add", {
      method: "POST",
      body: JSON.stringify(payload),
    }).catch((error) => {
      throw new Error(error);
    });
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input
        label="product Name"
        value={product}
        onChange={handleproduct}
        error={productValidation[0] ? undefined : productValidation[1]}
      />
      <Input
        label="Price"
        value={price}
        onChange={handleprice}
        error={priceValidation[0] ? undefined : priceValidation[1]}
      />
      <Input
        label="image"
        value={image}
        onChange={handleimage}
        error={image[0] ? undefined : imageValidation[1]}
      />
      <Input
        label="Description"
        value={description}
        onChange={handledescription}
        error={description[0] ? undefined : descriptionValidation[1]}
      />
      <div className="actions">
        <Button>Add</Button>
      </div>
    </Form>
  );
};

export default AddProduct;
