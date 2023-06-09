import ProductList from "@/components/Product/ProductList";

import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  const { data } = await supabase.from("products").select();

  return (
    <main>
      <ProductList serverProducts={data} />
    </main>
  );
}
