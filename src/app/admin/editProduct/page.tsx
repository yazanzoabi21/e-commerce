import EditProductPage from "../components/products/editProductList";

export default function EditProductsRoute({ params }: { params: { id: string } }) {
  return <EditProductPage params={params} />;
}