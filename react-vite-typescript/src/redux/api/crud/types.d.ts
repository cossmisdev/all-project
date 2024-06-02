namespace TODO {
  interface ProductType {
    _id?: number;
    name: string;
  }

  type GetResponse = ProductType[];
  type GetRequest = void;

  type PostResponse = ProductType[];
  type PostRequest = ProductType[];
}
