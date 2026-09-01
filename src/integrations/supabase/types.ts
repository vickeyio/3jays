export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      accommodations: {
        Row: {
          amenities: string[]
          category: string
          created_at: string
          description: string | null
          id: string
          image: string | null
          location: string | null
          name: string
          updated_at: string
        }
        Insert: {
          amenities?: string[]
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          location?: string | null
          name: string
          updated_at?: string
        }
        Update: {
          amenities?: string[]
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          location?: string | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      inquiries: {
        Row: {
          accommodation_preference: string | null
          admin_read: boolean
          adults: number | null
          budget: string | null
          children: number | null
          country: string | null
          created_at: string
          customer_name: string
          destination: string | null
          duration: string | null
          email: string
          flexible_dates: boolean | null
          id: string
          infants: number | null
          interests: string[]
          message: string | null
          phone: string | null
          safari_package: string | null
          source: string
          status: string
          transport: string | null
          travel_date: string | null
          travel_style: string | null
          travel_type: string | null
          updated_at: string
        }
        Insert: {
          accommodation_preference?: string | null
          admin_read?: boolean
          adults?: number | null
          budget?: string | null
          children?: number | null
          country?: string | null
          created_at?: string
          customer_name: string
          destination?: string | null
          duration?: string | null
          email: string
          flexible_dates?: boolean | null
          id?: string
          infants?: number | null
          interests?: string[]
          message?: string | null
          phone?: string | null
          safari_package?: string | null
          source?: string
          status?: string
          transport?: string | null
          travel_date?: string | null
          travel_style?: string | null
          travel_type?: string | null
          updated_at?: string
        }
        Update: {
          accommodation_preference?: string | null
          admin_read?: boolean
          adults?: number | null
          budget?: string | null
          children?: number | null
          country?: string | null
          created_at?: string
          customer_name?: string
          destination?: string | null
          duration?: string | null
          email?: string
          flexible_dates?: boolean | null
          id?: string
          infants?: number | null
          interests?: string[]
          message?: string | null
          phone?: string | null
          safari_package?: string | null
          source?: string
          status?: string
          transport?: string | null
          travel_date?: string | null
          travel_style?: string | null
          travel_type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      national_parks: {
        Row: {
          activities: string[]
          best_time: string | null
          country: string
          created_at: string
          id: string
          image: string | null
          location: string | null
          name: string
          overview: string | null
          published: boolean
          slug: string
          updated_at: string
          wildlife: string[]
        }
        Insert: {
          activities?: string[]
          best_time?: string | null
          country: string
          created_at?: string
          id?: string
          image?: string | null
          location?: string | null
          name: string
          overview?: string | null
          published?: boolean
          slug: string
          updated_at?: string
          wildlife?: string[]
        }
        Update: {
          activities?: string[]
          best_time?: string | null
          country?: string
          created_at?: string
          id?: string
          image?: string | null
          location?: string | null
          name?: string
          overview?: string | null
          published?: boolean
          slug?: string
          updated_at?: string
          wildlife?: string[]
        }
        Relationships: []
      }
      package_itineraries: {
        Row: {
          accommodation: string | null
          activities: string[]
          created_at: string
          day_number: number
          description: string | null
          id: string
          location: string | null
          meals: string[]
          package_id: string
          title: string
          updated_at: string
        }
        Insert: {
          accommodation?: string | null
          activities?: string[]
          created_at?: string
          day_number: number
          description?: string | null
          id?: string
          location?: string | null
          meals?: string[]
          package_id: string
          title: string
          updated_at?: string
        }
        Update: {
          accommodation?: string | null
          activities?: string[]
          created_at?: string
          day_number?: number
          description?: string | null
          id?: string
          location?: string | null
          meals?: string[]
          package_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "package_itineraries_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "safari_packages"
            referencedColumns: ["id"]
          },
        ]
      }
      safari_packages: {
        Row: {
          accommodation_level: string
          adult_price: number | null
          budget_price: number | null
          child_price: number | null
          country: string
          created_at: string
          currency: string
          destination: string
          duration_days: number
          duration_nights: number
          exclusions: string[]
          featured: boolean
          full_description: string | null
          gallery_images: string[]
          group_price: number | null
          id: string
          inclusions: string[]
          interests: string[]
          luxury_price: number | null
          main_image: string | null
          midrange_price: number | null
          published: boolean
          safari_type: string
          short_description: string | null
          single_supplement: number | null
          slug: string
          starting_price: number | null
          title: string
          travel_style: string
          updated_at: string
        }
        Insert: {
          accommodation_level?: string
          adult_price?: number | null
          budget_price?: number | null
          child_price?: number | null
          country: string
          created_at?: string
          currency?: string
          destination: string
          duration_days?: number
          duration_nights?: number
          exclusions?: string[]
          featured?: boolean
          full_description?: string | null
          gallery_images?: string[]
          group_price?: number | null
          id?: string
          inclusions?: string[]
          interests?: string[]
          luxury_price?: number | null
          main_image?: string | null
          midrange_price?: number | null
          published?: boolean
          safari_type?: string
          short_description?: string | null
          single_supplement?: number | null
          slug: string
          starting_price?: number | null
          title: string
          travel_style?: string
          updated_at?: string
        }
        Update: {
          accommodation_level?: string
          adult_price?: number | null
          budget_price?: number | null
          child_price?: number | null
          country?: string
          created_at?: string
          currency?: string
          destination?: string
          duration_days?: number
          duration_nights?: number
          exclusions?: string[]
          featured?: boolean
          full_description?: string | null
          gallery_images?: string[]
          group_price?: number | null
          id?: string
          inclusions?: string[]
          interests?: string[]
          luxury_price?: number | null
          main_image?: string | null
          midrange_price?: number | null
          published?: boolean
          safari_type?: string
          short_description?: string | null
          single_supplement?: number | null
          slug?: string
          starting_price?: number | null
          title?: string
          travel_style?: string
          updated_at?: string
        }
        Relationships: []
      }
      site_content: {
        Row: {
          data: Json
          key: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          data?: Json
          key: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          data?: Json
          key?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      team_members: {
        Row: {
          biography: string | null
          created_at: string
          id: string
          languages: string[]
          name: string
          photo: string | null
          position: string
          sort_order: number
          updated_at: string
          years_experience: number | null
        }
        Insert: {
          biography?: string | null
          created_at?: string
          id?: string
          languages?: string[]
          name: string
          photo?: string | null
          position: string
          sort_order?: number
          updated_at?: string
          years_experience?: number | null
        }
        Update: {
          biography?: string | null
          created_at?: string
          id?: string
          languages?: string[]
          name?: string
          photo?: string | null
          position?: string
          sort_order?: number
          updated_at?: string
          years_experience?: number | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          approved: boolean
          country: string | null
          created_at: string
          customer_name: string
          id: string
          photo: string | null
          rating: number
          review: string
          safari_booked: string | null
          updated_at: string
        }
        Insert: {
          approved?: boolean
          country?: string | null
          created_at?: string
          customer_name: string
          id?: string
          photo?: string | null
          rating?: number
          review: string
          safari_booked?: string | null
          updated_at?: string
        }
        Update: {
          approved?: boolean
          country?: string | null
          created_at?: string
          customer_name?: string
          id?: string
          photo?: string | null
          rating?: number
          review?: string
          safari_booked?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "editor" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor", "user"],
    },
  },
} as const
