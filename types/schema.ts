export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          created_at: string | null
          description: string | null
          folder_name: string | null
          id: number
          name: string | null
          price: number | null
          size: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          folder_name?: string | null
          id?: number
          name?: string | null
          price?: number | null
          size?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          folder_name?: string | null
          id?: number
          name?: string | null
          price?: number | null
          size?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
