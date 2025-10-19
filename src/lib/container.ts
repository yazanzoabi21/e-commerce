import "server-only";
import { InMemoryProductRepository } from "@/features/products/repositories/inMemoryProductRepository";
import { createProductService, type ProductService } from "@/features/products/services/productService";

export type Services = {
  products: ProductService;
};

export function createServices(): Services {
  const productRepo = new InMemoryProductRepository();
  return {
    products: createProductService(productRepo),
  };
}
