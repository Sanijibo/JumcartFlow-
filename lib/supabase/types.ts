export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          email: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          full_name?: string | null;
          email?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          email?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      businesses: {
        Row: {
          id: string;
          business_name: string;
          business_email: string | null;
          country: string;
          category: string | null;
          currency: string;
          contact_name: string | null;
          contact_phone: string | null;
          owner_user_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          business_name: string;
          business_email?: string | null;
          country?: string;
          category?: string | null;
          currency?: string;
          contact_name?: string | null;
          contact_phone?: string | null;
          owner_user_id: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          business_name?: string;
          business_email?: string | null;
          country?: string;
          category?: string | null;
          currency?: string;
          contact_name?: string | null;
          contact_phone?: string | null;
          owner_user_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      business_members: {
        Row: {
          id: string;
          business_id: string;
          user_id: string;
          role: "owner" | "admin" | "staff";
          created_at: string;
        };
        Insert: {
          id?: string;
          business_id: string;
          user_id: string;
          role?: "owner" | "admin" | "staff";
          created_at?: string;
        };
        Update: {
          id?: string;
          business_id?: string;
          user_id?: string;
          role?: "owner" | "admin" | "staff";
          created_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          business_id: string;
          order_ref: string;
          customer_name: string;
          customer_email: string | null;
          amount: number;
          currency: string;
          payment_status: string;
          delivery_status: string;
          provider: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          business_id: string;
          order_ref: string;
          customer_name: string;
          customer_email?: string | null;
          amount: number;
          currency: string;
          payment_status?: string;
          delivery_status?: string;
          provider?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          business_id?: string;
          order_ref?: string;
          customer_name?: string;
          customer_email?: string | null;
          amount?: number;
          currency?: string;
          payment_status?: string;
          delivery_status?: string;
          provider?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      payments: {
        Row: {
          id: string;
          business_id: string;
          order_id: string | null;
          provider: string;
          transaction_reference: string;
          amount: number;
          currency: string;
          status: string;
          verification_time: string | null;
          match_status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          business_id: string;
          order_id?: string | null;
          provider: string;
          transaction_reference: string;
          amount: number;
          currency: string;
          status?: string;
          verification_time?: string | null;
          match_status?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          business_id?: string;
          order_id?: string | null;
          provider?: string;
          transaction_reference?: string;
          amount?: number;
          currency?: string;
          status?: string;
          verification_time?: string | null;
          match_status?: string;
          created_at?: string;
        };
      };
      delivery_verifications: {
        Row: {
          id: string;
          business_id: string;
          order_id: string | null;
          delivery_passcode_hash: string;
          verification_status: string;
          created_at: string;
          verified_at: string | null;
        };
        Insert: {
          id?: string;
          business_id: string;
          order_id?: string | null;
          delivery_passcode_hash: string;
          verification_status?: string;
          created_at?: string;
          verified_at?: string | null;
        };
        Update: {
          id?: string;
          business_id?: string;
          order_id?: string | null;
          delivery_passcode_hash?: string;
          verification_status?: string;
          created_at?: string;
          verified_at?: string | null;
        };
      };
      risk_alerts: {
        Row: {
          id: string;
          business_id: string;
          alert_type: string;
          severity: "low" | "medium" | "high" | "critical";
          status: "open" | "investigating" | "resolved";
          description: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          business_id: string;
          alert_type: string;
          severity?: "low" | "medium" | "high" | "critical";
          status?: "open" | "investigating" | "resolved";
          description: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          business_id?: string;
          alert_type?: string;
          severity?: "low" | "medium" | "high" | "critical";
          status?: "open" | "investigating" | "resolved";
          description?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      audit_logs: {
        Row: {
          id: string;
          business_id: string;
          actor_id: string | null;
          action: string;
          entity: string;
          details: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          business_id: string;
          actor_id?: string | null;
          action: string;
          entity: string;
          details?: Json | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          business_id?: string;
          actor_id?: string | null;
          action?: string;
          entity?: string;
          details?: Json | null;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: {
      [_ in string]: never;
    };
    Enums: {
      [_ in string]: never;
    };
  };
};
