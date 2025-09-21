import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Product {
  id: string;
  serial_number: number | null;
  generic_name: string;
  dosage_form: string;
  category: string;
  moq: string;
  pricing: string;
  created_at: string;
  updated_at: string;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [dosageForms, setDosageForms] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await (supabase as any)
        .from('products')
        .select('*')
        .order('serial_number', { ascending: true });

      if (fetchError) {
        throw fetchError;
      }

      const products = (data || []) as Product[];
      setProducts(products);

      // Extract unique categories and dosage forms
      const uniqueCategories = Array.from(new Set(products.map(p => p.category))).sort();
      const uniqueDosageForms = Array.from(new Set(products.map(p => p.dosage_form))).sort();
      
      setCategories(uniqueCategories);
      setDosageForms(uniqueDosageForms);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const searchProducts = async (searchTerm: string, category: string, dosageForm: string) => {
    try {
      setLoading(true);
      setError(null);

      let query = (supabase as any)
        .from('products')
        .select('*')
        .order('serial_number', { ascending: true });

      // Apply filters
      if (searchTerm) {
        query = query.or(`generic_name.ilike.%${searchTerm}%,category.ilike.%${searchTerm}%,dosage_form.ilike.%${searchTerm}%`);
      }

      if (category && category !== 'all') {
        query = query.eq('category', category);
      }

      if (dosageForm && dosageForm !== 'all') {
        query = query.eq('dosage_form', dosageForm);
      }

      const { data, error: searchError } = await query;

      if (searchError) {
        throw searchError;
      }

      setProducts((data || []) as Product[]);
    } catch (err) {
      console.error('Error searching products:', err);
      setError(err instanceof Error ? err.message : 'Failed to search products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    categories,
    dosageForms,
    loading,
    error,
    searchProducts,
    refetch: fetchProducts
  };
};