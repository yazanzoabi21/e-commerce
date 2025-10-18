import AdminLayout from "@/app/shared";
import ProductForm from "@/app/shared/pages/productList/ProductForm";

export default async function EditProductRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return (
    <AdminLayout>
      <ProductForm productId={id} />
    </AdminLayout>
  );
}
