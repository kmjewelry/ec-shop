"use client";

import { useEffect, useState } from "react";
import { getCart, clearCart } from "@/lib/cart";

/** カート内商品の型定義 */
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image_url?: string;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = getCart() as CartItem[];
    setCart(storedCart);
  }, []);

  const total = cart.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: 800,
        margin: "0 auto",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
      }}
    >
      <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 30 }}>
        カート
      </h1>

      {cart.length === 0 && (
        <p style={{ fontSize: 18, color: "#555" }}>
          カートは空です。
        </p>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: 20,
            marginBottom: 30,
            paddingBottom: 20,
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <img
            src={item.image_url || "/noimage.png"}
            alt={item.name}
            style={{
              width: 120,
              height: 120,
              objectFit: "cover",
              borderRadius: 10,
            }}
          />

          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 20, fontWeight: 500 }}>
              {item.name}
            </h2>
            <p style={{ marginTop: 6 }}>
              ¥{item.price} × {item.quantity}
            </p>
            <p style={{ marginTop: 8, fontWeight: "bold" }}>
              小計: ¥{item.price * item.quantity}
            </p>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600 }}>
            合計: ¥{total}
          </h2>

          <button
            onClick={() => {
              clearCart();
              setCart([]);
            }}
            style={{
              width: "100%",
              padding: "14px 0",
              marginTop: 20,
              borderRadius: 12,
              border: "none",
              background: "#ccc",
              cursor: "pointer",
            }}
          >
            カートを空にする
          </button>

          <button
            onClick={() => {
              clearCart();
              window.location.href = "/order/complete";
            }}
            style={{
              width: "100%",
              padding: "16px 0",
              marginTop: 20,
              borderRadius: 30,
              border: "none",
              background: "#0071e3",
              color: "white",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            注文を確定する
          </button>
        </div>
      )}
    </div>
  );
}
