import { AlertTriangle, Shield, FileText, Users, Building, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Disclaimer = () => {
  const lastUpdated = "March 1, 2024";

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* General Disclaimer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              General Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-4">
              <p className="text-yellow-800 font-medium">
                IMPORTANT: The information provided on this website is for professional reference only 
                and should not be considered as medical advice, diagnosis, or treatment recommendations.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              AOE Pharma Corporation provides this website and its content on an "as is" basis. 
              While we strive to ensure accuracy and reliability, we make no representations or 
              warranties about the completeness, accuracy, reliability, suitability, or availability 
              of the information, products, services, or related graphics contained on this website.
            </p>
          </CardContent>
        </Card>

        {/* Medical Information Disclaimer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Medical Information Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border-l-4 border-red-500 bg-red-50">
              <h4 className="font-semibold text-red-800 mb-2">Professional Use Only</h4>
              <p className="text-sm text-red-700">
                All pharmaceutical and medical information on this website is intended exclusively 
                for qualified healthcare professionals, pharmacists, and authorized medical personnel.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Important Medical Disclaimers:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">
                    Product information is provided for professional reference and should not replace 
                    clinical judgment or prescribing information.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">
                    Always consult current prescribing information and local regulatory guidelines 
                    before making treatment decisions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">
                    Individual patient factors and medical history must always be considered in 
                    therapeutic decisions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Responsibility */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Professional Responsibility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Healthcare professionals using this website acknowledge that they are responsible for:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-accent p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Clinical Decisions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Independent clinical assessment</li>
                    <li>• Patient-specific considerations</li>
                    <li>• Treatment appropriateness</li>
                    <li>• Risk-benefit evaluation</li>
                  </ul>
                </div>
                
                <div className="bg-accent p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Regulatory Compliance</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Local prescribing regulations</li>
                    <li>• Professional licensing requirements</li>
                    <li>• Ethical guidelines adherence</li>
                    <li>• Continuing education obligations</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Information Disclaimer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Product Information Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Product Availability</h4>
                <p className="text-sm text-blue-700">
                  Product availability may vary by region and is subject to local regulatory approvals. 
                  Not all products may be available in all markets.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Product Information Notes:</h4>
                <div className="space-y-2 ml-4">
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">
                      Product specifications may vary between markets due to regulatory differences
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">
                      Pricing and availability information is subject to change without notice
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">
                      Product images are for illustration purposes and may not reflect actual packaging
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regulatory Disclaimers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              Regulatory Disclaimers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">WHO-GMP Compliance</h4>
                  <p className="text-xs text-muted-foreground">
                    All manufacturing partners maintain WHO-GMP certification. Compliance status 
                    is subject to ongoing regulatory oversight.
                  </p>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Regional Regulations</h4>
                  <p className="text-xs text-muted-foreground">
                    Product registration and availability comply with local regulatory requirements 
                    in each market where distributed.
                  </p>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Quality Standards</h4>
                  <p className="text-xs text-muted-foreground">
                    All products meet applicable international quality standards. Individual 
                    specifications may vary by market.
                  </p>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Ongoing Compliance</h4>
                  <p className="text-xs text-muted-foreground">
                    Regulatory status and certifications are subject to periodic review and 
                    may change based on regulatory updates.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-gray-50 border rounded-lg mb-4">
              <p className="text-gray-700 font-medium">
                AOE Pharma Corporation, its employees, agents, and affiliates shall not be liable 
                for any direct, indirect, incidental, special, or consequential damages arising 
                from the use of this website or reliance on its content.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">This includes but is not limited to:</h4>
              <div className="ml-4 space-y-1">
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">
                    Medical decisions made based on website information
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">
                    Business losses due to product availability changes
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">
                    Technical issues or website downtime
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Questions About This Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have questions about this disclaimer or need clarification about any content 
              on our website, please contact us:
            </p>
            <div className="bg-accent p-4 rounded-lg">
              <div className="space-y-2">
                <p><strong>Email:</strong> info@aoepharma.com</p>
                <p><strong>Legal Inquiries:</strong> legal@aoepharma.com</p>
                <p><strong>Address:</strong> AOE Pharma Corporation, Dubai, UAE</p>
                <p><strong>Phone:</strong> +971 12 345 6789</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Updates to This Disclaimer</h3>
            <p className="text-muted-foreground">
              This disclaimer may be updated periodically to reflect changes in our services, 
              regulatory requirements, or legal obligations. Please review this page regularly 
              for any updates.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild>
            <a href="/contact">Contact Us for Questions</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;