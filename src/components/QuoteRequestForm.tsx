import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface Product {
  id: string;
  generic_name: string;
  dosage_form: string;
  category: string;
  moq: string;
  pricing: string;
}

interface QuoteRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProducts: Product[];
  onProductRemove: (productId: string) => void;
}

export default function QuoteRequestForm({ 
  isOpen, 
  onClose, 
  selectedProducts, 
  onProductRemove 
}: QuoteRequestFormProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    country: "",
    portOfImport: "",
    email: "",
    phone: "",
    terms: [] as string[],
    paymentTerms: "",
    additionalRequirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const termsOptions = ["FOB", "CIF", "CNF"];
  const paymentTermsOptions = ["Prepayment", "Credit", "Letter of Credit", "Bank Guarantee"];

  const handleTermsChange = (term: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      terms: checked 
        ? [...prev.terms, term]
        : prev.terms.filter(t => t !== term)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.companyName || !formData.country || !formData.portOfImport || 
        !formData.email || !formData.phone || formData.terms.length === 0 || 
        !formData.paymentTerms || selectedProducts.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields and select at least one product.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would typically send the quote request to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Quote Request Submitted",
        description: "Your quote request has been submitted successfully. Our sales team will contact you within 24 hours.",
      });

      // Reset form and close
      setFormData({
        companyName: "",
        country: "",
        portOfImport: "",
        email: "",
        phone: "",
        terms: [],
        paymentTerms: "",
        additionalRequirements: ""
      });
      onClose();
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request Quote</DialogTitle>
          <DialogDescription>
            Submit your quote request and our sales team will contact you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Selected Products */}
          {selectedProducts.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Selected Products ({selectedProducts.length})</h3>
              <div className="grid grid-cols-1 gap-3 max-h-40 overflow-y-auto">
                {selectedProducts.map((product) => (
                  <Card key={product.id} className="relative">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-sm">{product.generic_name}</CardTitle>
                          <CardDescription className="flex gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {product.dosage_form}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {product.category}
                            </Badge>
                          </CardDescription>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => onProductRemove(product.id)}
                          className="h-6 w-6 p-0"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Company Information */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="companyName">Company/Institution Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  placeholder="Enter company or institution name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                  placeholder="Enter country"
                  required
                />
              </div>

              <div>
                <Label htmlFor="portOfImport">Port of Import *</Label>
                <Input
                  id="portOfImport"
                  value={formData.portOfImport}
                  onChange={(e) => setFormData(prev => ({ ...prev, portOfImport: e.target.value }))}
                  placeholder="Enter port of import"
                  required
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div>
                <Label>Payment Terms *</Label>
                <Select value={formData.paymentTerms} onValueChange={(value) => setFormData(prev => ({ ...prev, paymentTerms: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                  <SelectContent>
                    {paymentTermsOptions.map(option => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div>
            <Label>Terms * (Select at least one)</Label>
            <div className="flex gap-4 mt-2">
              {termsOptions.map(term => (
                <div key={term} className="flex items-center space-x-2">
                  <Checkbox
                    id={term}
                    checked={formData.terms.includes(term)}
                    onCheckedChange={(checked) => handleTermsChange(term, checked as boolean)}
                  />
                  <Label htmlFor={term}>{term}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Requirements */}
          <div>
            <Label htmlFor="additionalRequirements">Additional Requirements (Optional)</Label>
            <Textarea
              id="additionalRequirements"
              value={formData.additionalRequirements}
              onChange={(e) => setFormData(prev => ({ ...prev, additionalRequirements: e.target.value }))}
              placeholder="Enter any additional requirements or specifications"
              rows={3}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Submitting..." : "Submit Quote Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}