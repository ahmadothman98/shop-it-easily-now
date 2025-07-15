import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const EditProducts = () => {
  const [products, setProducts] = useState([]);
  const [saving, setSaving] = useState(null);

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const loaded = [];
      querySnapshot.forEach((docSnap) => {
        loaded.push({ ...docSnap.data(), docId: docSnap.id });
      });
      setProducts(loaded);
    };
    fetchProducts();
  }, []);

  // Handle field updates
  const handleChange = (id, field, value) => {
    setProducts((prev) =>
      prev.map((prod) =>
        prod.docId === id ? { ...prod, [field]: value } : prod
      )
    );
  };

  // Save product to Firestore
  const handleSave = async (product) => {
    setSaving(product.docId);
    const productRef = doc(db, "products", product.docId);
    const updatedProduct = { ...product };
    delete updatedProduct.docId;

    try {
      await updateDoc(productRef, updatedProduct);
      alert(`Product [${product.id} + ${product.color}] saved.`);
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Save failed.");
    }

    setSaving(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Products</h1>

      {products.map((product) => (
        <div
          key={`${product.id}-${product.color}`}
          className="mb-6 border p-4 rounded-lg shadow bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Name</label>
              <input
                value={product.name}
                onChange={(e) =>
                  handleChange(product.docId, "name", e.target.value)
                }
                className="border p-2 w-full mb-2"
              />

              <label className="block font-semibold">Color</label>
              <input
                value={product.color}
                onChange={(e) =>
                  handleChange(product.docId, "color", e.target.value)
                }
                className="border p-2 w-full mb-2"
              />

              <label className="block font-semibold">Size</label>
              <input
                value={product.size}
                onChange={(e) =>
                  handleChange(product.docId, "size", e.target.value)
                }
                className="border p-2 w-full mb-2"
              />

              <label className="block font-semibold">Price</label>
              <input
                type="number"
                value={product.price}
                onChange={(e) =>
                  handleChange(product.docId, "price", Number(e.target.value))
                }
                className="border p-2 w-full mb-2"
              />
            </div>

            <div>
              <label className="block font-semibold">Stock</label>
              <input
                type="number"
                value={product.available_stock}
                onChange={(e) =>
                  handleChange(
                    product.docId,
                    "available_stock",
                    Number(e.target.value)
                  )
                }
                className="border p-2 w-full mb-2"
              />

              <label className="block font-semibold">Description</label>
              <textarea
                value={product.description || ""}
                onChange={(e) =>
                  handleChange(product.docId, "description", e.target.value)
                }
                className="border p-2 w-full mb-2"
                rows={4}
              />
            </div>
          </div>

          <button
            onClick={() => handleSave(product)}
            className="mt-3 bg-black text-white px-4 py-2 rounded"
            disabled={saving === product.docId}
          >
            {saving === product.docId ? "Saving..." : "Save"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default EditProducts;
