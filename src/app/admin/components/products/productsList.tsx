import AdminLayout from "@/app/shared";
import ProductsList from "@/app/shared/pages/productList/ProductsList";

export default function ProductsPage() {
  return (
    <AdminLayout>
      <ProductsList />
    </AdminLayout>
  );
}