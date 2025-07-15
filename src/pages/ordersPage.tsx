// src/App.jsx
import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import SignIn from "./SignInPage";
import { onAuthStateChanged } from "firebase/auth";
import { Order } from "@/assets/product_list";
import { collection, getDocs } from "firebase/firestore";

function OrdersPage() {
  const [user, setUser] = useState(null);

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user && user.email === "team@wearlumine.com") {
        setUser(user);
        const snapshot = await getDocs(collection(db, "orders"));
        const fetchedOrders = snapshot.docs.map((doc) => doc.data() as Order);
        setOrders(fetchedOrders);
        setLoading(false);
      } else {
        setUser(null);
        setOrders([]);
        setLoading(false);
      }
    });
    return () => unsub();
  }, []);

  if (!user || user.email !== "team@wearlumine.com") return <SignIn />;
  if (orders.length === 0) return <div className="p-4">No orders found</div>;

  if (user.email === "team@wearlumine.com") {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Orders</h2>
        <div className="space-y-6">
          {orders.map((order, idx) => (
            <div key={idx} className="border p-4 rounded shadow-sm">
              <div className="mb-2">
                <strong>Customer:</strong> {order.formData.firstName}{" "}
                {order.formData.lastName}
                <br />
                <strong>Email:</strong> {order.formData.email}
                <br />
                <strong>Phone:</strong> {order.formData.phone}
              </div>
              <div className="mb-2">
                <strong>Payment:</strong> {order.paymentMethod} |{" "}
                <strong>Packaging:</strong> {order.packagingPreference}
              </div>
              <div className="mb-2">
                <strong>Discount Applied:</strong>{" "}
                {order.discountValid ? "Yes" : "No"}
                <br />
                <strong>Total:</strong> ${order.total}
                <br />
                <strong>Date:</strong>{" "}
                {order.createdAt?.toDate().toLocaleString()}
                <br />
                <strong>Address:</strong> {order.formData.address}
              </div>
              <div>
                <strong>Items:</strong>
                <ul className="list-disc list-inside mt-1">
                  {order.items.map((item, i) => (
                    <li key={i}>
                      {item.name} – {item.color} × {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default OrdersPage;
