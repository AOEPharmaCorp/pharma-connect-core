import { FileText, Scale, AlertTriangle, Users, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Terms = () => {
  const lastUpdated = "March 1, 2024";

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Use ("Terms") govern your use of the AOE Pharma Corporation website 
              and services. By accessing or using our website, you agree to be bound by these Terms. 
              If you do not agree to these Terms, please do not use our services.
            </p>
          </CardContent>
        </Card>

        {/* Definitions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Definitions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <strong>"Company"</strong> refers to AOE Pharma Corporation, a pharmaceutical company 
                headquartered in Dubai, UAE.
              </div>
              <div>
                <strong>"Services"</strong> refers to the pharmaceutical products, business solutions, 
                and related services provided by the Company.
              </div>
              <div>
                <strong>"User" or "You"</strong> refers to any individual or entity that accesses 
                or uses our website or services.
              </div>
              <div>
                <strong>"Content"</strong> refers to all information, data, text, graphics, and 
                other materials available through our services.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Use of Services */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Use of Our Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Permitted Use</h3>
                <p className="text-muted-foreground">
                  You may use our services for legitimate business purposes related to pharmaceutical 
                  and healthcare activities. You agree to use our services in compliance with all 
                  applicable laws and regulations.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Prohibited Activities</h3>
                <div className="bg-accent p-4 rounded-lg">
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Using our services for any unlawful purpose</li>
                    <li>• Attempting to gain unauthorized access to our systems</li>
                    <li>• Distributing malware or harmful code</li>
                    <li>• Violating intellectual property rights</li>
                    <li>• Misrepresenting your identity or affiliation</li>
                    <li>• Interfering with the proper functioning of our services</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Use */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Professional Use and Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h4 className="font-semibold mb-2">Healthcare Professionals</h4>
                <p className="text-sm text-muted-foreground">
                  Information provided on this website is intended for healthcare professionals only. 
                  Users must have appropriate qualifications and licensing to access pharmaceutical 
                  product information.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h4 className="font-semibold mb-2">Regulatory Compliance</h4>
                <p className="text-sm text-muted-foreground">
                  All pharmaceutical activities must comply with applicable regulatory requirements 
                  including WHO-GMP, EU GMP, USFDA guidelines, and local regulations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Intellectual Property Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              All content, trademarks, logos, and intellectual property on our website and services 
              are owned by AOE Pharma Corporation or our licensors. You may not:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-accent p-3 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Prohibited</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Copy or reproduce content</li>
                  <li>• Use trademarks without permission</li>
                  <li>• Create derivative works</li>
                  <li>• Reverse engineer our systems</li>
                </ul>
              </div>
              <div className="bg-accent p-3 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Permitted</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• View content for business purposes</li>
                  <li>• Share links to our website</li>
                  <li>• Print for internal reference</li>
                  <li>• Fair use for educational purposes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Disclaimers and Limitations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold mb-2 text-yellow-800">Medical Information Disclaimer</h4>
                <p className="text-sm text-yellow-700">
                  Information provided is for professional reference only and does not constitute 
                  medical advice. Always consult qualified healthcare professionals for medical decisions.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Service Availability</h4>
                <p className="text-muted-foreground text-sm">
                  We strive to maintain continuous service availability but cannot guarantee 
                  uninterrupted access. Services may be temporarily unavailable for maintenance, 
                  updates, or due to circumstances beyond our control.
                </p>
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
            <div className="space-y-3">
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, AOE Pharma Corporation shall not be liable for:
              </p>
              <div className="space-y-2 ml-4">
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">
                    Indirect, incidental, special, or consequential damages
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">
                    Loss of profits, data, or business opportunities
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">
                    Damages resulting from third-party actions or content
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We reserve the right to terminate or suspend access to our services at any time, 
              without prior notice, for conduct that we believe violates these Terms or is harmful 
              to other users, us, or third parties, or for any other reason.
            </p>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Governing Law</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              These Terms are governed by and construed in accordance with the laws of the 
              United Arab Emirates. Any disputes arising from these Terms will be subject to 
              the exclusive jurisdiction of the courts in Dubai, UAE.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have questions about these Terms of Use, please contact us:
            </p>
            <div className="bg-accent p-4 rounded-lg">
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@aoepharma.com</p>
                <p><strong>Address:</strong> AOE Pharma Corporation, Dubai, UAE</p>
                <p><strong>Phone:</strong> +971 12 345 6789</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Changes to Terms</h3>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. Changes will be effective 
              immediately upon posting on our website. Your continued use of our services after 
              changes constitutes acceptance of the new Terms.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild>
            <a href="/contact">Contact Us for Legal Questions</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Terms;