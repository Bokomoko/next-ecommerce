export interface IProps {
  id: number | string;
  name: string;
  price: number;
  image: string;
  description: string;
  buyAction(): void;
}
