import ProductForm from "@/features/products/components/ProductForm";

export default async function EditProductRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return <ProductForm productId={id} />;
}
