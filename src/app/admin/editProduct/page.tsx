import { redirect } from "next/navigation";

export default function EditProductsRoute() {
  // No id provided at /admin/editProduct, redirect to products list
  redirect("/admin/products");
}