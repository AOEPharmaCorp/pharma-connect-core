import { Shield, Lock, Eye, Users, FileText, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  const lastUpdated = "March 1, 2024";

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Your Privacy Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              AOE Pharma Corporation ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Personal Information</h3>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Name, email address, phone number</li>
                <li>• Company information and job title</li>
                <li>• Business contact details</li>
                <li>• Professional qualifications and certifications</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Technical Information</h3>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• IP address and device information</li>
                <li>• Browser type and version</li>
                <li>• Website usage data and analytics</li>
                <li>• Cookies and similar technologies</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong>Business Operations:</strong> To provide our services, process inquiries, 
                  and manage business relationships.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong>Communication:</strong> To respond to your inquiries, send updates, 
                  and provide customer support.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, 
                  and industry standards.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong>Website Improvement:</strong> To analyze usage patterns and improve 
                  our website functionality.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Information Sharing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share information only in the following circumstances:
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-accent rounded-lg">
                <h4 className="font-semibold mb-1">Business Partners</h4>
                <p className="text-sm text-muted-foreground">
                  With trusted partners who assist in our operations, under strict confidentiality agreements.
                </p>
              </div>
              <div className="p-3 bg-accent rounded-lg">
                <h4 className="font-semibold mb-1">Legal Requirements</h4>
                <p className="text-sm text-muted-foreground">
                  When required by law, regulation, or valid legal process.
                </p>
              </div>
              <div className="p-3 bg-accent rounded-lg">
                <h4 className="font-semibold mb-1">Business Transfers</h4>
                <p className="text-sm text-muted-foreground">
                  In connection with mergers, acquisitions, or asset transfers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Technical Safeguards</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• SSL/TLS encryption</li>
                  <li>• Secure data centers</li>
                  <li>• Regular security audits</li>
                  <li>• Access controls</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Organizational Measures</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Employee training</li>
                  <li>• Data minimization</li>
                  <li>• Regular policy reviews</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Rights and Choices</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="font-medium">Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="font-medium">Correction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="font-medium">Deletion</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="font-medium">Portability</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="font-medium">Restriction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="font-medium">Objection</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy or wish to exercise your rights, 
              please contact us at:
            </p>
            <div className="bg-accent p-4 rounded-lg">
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@aoepharma.com</p>
                <p><strong>Address:</strong> AOE Pharma Corporation, Dubai, UAE</p>
                <p><strong>Phone:</strong> +971 12 345 6789</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Changes to This Policy</h3>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild>
            <a href="/contact">Contact Us for Privacy Questions</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;