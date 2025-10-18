import AdminLayout from "@/app/shared";
import ProductForm from "@/app/shared/pages/productList/ProductForm";

export default function EditProductPage({ params }: { params: { id: string } }) {
  return (
    <AdminLayout>
      <ProductForm productId={params.id} />
    </AdminLayout>
  );
}