"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProductFormProps {
	productId?: string;
}

export default function ProductForm({ productId }: ProductFormProps) {
	const router = useRouter();
	const isEditMode = !!productId;
  
	const [formData, setFormData] = useState({
		name: "",
		category: "",
		price: "",
		stock: "",
		description: "",
		status: "draft",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		alert(`Product ${isEditMode ? "updated" : "created"} successfully!`);
		router.push("/admin/products");
	};

	return (
		<div className="max-w-4xl">
			<div className="mb-6">
				<h1 className="text-3xl font-bold text-gray-900">
					{isEditMode ? `Edit Product #${productId}` : "Create New Product"}
				</h1>
				<p className="text-gray-600 mt-1">
					{isEditMode ? "Update product information" : "Add a new product to your inventory"}
				</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
					<h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
          
					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Product Name *
							</label>
							<input
								type="text"
								required
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								placeholder="Enter product name"
							/>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Category *
								</label>
								<select
									required
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									value={formData.category}
									onChange={(e) => setFormData({ ...formData, category: e.target.value })}
								>
									<option value="">Select category</option>
									<option value="Electronics">Electronics</option>
									<option value="Clothing">Clothing</option>
									<option value="Home">Home</option>
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Status *
								</label>
								<select
									required
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									value={formData.status}
									onChange={(e) => setFormData({ ...formData, status: e.target.value })}
								>
									<option value="draft">Draft</option>
									<option value="published">Published</option>
								</select>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Price *
								</label>
								<input
									type="number"
									required
									step="0.01"
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									value={formData.price}
									onChange={(e) => setFormData({ ...formData, price: e.target.value })}
									placeholder="0.00"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Stock Quantity *
								</label>
								<input
									type="number"
									required
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									value={formData.stock}
									onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
									placeholder="0"
								/>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Description
							</label>
							<textarea
								rows={4}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								value={formData.description}
								onChange={(e) => setFormData({ ...formData, description: e.target.value })}
								placeholder="Enter product description"
							/>
						</div>
					</div>
				</div>

				<div className="flex gap-4">
					<button
						type="submit"
						className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
					>
						{isEditMode ? "Update Product" : "Create Product"}
					</button>
					<button
						type="button"
						onClick={() => router.back()}
						className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}
