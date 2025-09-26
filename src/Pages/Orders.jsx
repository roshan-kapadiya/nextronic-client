import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:4000/orders");
      const data = await response.json();

      // Show newest orders first
      const sortedData = [...data].reverse();

      // Add quantity field (default = 1 if not provided from backend)
      const withQuantity = sortedData.map((order) => ({
        ...order,
        quantity: order.quantity || 1,
      }));

      setOrders(withQuantity);
      calculateTotal(withQuantity);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Calculate total
  const calculateTotal = (ordersList) => {
    const sum = ordersList.reduce((acc, order) => {
      const product = order.pid;
      return acc + (product ? product.price * order.quantity : 0);
    }, 0);
    setTotal(sum);
  };

  // Update quantity
  const handleQuantityChange = (orderId, newQty) => {
    const updatedOrders = orders.map((order) =>
      order._id === orderId ? { ...order, quantity: newQty } : order
    );
    setOrders(updatedOrders);
    calculateTotal(updatedOrders);
  };

  // Delete an order
  const handleDelete = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      const response = await fetch(`http://localhost:4000/Delorders/${orderId}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        fetchOrders(); // refresh after deletion
      } else {
        alert(result.message || "Failed to delete order");
      }
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("An error occurred");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Orders
            </li>
          </ol>
        </nav>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Order Date</th>
              <th>Product Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center">
                  No orders available
                </td>
              </tr>
            )}
            {orders.map((order) => {
              const product = order.pid;
              const subtotal = product?.price * order.quantity; // always recompute
              return (
                <tr key={order._id}>
                  <td>{product?.pname}</td>
                  <td>₹{product?.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={order.quantity}
                      onChange={(e) =>
                        handleQuantityChange(order._id, parseInt(e.target.value) || 1)
                      }
                      style={{ width: "60px" }}
                    />
                  </td>
                  <td>₹{subtotal}</td>
                  <td>{new Date(order.order_date).toLocaleDateString()}</td>
                  <td>
                    {product?.pimg && (
                      <img
                        src={`http://localhost:5000/uploads/${product.pimg}`}
                        alt={product.pname}
                        style={{ width: "100px" }}
                      />
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="text-end mt-3">
          <h4>Total Amount: ₹{total}</h4>
        </div>
      </div>
    </>
  );
};

export default Orders;
