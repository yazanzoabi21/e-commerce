import AdminLayout from "@/app/shared";
import ProductForm from "@/app/shared/pages/productList/ProductForm";

export default function NewProductRoute() {
  return (
    <AdminLayout>
      <ProductForm />
    </AdminLayout>
  );
}