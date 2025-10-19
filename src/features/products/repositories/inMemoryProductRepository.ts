import type { Product, ProductRepository } from "@/features/products/repositories/productRepository";

// Temporary in-memory repository for demo/testing
export class InMemoryProductRepository implements ProductRepository {
  private items: Product[] = [
    { id: "1", name: "Product 1", price: 299.99, stock: 45 },
    { id: "2", name: "Product 2", price: 49.99, stock: 0 },
  ];

  async list() { return [...this.items]; }
  async get(id: string) { return this.items.find(p => p.id === id) ?? null; }
  async create(data: Omit<Product, "id">) {
    const item: Product = { id: (this.items.length + 1).toString(), ...data };
    this.items.push(item);
    return item;
  }
  async update(id: string, data: Partial<Omit<Product, "id">>) {
    const idx = this.items.findIndex(p => p.id === id);
    if (idx === -1) throw new Error("Product not found");
    this.items[idx] = { ...this.items[idx], ...data } as Product;
    return this.items[idx];
  }
  async remove(id: string) {
    this.items = this.items.filter(p => p.id !== id);
  }
}
