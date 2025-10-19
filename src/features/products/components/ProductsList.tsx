"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductsList() {
	const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
	const [filterStatus, setFilterStatus] = useState("all");
	const [filterCategory, setFilterCategory] = useState("all");
	const [filterStock, setFilterStock] = useState("all");

	// Mock data
	const products = [
		{ id: "1", name: "Product 1", category: "Electronics", price: 299.99, stock: 45, status: "published" },
		{ id: "2", name: "Product 2", category: "Clothing", price: 49.99, stock: 0, status: "draft" },
		{ id: "3", name: "Product 3", category: "Electronics", price: 199.99, stock: 12, status: "published" },
		{ id: "4", name: "Product 4", category: "Home", price: 89.99, stock: 8, status: "published" },
		{ id: "5", name: "Product 5", category: "Clothing", price: 29.99, stock: 100, status: "published" },
	];

	const handleSelectAll = (checked: boolean) => {
		if (checked) {
			setSelectedProducts(products.map((p) => p.id));
		} else {
			setSelectedProducts([]);
		}
	};

	const handleSelectProduct = (id: string, checked: boolean) => {
		if (checked) {
			setSelectedProducts([...selectedProducts, id]);
		} else {
			setSelectedProducts(selectedProducts.filter((pid) => pid !== id));
		}
	};

	const handleBulkAction = (action: string) => {
		console.log(`Bulk action: ${action} on products:`, selectedProducts);
		alert(`${action} applied to ${selectedProducts.length} products`);
	};

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-gray-900">Products</h1>
					<p className="text-gray-600 mt-1">Manage your product inventory</p>
				</div>
				<Link
					href="/admin/newProduct"
					className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all"
				>
					+ Add Product
				</Link>
			</div>

			{/* Filters */}
			<div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
						<select
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							value={filterStatus}
							onChange={(e) => setFilterStatus(e.target.value)}
						>
							<option value="all">All Status</option>
							<option value="published">Published</option>
							<option value="draft">Draft</option>
						</select>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
						<select
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							value={filterCategory}
							onChange={(e) => setFilterCategory(e.target.value)}
						>
							<option value="all">All Categories</option>
							<option value="Electronics">Electronics</option>
							<option value="Clothing">Clothing</option>
							<option value="Home">Home</option>
						</select>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
						<select
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							value={filterStock}
							onChange={(e) => setFilterStock(e.target.value)}
						>
							<option value="all">All Stock</option>
							<option value="in-stock">In Stock</option>
							<option value="low-stock">Low Stock (&lt; 10)</option>
							<option value="out-of-stock">Out of Stock</option>
						</select>
					</div>
				</div>
			</div>

			{/* Bulk Actions */}
			{selectedProducts.length > 0 && (
				<div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between">
					<span className="text-blue-900 font-medium">
						{selectedProducts.length} product(s) selected
					</span>
					<div className="flex gap-2">
						<button
							onClick={() => handleBulkAction("Publish")}
							className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
						>
							Publish
						</button>
						<button
							onClick={() => handleBulkAction("Unpublish")}
							className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
						>
							Unpublish
						</button>
						<button
							onClick={() => handleBulkAction("Delete")}
							className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
						>
							Delete
						</button>
					</div>
				</div>
			)}

			{/* Products Table */}
			<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-gray-50 border-b border-gray-200">
							<tr>
								<th className="px-6 py-4 text-left">
									<input
										type="checkbox"
										className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
										checked={selectedProducts.length === products.length}
										onChange={(e) => handleSelectAll(e.target.checked)}
									/>
								</th>
								<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
								<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
								<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
								<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Stock</th>
								<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
								<th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200">
							{products.map((product) => (
								<tr key={product.id} className="hover:bg-gray-50 transition-colors">
									<td className="px-6 py-4">
										<input
											type="checkbox"
											className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
											checked={selectedProducts.includes(product.id)}
											onChange={(e) => handleSelectProduct(product.id, e.target.checked)}
										/>
									</td>
									<td className="px-6 py-4">
										<div className="flex items-center gap-3">
											<div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
											<div>
												<p className="font-medium text-gray-900">{product.name}</p>
												<p className="text-sm text-gray-500">ID: {product.id}</p>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 text-gray-700">{product.category}</td>
									<td className="px-6 py-4 font-semibold text-gray-900">${product.price}</td>
									<td className="px-6 py-4">
										<span
											className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
												product.stock === 0
													? "bg-red-100 text-red-700"
													: product.stock < 10
													? "bg-yellow-100 text-yellow-700"
													: "bg-green-100 text-green-700"
											}`}
										>
											{product.stock === 0 ? "Out of Stock" : `${product.stock} in stock`}
										</span>
									</td>
									<td className="px-6 py-4">
										<span
											className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
												product.status === "published"
													? "bg-green-100 text-green-700"
													: "bg-gray-100 text-gray-700"
											}`}
										>
											{product.status === "published" ? "Published" : "Draft"}
										</span>
									</td>
									<td className="px-6 py-4 text-right">
										<Link
											href={`/admin/editProduct/${product.id}`}
											className="text-blue-600 hover:text-blue-700 font-medium"
										>
											Edit
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
