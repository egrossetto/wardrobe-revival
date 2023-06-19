import ProductList from "@/components/Product/ProductList";

import { supabase } from "@/lib/supabaseClient";
import Loading from "./loading";
import { Suspense } from "react";

export default async function Home() {
  const { data } = await supabase.from("products").select();

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <ProductList serverProducts={data} />
      </Suspense>
    </main>
  );
}
