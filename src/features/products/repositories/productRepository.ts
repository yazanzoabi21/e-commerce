export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export interface ProductRepository {
  list(): Promise<Product[]>;
  get(id: string): Promise<Product | null>;
  create(data: Omit<Product, "id">): Promise<Product>;
  update(id: string, data: Partial<Omit<Product, "id">>): Promise<Product>;
  remove(id: string): Promise<void>;
}
