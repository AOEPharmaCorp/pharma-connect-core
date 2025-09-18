import { Award, Globe, Users, Target, CheckCircle, Building, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { label: "Years of Excellence", value: "6+", icon: Award },
    { label: "Global Markets", value: "25+", icon: Globe },
    { label: "Healthcare Partners", value: "100+", icon: Users },
    { label: "Products Available", value: "500+", icon: Target },
  ];

  const certifications = [
    "WHO-GMP Certified",
    "EU GMP Compliant", 
    "USFDA Registered",
    "ISO 9001:2015",
    "GLP Certified",
    "ICH Guidelines"
  ];

  const productCategories = [
    "Oral Solids & Tablets",
    "Liquid Formulations", 
    "Injectable Solutions",
    "Topical & Ophthalmic",
    "Suppositories",
    "Oncology Therapeutics",
    "Critical Care Products",
    "Active Pharmaceutical Ingredients"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Pioneering Global Healthcare Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              AOE Pharma Corporation stands as a trusted global pharmaceutical solutions provider, 
              headquartered in Dubai, UAE, with an unwavering commitment to enhancing quality of life 
              through innovative, accessible healthcare products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" variant="secondary" className="text-primary">
                Explore Our Products
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Company Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Since our establishment in 2018, AOE Pharma Corporation has emerged as a leading 
                  global pharmaceutical solutions provider, delivering high-quality, affordable healthcare 
                  products across diverse markets worldwide.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Global Presence
                </h3>
                <p className="text-muted-foreground">
                  Our extensive product portfolio spans oral solids, liquids, injections, topical & 
                  ophthalmic preparations, and suppositories, with specialized expertise in oncology 
                  and critical care products. We maintain strategic operations across Asia, West Africa, 
                  Eastern Europe, and the GCC region.
                </p>
              </div>
            </div>
            
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Our Product Portfolio</h3>
                <div className="grid grid-cols-1 gap-3">
                  {productCategories.map((category, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{category}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality & Compliance Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We collaborate with world-class manufacturing partners who maintain the highest standards 
              of quality control and regulatory compliance, ensuring every product meets international 
              safety and efficacy requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  International Certifications
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Rigorous Quality Standards</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Manufacturing Excellence</h4>
                    <p className="text-sm text-muted-foreground">
                      State-of-the-art facilities with advanced technology and strict adherence to global standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Quality Assurance</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive testing protocols ensuring safety, purity, and potency of all products.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Regulatory Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      Full compliance with WHO, EU, USFDA, and local regulatory requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At AOE Pharma Corporation, our commitment extends beyond business success to making a 
              meaningful difference in global healthcare accessibility and patient outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ethics & Transparency</h3>
                <p className="text-muted-foreground">
                  We operate with unwavering ethical standards and complete transparency in all our 
                  business practices and partnerships.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Customer Partnership</h3>
                <p className="text-muted-foreground">
                  Building long-term partnerships with healthcare providers and distributors to ensure 
                  reliable access to quality medications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Health Impact</h3>
                <p className="text-muted-foreground">
                  Dedicated to improving global health outcomes by making essential medications 
                  accessible and affordable worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Dedicated to Excellence in Healthcare
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Our mission is to continue being a driving force for positive change in global healthcare, 
              leading innovation and excellence in pharmaceutical solutions while maintaining our 
              commitment to client success and patient wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" variant="secondary" className="text-primary">
                Learn More About Us
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Explore Partnership Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;