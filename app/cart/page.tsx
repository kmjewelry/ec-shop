"use client";

import { getCart, clearCart } from "@/lib/cart";
import { useEffect, useState } from "react";

/** カート内商品の型 */
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image_url?: string | null;
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

      {/* 空の場合 */}
      {cart.length === 0 && (
        <p style={{ fontSize: 18, color: "#555" }}>カートは空です。</p>
      )}

      {/* 商品一覧 */}
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
              borderRadius: 12,
            }}
          />

          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 20, fontWeight: 500 }}>{item.name}</h2>
            <p style={{ marginTop: 6 }}>
              ¥{item.price} × {item.quantity}
            </p>
            <p style={{ marginTop: 8, fontWeight: "bold" }}>
              小計: ¥{item.price * item.quantity}
            </p>
          </div>
        </div>
      ))}

      {/* 合計 */}
      {cart.length > 0 && (
        <div style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 20 }}>
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
              background: "#e5e5e5",
              borderRadius: 14,
              border: "none",
              marginBottom: 16,
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
              background: "#0071e3",
              color: "#fff",
              borderRadius: 30,
              border: "none",
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
