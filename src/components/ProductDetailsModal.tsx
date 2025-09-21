import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Package, Shield, Calendar, Thermometer } from "lucide-react";
import { Product } from "@/hooks/useProducts";

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

interface ParsedIngredient {
  name: string;
  strength: string;
}

const parseIngredients = (productName: string): ParsedIngredient[] => {
  // Split by "+" and clean up each segment
  const segments = productName.split('+').map(segment => segment.trim());
  
  const ingredients: ParsedIngredient[] = [];
  
  segments.forEach(segment => {
    // Extract ingredient name and strength using regex
    // Pattern: [Name] [Dosage Form] [Strength with unit]
    const match = segment.match(/^(.+?)\s+(tablet|capsule|injection|syrup|cream|ointment|gel|drops|powder|suspension|solution)s?\s+(\d+(?:\.\d+)?(?:mg|gm|g|ml|mcg|iu|%)+)$/i);
    
    if (match) {
      const [, name, , strength] = match;
      ingredients.push({
        name: name.trim(),
        strength: strength
      });
    } else {
      // Fallback: try to extract just the first word as ingredient and last word as strength
      const words = segment.split(/\s+/);
      if (words.length >= 2) {
        const lastWord = words[words.length - 1];
        const strengthMatch = lastWord.match(/\d+(?:\.\d+)?(?:mg|gm|g|ml|mcg|iu|%)+/i);
        
        if (strengthMatch) {
          const name = words.slice(0, -2).join(' ') || words[0];
          ingredients.push({
            name: name,
            strength: strengthMatch[0]
          });
        }
      }
    }
  });
  
  return ingredients;
};

export default function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  if (!product) return null;

  const ingredients = parseIngredients(product.generic_name);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            {product.generic_name}
          </DialogTitle>
          <DialogDescription className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">{product.dosage_form}</Badge>
            <Badge variant="outline">{product.category}</Badge>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Technical Specifications */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Package className="h-5 w-5" />
              Technical Specifications
            </h3>
            
            <div className="space-y-4">
              {/* Active Ingredients */}
              <div>
                <h4 className="font-medium text-foreground mb-2">Active Ingredients:</h4>
                <ul className="space-y-1">
                  {ingredients.length > 0 ? (
                    ingredients.map((ingredient, index) => (
                      <li key={index} className="text-muted-foreground ml-4">
                        • {ingredient.name} {ingredient.strength}
                      </li>
                    ))
                  ) : (
                    <li className="text-muted-foreground ml-4">
                      • {product.generic_name}
                    </li>
                  )}
                </ul>
              </div>

              <Separator />

              {/* Usage */}
              <div>
                <h4 className="font-medium text-foreground mb-2">Usage:</h4>
                <p className="text-muted-foreground">
                  {ingredients.length > 1 
                    ? "Broad-spectrum antibiotic, antifungal, and antiparasitic treatment."
                    : "Therapeutic treatment as prescribed by healthcare professional."
                  }
                </p>
              </div>

              {/* Storage Instructions */}
              <div className="flex items-start gap-2">
                <Thermometer className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Storage Instructions:</h4>
                  <p className="text-muted-foreground">Store in a cool, dry place.</p>
                </div>
              </div>

              {/* Shelf Life */}
              <div className="flex items-start gap-2">
                <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Shelf Life:</h4>
                  <p className="text-muted-foreground">24 months from the manufacturing date.</p>
                </div>
              </div>

              {/* Pack Size */}
              <div className="flex items-start gap-2">
                <Package className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Pack Size:</h4>
                  <p className="text-muted-foreground">As per packaging configuration</p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Regulatory Compliance */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Regulatory Compliance
            </h3>
            <p className="text-muted-foreground">
              Complies with applicable regulatory standards in manufacturing country.
            </p>
          </div>

          <Separator />

          {/* Commercial Information */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Commercial Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-foreground mb-1">MOQ:</h4>
                <p className="text-muted-foreground">{product.moq}</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Pricing:</h4>
                <p className="text-muted-foreground">{product.pricing}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}