export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: [string];
  size: string;
}

export interface DbProduct {
  created_at: string | null;
  description: string | null;
  folder_name: string | undefined;
  id: number;
  name: string | null;
  price: number | null;
  size: string | null;
}
