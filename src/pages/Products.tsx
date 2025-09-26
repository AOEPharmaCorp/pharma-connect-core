import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Filter, Download, Phone, Mail, Plus, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useProducts, Product } from "@/hooks/useProducts";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import ProductDetailsModal from "@/components/ProductDetailsModal";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedForm, setSelectedForm] = useState("all");
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 25;
  const {
    products,
    categories,
    dosageForms,
    loading,
    error,
    searchProducts
  } = useProducts();
  const {
    toast
  } = useToast();

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchProducts(searchTerm, selectedCategory, selectedForm);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, selectedCategory, selectedForm]);
  const handleAddToQuote = (product: Product) => {
    const isAlreadySelected = selectedProducts.some(p => p.id === product.id);
    if (isAlreadySelected) {
      toast({
        title: "Product Already Selected",
        description: "This product is already in your quote request.",
        variant: "destructive"
      });
      return;
    }
    setSelectedProducts(prev => [...prev, product]);
    toast({
      title: "Product Added",
      description: `${product.generic_name} has been added to your quote request.`
    });
  };
  const handleRemoveFromQuote = (productId: string) => {
    setSelectedProducts(prev => prev.filter(p => p.id !== productId));
  };
  const handleOpenQuoteForm = () => {
    if (selectedProducts.length === 0) {
      toast({
        title: "No Products Selected",
        description: "Please select at least one product to request a quote.",
        variant: "destructive"
      });
      return;
    }
    setIsQuoteFormOpen(true);
  };
  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailsModalOpen(true);
  };

  // Calculate pagination
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedForm]);
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 bg-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-bold mb-4 text-5xl text-stone-50">
              Comprehensive Product Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our extensive range of pharmaceutical products across multiple therapeutic categories, 
              manufactured to the highest international quality standards.
            </p>
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
                <Input id="search" type="text" placeholder="Search by product name or strength..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10" />
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
                  {categories.map(category => <SelectItem key={category} value={category}>{category}</SelectItem>)}
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
                  {dosageForms.map(form => <SelectItem key={form} value={form}>{form}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <p className="text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(endIndex, totalProducts)} of {totalProducts} products
              {selectedProducts.length > 0 && <span className="ml-4 text-primary font-medium">
                  {selectedProducts.length} selected for quote
                </span>}
            </p>
            <div className="flex gap-2">
              {selectedProducts.length > 0 && <Button onClick={handleOpenQuoteForm} className="gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Request Quote ({selectedProducts.length})
                </Button>}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({
            length: 9
          }).map((_, index) => <Card key={index}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-8 w-full" />
                  </CardContent>
                </Card>)}
            </div> : error ? <div className="text-center py-12">
              <p className="text-destructive text-lg mb-4">
                Error loading products: {error}
              </p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Retry
              </Button>
            </div> : <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map(product => {
              const isSelected = selectedProducts.some(p => p.id === product.id);
              return <Card key={product.id} className={`hover:shadow-lg transition-shadow ${isSelected ? 'ring-2 ring-primary' : ''}`}>
                      <CardHeader>
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <CardTitle className="text-lg leading-tight">{product.generic_name}</CardTitle>
                            {product.serial_number && (
                              <p className="text-sm text-muted-foreground font-mono">
                                Code: {product.serial_number}
                              </p>
                            )}
                          </div>
                          <Badge variant="secondary" className="shrink-0">
                            {product.dosage_form}
                          </Badge>
                        </div>
                        <CardDescription className="text-primary font-semibold">
                          {product.category}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="space-y-2">
                            <div>
                              <span className="text-sm text-muted-foreground">MOQ:</span>
                              <span className="text-sm ml-2">{product.moq}</span>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Pricing:</span>
                              <span className="text-sm ml-2">{product.pricing}</span>
                            </div>
                          </div>
                          <div className="flex gap-2 pt-2">
                            <Button size="sm" className="flex-1 gap-1" onClick={() => handleAddToQuote(product)} disabled={isSelected} variant={isSelected ? "secondary" : "default"}>
                              {isSelected ? "Added" : <><Plus className="h-3 w-3" /> Add to Quote</>}
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1" onClick={() => handleViewDetails(product)}>
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>;
            })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(pageNum)}
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                    {totalPages > 5 && (
                      <>
                        <span className="text-muted-foreground">...</span>
                        <Button
                          variant={currentPage === totalPages ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(totalPages)}
                        >
                          {totalPages}
                        </Button>
                      </>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}

              {products.length === 0 && !loading && <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No products found matching your search criteria.
                  </p>
                  <Button variant="outline" className="mt-4" onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
              setSelectedForm("all");
            }}>
                    Clear Filters
                  </Button>
                </div>}
            </>}
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
            <Button size="lg" className="gap-2" asChild>
              <Link to="/contact">
                <Phone className="h-5 w-5" />
                Contact Sales Team
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link to="/contact">
                <Mail className="h-5 w-5" />
                Request Product Catalog
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <QuoteRequestForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} selectedProducts={selectedProducts} onProductRemove={handleRemoveFromQuote} />

      {/* Product Details Modal */}
      <ProductDetailsModal product={selectedProduct} isOpen={isDetailsModalOpen} onClose={() => setIsDetailsModalOpen(false)} />
    </div>;
}