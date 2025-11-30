export default function OrderCompletePage() {
  return (
    <div
      style={{
        padding: "80px 20px",
        textAlign: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: 600,
          marginBottom: "20px",
        }}
      >
        ご注文ありがとうございました
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#555",
          marginBottom: "40px",
        }}
      >
        ご注文を正常に受け付けました。
      </p>

      <a
        href="/"
        style={{
          display: "inline-block",
          padding: "14px 32px",
          background: "#0071e3",
          color: "white",
          textDecoration: "none",
          borderRadius: 9999,
          fontSize: "18px",
        }}
      >
        トップページへ戻る
      </a>
    </div>
  );
}
