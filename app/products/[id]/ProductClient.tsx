"use client";

import { addToCart } from "@/lib/cart";

export default function ProductPage({ product }) {
  return (
    <div
      style={{
        padding: "60px 20px",
        maxWidth: 900,
        margin: "0 auto",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
        color: "#111",
      }}
    >
      {/* 商品名 */}
      <h1
        style={{
          fontSize: "36px",
          fontWeight: 600,
          textAlign: "center",
          letterSpacing: "-0.5px",
          marginBottom: "40px",
        }}
      >
        {product.name}
      </h1>

      {/* 商品画像（とにかく大きく中央ドン） */}
      <div style={{ textAlign: "center" }}>
        <img
          src={product.image_url || "/noimage.png"}
          alt={product.name}
          style={{
            width: "100%",
            maxWidth: 650,
            borderRadius: 18,
            objectFit: "cover",
          }}
        />
      </div>

      {/* 価格 */}
      <p
        style={{
          marginTop: "40px",
          textAlign: "center",
          fontSize: "34px",
          fontWeight: 600,
          letterSpacing: "-0.5px",
        }}
      >
        ¥{product.price.toLocaleString()}
      </p>

      {/* 説明（細く・薄く・Appleっぽい） */}
      <p
        style={{
          marginTop: "35px",
          fontSize: "18px",
          lineHeight: 1.8,
          textAlign: "center",
          color: "#555",
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {product.description}
      </p>

      {/* カートに入れるボタン（シンプル・フラット） */}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image_url: product.image_url,
              quantity: 1,
            });
            alert("カートに追加しました！");
          }}
          style={{
            marginTop: "50px",
            padding: "16px 40px",
            fontSize: "18px",
            borderRadius: 9999,
            background: "#0071e3",
            color: "white",
            border: "none",
            letterSpacing: "-0.3px",
            transition: ".2s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#005bbf")}
          onMouseOut={(e) => (e.target.style.background = "#0071e3")}
        >
          カートに入れる
        </button>
      </div>
    </div>
  );
}
