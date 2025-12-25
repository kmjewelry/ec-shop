"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCart } from "@/lib/cart";

export default function CartIcon() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCount(total);

    // カートが更新されたら反映する（簡易版）
    window.addEventListener("cartUpdated", () => {
      const cart = getCart();
      const total = cart.reduce(
        (sum: number, item: { quantity: number }) => sum + item.quantity,
        0
      );
    });
  }, []);

  return (
    <Link
      href="/cart"
      style={{ position: "relative", fontSize: 24, textDecoration: "none" }}
    >
      🛒
      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: -8,
            right: -10,
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: 12,
          }}
        >
          {count}
        </span>
      )}
    </Link>
  );
}
