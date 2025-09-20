import React, { useState, useMemo, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Download, Search, Filter, Package, ShoppingCart, Eye, AlertCircle, Phone, Mail } from "lucide-react";

interface Product {
  id: string;
  serial_number?: number;
  name: string;
  dosage_form: string;
  category: string;
  moq: string;
  delivery_timeline: string;
  pricing: string;
  created_at: string;
  updated_at: string;
}

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedForm, setSelectedForm] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const { toast } = useToast();

  // Initialize products from database
  useEffect(() => {
    const initializeProducts = async () => {
      try {
        setInitializing(true);
        
        // Check if we need to populate the database
        const { data: existingProducts, error: checkError } = await supabase
          .from('products')
          .select('id')
          .limit(5);

        if (checkError) {
          throw checkError;
        }

        // If no products exist, call the populate function
        if (!existingProducts || existingProducts.length === 0) {
          try {
            const response = await fetch(`https://mtopxuadayufyaxvglqx.supabase.co/functions/v1/populate-products`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10b3B4dWFkYXl1ZnlheHZnbHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyNzIxODUsImV4cCI6MjA3Mzg0ODE4NX0.DcO_nIyjU36H_GZ3fkmOB1nKxybx2YD2KoIxrraQHEE`,
              },
            });

            if (response.ok) {
              const result = await response.json();
              console.log('Database populated:', result);
              toast({
                title: "Products Loaded",
                description: `${result.totalInserted || 'Products'} have been loaded into the catalog.`,
              });
            }
          } catch (populateError) {
            console.log('Populate function not available, using fallback data...');
          }
        }

        // Fetch all products from database
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('category', { ascending: true })
          .order('name', { ascending: true });

        if (error) {
          throw error;
        }

        setProducts(data || []);
      } catch (error) {
        console.error('Error loading products:', error);
        toast({
          title: "Error loading products",
          description: "Please try refreshing the page.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
        setInitializing(false);
      }
    };

    initializeProducts();
  }, [toast]);

  const categories = useMemo(() => {
    return [...new Set(products.map(product => product.category))].sort();
  }, [products]);

  const dosageForms = useMemo(() => {
    return [...new Set(products.map(product => product.dosage_form))].sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.dosage_form.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesForm = selectedForm === "all" || product.dosage_form === selectedForm;
      
      return matchesSearch && matchesCategory && matchesForm;
    });

    return filtered;
  }, [products, searchTerm, selectedCategory, selectedForm]);

  // Group products by category and show 25 per category initially
  const categorizedProducts = useMemo(() => {
    const grouped = filteredProducts.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {} as Record<string, Product[]>);

    // If searching or filtering, show all results
    if (searchTerm || (selectedCategory && selectedCategory !== "all") || (selectedForm && selectedForm !== "all")) {
      return Object.entries(grouped).map(([category, categoryProducts]) => ({
        category,
        products: categoryProducts,
        showingCount: categoryProducts.length,
        totalCount: categoryProducts.length
      }));
    }

    // Otherwise, show 25 per category
    return Object.entries(grouped).map(([category, categoryProducts]) => ({
      category,
      products: showAll ? categoryProducts : categoryProducts.slice(0, 25),
      showingCount: showAll ? categoryProducts.length : Math.min(25, categoryProducts.length),
      totalCount: categoryProducts.length
    }));
  }, [filteredProducts, searchTerm, selectedCategory, selectedForm, showAll]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedForm("all");
  };

  const totalDisplayed = categorizedProducts.reduce((sum, cat) => sum + cat.showingCount, 0);
  const totalAvailable = products.length;

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Package className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Product Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {initializing ? "Loading our comprehensive pharmaceutical catalog..." : "Discover our comprehensive range of high-quality pharmaceutical products"}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Package className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Product Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Explore our extensive range of pharmaceutical products across multiple therapeutic categories, 
              manufactured to the highest international quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products by name, category, or dosage form..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="md:w-64">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedForm} onValueChange={setSelectedForm}>
              <SelectTrigger className="md:w-64">
                <Package className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by dosage form" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Forms</SelectItem>
                {dosageForms.map(form => (
                  <SelectItem key={form} value={form}>
                    {form}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-muted-foreground">
                Showing {totalDisplayed} of {totalAvailable} products
              </p>
              {!showAll && totalDisplayed < totalAvailable && !searchTerm && selectedCategory === "all" && selectedForm === "all" && (
                <p className="text-sm text-muted-foreground">
                  Displaying 25 products per category. <Button variant="link" className="p-0 h-auto text-primary" onClick={() => setShowAll(true)}>Show all products</Button>
                </p>
              )}
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Product Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid by Category */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {categorizedProducts.length > 0 ? (
            <div className="space-y-16">
              {categorizedProducts.map(({ category, products: categoryProducts, showingCount, totalCount }) => (
                <div key={category}>
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-primary">{category}</h2>
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      {showingCount} of {totalCount} products
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryProducts.map(product => (
                      <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardHeader>
                          <div className="flex justify-between items-start gap-2">
                            <CardTitle className="text-lg leading-tight flex-1">{product.name}</CardTitle>
                            <Badge variant="secondary" className="shrink-0">
                              {product.dosage_form}
                            </Badge>
                          </div>
                          <CardDescription>
                            Serial #: {product.serial_number || 'N/A'}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="p-3 bg-muted/50 rounded-lg space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="font-medium text-muted-foreground">MOQ:</span>
                                <span className="text-right flex-1 ml-2">{product.moq}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium text-muted-foreground">Delivery:</span>
                                <span className="text-right flex-1 ml-2">{product.delivery_timeline}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium text-muted-foreground">Pricing:</span>
                                <span className="text-right flex-1 ml-2">{product.pricing}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button size="sm" variant="default" className="flex-1">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Request Quote
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            Details
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  
                  {!showAll && showingCount < totalCount && !searchTerm && selectedCategory === "all" && selectedForm === "all" && (
                    <div className="text-center mt-8">
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={() => setShowAll(true)}
                        className="flex items-center gap-2"
                      >
                        <Package className="h-4 w-4" />
                        Show All {totalCount} {category} Products
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <AlertCircle className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
              <h3 className="text-2xl font-semibold mb-4">No products found</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                No products match your current search criteria. Try adjusting your filters or search terms.
              </p>
              <Button onClick={clearFilters} variant="outline" size="lg">
                Clear All Filters
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
};

export default Products;
