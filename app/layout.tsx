import "./globals.css";
import Link from "next/link";
import CartIcon from "./CartIcon";

export const metadata = {
  title: "My EC Site",
  description: "Next.js EC site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {/* ヘッダー */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "1px solid #ddd",
            marginBottom: 20,
          }}
        >
          <Link href="/" style={{ fontSize: 24, fontWeight: "bold" }}>
            MyShop
          </Link>

          {/* カートアイコン */}
          <CartIcon />
        </header>

        {/* ページ内容 */}
        {children}
      </body>
    </html>
  );
}
