// src/ShoppingCart.js
import React from "react";

// Nhận vào `cartItems` từ props
function ShoppingCart({ cartItems }) {
  // Dùng hàm reduce() để tính tổng tiền
  // Bắt đầu với tổng là 0, sau đó cộng dồn giá của từng item
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="shopping-cart">
      <h3>Giỏ hàng</h3>
      {/* Hiển thị danh sách sản phẩm trong giỏ */}
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          {item.name} - {item.price.toLocaleString("vi-VN")}đ
        </div>
      ))}
      <hr />
      <h4>Tổng tiền: {total.toLocaleString("vi-VN")}đ</h4>
    </div>
  );
}

export default ShoppingCart;
