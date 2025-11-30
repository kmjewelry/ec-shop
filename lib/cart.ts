// カートを取得
export function getCart() {
  if (typeof window === 'undefined') return [];
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// カートに追加
export function addToCart(product) {
  const cart = getCart();

  // 同じ商品があれば数量＋1
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  // カート更新イベントを発火
  window.dispatchEvent(new Event("cartUpdated"));
}

// カートを空にする
export function clearCart() {
  localStorage.removeItem('cart');
}

// 数量を1増やす
export function increaseQuantity(productId) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (item) item.quantity += 1;
  localStorage.setItem('cart', JSON.stringify(cart));
}

// 数量を1減らす（0以下にはしない）
export function decreaseQuantity(productId) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (item) {
    item.quantity = Math.max(1, item.quantity - 1);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}