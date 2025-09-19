-- Create products table to store comprehensive product catalog
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  serial_number INTEGER,
  name TEXT NOT NULL,
  dosage_form TEXT NOT NULL,
  category TEXT NOT NULL,
  moq TEXT DEFAULT 'As per Single Batch Size',
  delivery_timeline TEXT DEFAULT '45 Days from the date of 50% Payment',
  pricing TEXT DEFAULT 'As per FOB / CIF / CNF',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (products are publicly viewable)
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (true);

-- Create indexes for better search performance
CREATE INDEX idx_products_name ON public.products USING gin(to_tsvector('english', name));
CREATE INDEX idx_products_category ON public.products (category);
CREATE INDEX idx_products_dosage_form ON public.products (dosage_form);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();