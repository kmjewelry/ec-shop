import { createSupabaseClient } from "@/lib/supabase";
import ProductClient from "./ProductClient";

export default async function ProductPage({ params }) {
  const supabase = createSupabaseClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !product) {
    return <div>商品が見つかりません</div>;
  }

  return <ProductClient product={product} />;
}
