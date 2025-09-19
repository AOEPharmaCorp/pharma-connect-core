import { Shield, Award, CheckCircle, Users, Building, FileCheck, Microscope, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const Quality = () => {
  const certifications = [{
    title: "WHO-GMP",
    description: "World Health Organization Good Manufacturing Practices",
    status: "Certified",
    icon: Shield
  }, {
    title: "EU GMP",
    description: "European Union Good Manufacturing Practices",
    status: "Compliant",
    icon: Award
  }, {
    title: "USFDA",
    description: "United States Food and Drug Administration",
    status: "Registered",
    icon: FileCheck
  }, {
    title: "ISO 9001:2015",
    description: "Quality Management Systems",
    status: "Certified",
    icon: Settings
  }];
  const qualityPillars = [{
    title: "Manufacturing Excellence",
    description: "State-of-the-art facilities with cutting-edge technology and automated systems.",
    icon: Building,
    features: ["Clean room manufacturing environments", "Advanced automation and robotics", "Real-time monitoring systems", "Validated manufacturing processes"]
  }, {
    title: "Quality Control & Testing",
    description: "Comprehensive analytical testing ensuring product safety, purity, and potency.",
    icon: Microscope,
    features: ["In-house analytical laboratories", "Stability testing programs", "Microbiological testing", "Raw material qualification"]
  }, {
    title: "Regulatory Compliance",
    description: "Full adherence to international regulatory standards and guidelines.",
    icon: FileCheck,
    features: ["ICH guideline compliance", "FDA registration maintenance", "EU GMP inspections", "Continuous regulatory updates"]
  }, {
    title: "Quality Assurance",
    description: "Systematic quality assurance programs ensuring consistent product quality.",
    icon: CheckCircle,
    features: ["Quality risk management", "Change control procedures", "Supplier qualification", "Deviation management"]
  }];
  const complianceStandards = ["Good Manufacturing Practices (GMP)", "Good Laboratory Practices (GLP)", "International Council for Harmonisation (ICH)", "Pharmaceutical Inspection Convention (PIC/S)", "World Health Organization (WHO) Guidelines", "Current Good Manufacturing Practice (cGMP)"];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Quality & Compliance Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Unwavering commitment to the highest standards of pharmaceutical quality, 
              safety, and regulatory compliance across all our global operations.
            </p>
            <Button size="lg" variant="secondary" className="text-primary">
              Download Quality Certificate
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">International Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our operations are validated by leading international regulatory bodies, 
              ensuring the highest standards of quality and safety.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <cert.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {cert.status}
                  </Badge>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Quality Framework</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Four fundamental pillars that form the foundation of our comprehensive 
              quality management system.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {qualityPillars.map((pillar, index) => <Card key={index} className="shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <pillar.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{pillar.title}</CardTitle>
                      <p className="text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {pillar.features.map((feature, idx) => <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Manufacturing Partners */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">World-Class Manufacturing Partners</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We collaborate exclusively with manufacturing partners who share our commitment 
                to excellence and maintain the highest standards of pharmaceutical manufacturing.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Partner Selection Criteria</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Regulatory Compliance</h4>
                      <p className="text-sm text-muted-foreground">
                        Full compliance with WHO-GMP, EU GMP, USFDA, and ISO standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Technical Expertise</h4>
                      <p className="text-sm text-muted-foreground">
                        Proven expertise in pharmaceutical manufacturing and quality systems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Infrastructure Excellence</h4>
                      <p className="text-sm text-muted-foreground">
                        State-of-the-art facilities with advanced manufacturing capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Compliance Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {complianceStandards.map((standard, index) => <div key={index} className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{standard}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rigorous Quality Control Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every product undergoes comprehensive testing and validation to ensure 
              it meets our stringent quality standards before reaching patients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Raw Material Testing</h3>
                <p className="text-muted-foreground">
                  Comprehensive testing of all incoming raw materials for identity, 
                  purity, and quality specifications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">In-Process Control</h3>
                <p className="text-muted-foreground">
                  Real-time monitoring and testing during manufacturing to ensure 
                  process consistency and product quality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Finished Product Release</h3>
                <p className="text-muted-foreground">
                  Final testing and quality review before release, including 
                  stability and microbiological testing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Committed to Quality Excellence
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Our unwavering commitment to quality and compliance ensures that every product 
              we deliver meets the highest international standards for safety and efficacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" variant="secondary" className="text-primary">
                Request Quality Documentation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Schedule Quality Audit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Quality;