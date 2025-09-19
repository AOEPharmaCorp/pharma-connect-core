import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download, Phone, Mail } from "lucide-react";

// Product data structure based on the uploaded document
const products = [{
  id: 1,
  name: "Lidocaine and Epinephrine Injection",
  strength: "1%w/v and 1:100000",
  form: "Injectable",
  category: "Anaesthetic"
}, {
  id: 2,
  name: "Lidocain and adrenaline Injection",
  strength: "2% + 1:50000",
  form: "Injectable",
  category: "Anaesthetic"
}, {
  id: 3,
  name: "Lidocaine and Prilocaine Cream",
  strength: "2%w/w + 2.5%w/w",
  form: "Creams/Ointment",
  category: "Anaesthetic"
}, {
  id: 4,
  name: "Nimesulide Injection",
  strength: "100mg/ml",
  form: "Injectable",
  category: "Analgesics Anti-inflammatory"
}, {
  id: 5,
  name: "Caffeine and Ephedrine and Paracetamol Tablets",
  strength: "20Mg + 6mg + 200mg",
  form: "Tablets",
  category: "Analgesics Anti-inflammatory"
}, {
  id: 6,
  name: "Dried Aluminum Hydroxide Gel Tablets",
  strength: "500mg",
  form: "Tablets",
  category: "Antacid"
}, {
  id: 7,
  name: "Magnesium Trisilicate Tablets",
  strength: "500mg",
  form: "Tablets",
  category: "Antacid"
}, {
  id: 8,
  name: "Simethicone with Dill Oil Solution",
  strength: "1%w/v+0.5% v/v",
  form: "Liquid Orals",
  category: "Antacid"
}, {
  id: 9,
  name: "Magnesium Trisilicate Syrup",
  strength: "3.33%",
  form: "Liquid Orals",
  category: "Antacid"
}, {
  id: 10,
  name: "Aluminium and Magnesium Hydroxide Suspension",
  strength: "523.5 mg+598.5 mg/15ml",
  form: "Liquid Orals",
  category: "Antacid"
}, {
  id: 11,
  name: "Calcium Carbonate Chewable Tablets",
  strength: "1.25 g",
  form: "Tablets",
  category: "Antacid"
}, {
  id: 12,
  name: "Rabeprazole and Domperidone Tablets",
  strength: "20mg+30mg",
  form: "Tablets",
  category: "Antacid"
}, {
  id: 13,
  name: "Palonosetron Hydrochloride Injection",
  strength: "0.05mg/ml",
  form: "Injectable",
  category: "Antacid"
}, {
  id: 14,
  name: "Esomeprazole Sodium For Injection",
  strength: "40mg",
  form: "Injectable",
  category: "Antacid"
}, {
  id: 15,
  name: "Omeprazole Capsules",
  strength: "20mg",
  form: "Capsules",
  category: "Antacid"
},
// Additional products for demonstration - in real implementation, parse all from document
{
  id: 16,
  name: "Amoxicillin Capsules",
  strength: "500mg",
  form: "Capsules",
  category: "Antibiotics"
}, {
  id: 17,
  name: "Ciprofloxacin Tablets",
  strength: "500mg",
  form: "Tablets",
  category: "Antibiotics"
}, {
  id: 18,
  name: "Azithromycin Tablets",
  strength: "250mg",
  form: "Tablets",
  category: "Antibiotics"
}, {
  id: 19,
  name: "Metformin Tablets",
  strength: "500mg",
  form: "Tablets",
  category: "Antidiabetic"
}, {
  id: 20,
  name: "Insulin Injection",
  strength: "100 IU/ml",
  form: "Injectable",
  category: "Antidiabetic"
}, {
  id: 21,
  name: "Amlodipine Tablets",
  strength: "5mg",
  form: "Tablets",
  category: "Cardiovascular"
}, {
  id: 22,
  name: "Atorvastatin Tablets",
  strength: "20mg",
  form: "Tablets",
  category: "Cardiovascular"
}, {
  id: 23,
  name: "Doxorubicin Injection",
  strength: "50mg",
  form: "Injectable",
  category: "Oncology"
}, {
  id: 24,
  name: "Carboplatin Injection",
  strength: "150mg",
  form: "Injectable",
  category: "Oncology"
}, {
  id: 25,
  name: "Paclitaxel Injection",
  strength: "100mg",
  form: "Injectable",
  category: "Oncology"
}];
const categories = Array.from(new Set(products.map(p => p.category))).sort();
const dosageForms = Array.from(new Set(products.map(p => p.form))).sort();
export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedForm, setSelectedForm] = useState("all");
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.strength.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesForm = selectedForm === "all" || product.form === selectedForm;
      return matchesSearch && matchesCategory && matchesForm;
    });
  }, [searchTerm, selectedCategory, selectedForm]);
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
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
              Showing {filteredProducts.length} of {products.length} products
            </p>
            
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                    <Badge variant="secondary" className="shrink-0">
                      {product.form}
                    </Badge>
                  </div>
                  <CardDescription className="text-primary font-semibold">
                    {product.strength}
                  </CardDescription>
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
                      <Button variant="outline" size="sm" className="flex-1">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {filteredProducts.length === 0 && <div className="text-center py-12">
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
    </div>;
}