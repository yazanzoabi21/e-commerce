import "server-only";
import type { ProductRepository } from "@/features/products/repositories/productRepository";

export function createProductService(repo: ProductRepository) {
  return {
    list: () => repo.list(),
    get: (id: string) => repo.get(id),
    create: (data: Parameters<ProductRepository["create"]>[0]) => repo.create(data),
    update: (id: string, data: Parameters<ProductRepository["update"]>[1]) => repo.update(id, data),
    remove: (id: string) => repo.remove(id),
  };
}
export type ProductService = ReturnType<typeof createProductService>;
