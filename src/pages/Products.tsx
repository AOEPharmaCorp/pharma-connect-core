import { useState, useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Filter, Download, Phone, Mail, Eye, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";

interface Product {
  id: string;
  serial_number: number | null;
  name: string;
  dosage_form: string;
  category: string;
  description?: string | null;
  moq: string;
  delivery_timeline: string;
  pricing: string;
  created_at?: string;
  updated_at?: string;
}

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedForm, setSelectedForm] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [dosageForms, setDosageForms] = useState<string[]>([]);
  const [isPopulating, setIsPopulating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('serial_number', { ascending: true });

      if (error) throw error;

      if (!data || data.length === 0) {
        // If no products found, try to populate them
        await populateProducts();
        return;
      }

      setProducts(data);
      
      // Extract unique categories and dosage forms
      const uniqueCategories = Array.from(new Set(data.map(p => p.category))).sort();
      const uniqueForms = Array.from(new Set(data.map(p => p.dosage_form))).sort();
      
      setCategories(uniqueCategories);
      setDosageForms(uniqueForms);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Error",
        description: "Failed to load products. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const populateProducts = async () => {
    try {
      setIsPopulating(true);
      const response = await supabase.functions.invoke('populate-products');
      
      if (response.error) throw response.error;
      
      toast({
        title: "Success",
        description: "Products database has been populated successfully.",
      });
      
      // Fetch products again after populating
      await fetchProducts();
    } catch (error) {
      console.error('Error populating products:', error);
      toast({
        title: "Error",
        description: "Failed to populate products database.",
        variant: "destructive",
      });
    } finally {
      setIsPopulating(false);
    }
  };

  const filteredProducts = useMemo(() => {
    if (!products.length) return [];
    
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.dosage_form.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesForm = selectedForm === "all" || product.dosage_form === selectedForm;
      
      return matchesSearch && matchesCategory && matchesForm;
    });
  }, [products, searchTerm, selectedCategory, selectedForm]);

  // Group products by category and limit to 25 per category for initial display
  const productsByCategory = useMemo(() => {
    const grouped: Record<string, Product[]> = {};
    
    filteredProducts.forEach(product => {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    });
    
    // If no search filters are applied, limit to 25 per category
    if (!searchTerm && selectedCategory === "all" && selectedForm === "all") {
      Object.keys(grouped).forEach(category => {
        grouped[category] = grouped[category].slice(0, 25);
      });
    }
    
    return grouped;
  }, [filteredProducts, searchTerm, selectedCategory, selectedForm]);

  const displayProducts = useMemo(() => {
    if (searchTerm || selectedCategory !== "all" || selectedForm !== "all") {
      // Show all filtered results when searching/filtering
      return filteredProducts;
    } else {
      // Show first 25 from each category when browsing
      return Object.values(productsByCategory).flat();
    }
  }, [filteredProducts, productsByCategory, searchTerm, selectedCategory, selectedForm]);

  if (loading || isPopulating) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">
            {isPopulating ? "Setting up product database..." : "Loading products..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-primary/20 to-primary/10 py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">
              Comprehensive Product Portfolio
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our extensive range of pharmaceutical products across multiple therapeutic categories, 
              manufactured to the highest international quality standards.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold">{products.length}+</h3>
                <p className="text-white/80">Quality Products</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold">{categories.length}+</h3>
                <p className="text-white/80">Therapeutic Categories</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold">{dosageForms.length}+</h3>
                <p className="text-white/80">Dosage Forms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-foreground mb-2">
                Search Products
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="search"
                  type="text"
                  placeholder="Search by product name or strength..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Category
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Dosage Form
              </label>
              <Select value={selectedForm} onValueChange={setSelectedForm}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="All Forms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Forms</SelectItem>
                  {dosageForms.map(form => (
                    <SelectItem key={form} value={form}>{form}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <p className="text-muted-foreground">
              Showing {displayProducts.length} of {products.length} products
              {searchTerm || selectedCategory !== "all" || selectedForm !== "all" 
                ? "" : " (25 per category by default)"
              }
            </p>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download Product Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {!searchTerm && selectedCategory === "all" && selectedForm === "all" ? (
            // Category-based view
            <div className="space-y-12">
              {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
                <div key={category}>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-foreground">{category}</h2>
                    <Badge variant="outline">
                      {categoryProducts.length} {categoryProducts.length === 25 ? "of many" : "products"}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Search/Filter results view
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {displayProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found matching your search criteria.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedForm("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need More Information?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our pharmaceutical experts are ready to assist you with product specifications, 
            regulatory documentation, and partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Phone className="h-5 w-5" />
              Contact Sales Team
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="h-5 w-5" />
              Request Product Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {product.dosage_form}
          </Badge>
        </div>
        {product.serial_number && (
          <CardDescription className="text-primary font-semibold">
            Product #{product.serial_number}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <span className="text-sm text-muted-foreground">Category:</span>
            <Badge variant="outline" className="ml-2">
              {product.category}
            </Badge>
          </div>
          <div className="flex gap-2 pt-2">
            <Button size="sm" className="flex-1">
              Request Quote
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex-1 gap-1">
                  <Eye className="h-3 w-3" />
                  Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{product.name}</DialogTitle>
                  <DialogDescription>
                    Product #{product.serial_number} - {product.category}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">Dosage Form</h4>
                      <p className="text-sm">{product.dosage_form}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">Category</h4>
                      <p className="text-sm">{product.category}</p>
                    </div>
                  </div>
                  
                  {product.description && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">Description</h4>
                      <p className="text-sm">{product.description}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">MOQ</h4>
                      <p className="text-sm">{product.moq}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">Delivery Timeline</h4>
                      <p className="text-sm">{product.delivery_timeline}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">Pricing</h4>
                      <p className="text-sm">{product.pricing}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1">
                      Request Quote
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}