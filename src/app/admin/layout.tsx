import { ReactNode } from "react";

export const metadata = {
  title: "Admin Dashboard - E-Commerce",
  description: "Admin panel for e-commerce management",
};

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return children;
}
