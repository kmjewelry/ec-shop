import Link from 'next/link';
import { createSupabaseClient } from '@/lib/supabase';

export default async function ProductsPage() {
  const supabase = createSupabaseClient();

  const { data: products, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    return <div>エラーが発生しました</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>
        商品一覧
      </h1>

      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {products?.map((item) => (
          <Link
            key={item.id}
            href={`/products/${item.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                border: '1px solid #ddd',
                padding: '16px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              <img
                src={item.image_url || '/noimage.png'}
                alt={item.name}
                style={{ width: '100%', height: 200, objectFit: 'cover' }}
              />
              <h2 style={{ fontSize: '18px', marginTop: '12px' }}>{item.name}</h2>
              <p>{item.description}</p>
              <p style={{ fontWeight: 'bold', marginTop: '8px' }}>
                ¥{item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
