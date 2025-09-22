import { Globe, Award, Users, Target, ArrowRight, CheckCircle, Building, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroPharmaMain from "@/assets/hero-pharma-main.jpg";
import heroLab from "@/assets/hero-lab.jpg";
const Index = () => {
  const stats = [{
    label: "Global Reach",
    value: "Asia, W. Africa, E. EU & GCC",
    icon: Globe
  }, {
    label: "Fully Compliant",
    value: "EU, USFDA, WHO GMP",
    icon: Award
  }, {
    label: "Since",
    value: "2018",
    icon: Target
  }, {
    label: "Established",
    value: "Trusted Partner",
    icon: Users
  }];
  const productCategories = [{
    name: "Pharmaceutical Products",
    percentage: "45%"
  }, {
    name: "Generics & Differentiated",
    percentage: "33%"
  }, {
    name: "FMCG & Cosmeceuticals",
    percentage: "22%"
  }];
  const services = [{
    title: "Specialty Medicines",
    description: "Advanced therapeutic solutions",
    icon: Heart
  }, {
    title: "Generic Medications",
    description: "Affordable treatment options",
    icon: Shield
  }, {
    title: "OTC Medications",
    description: "Over-the-counter solutions",
    icon: CheckCircle
  }, {
    title: "Active Ingredients",
    description: "Quality API manufacturing",
    icon: Building
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* Main pharmaceutical image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${heroPharmaMain})`
          }} />
            {/* Lab image overlay on the right */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-cover bg-center bg-no-repeat opacity-60" style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.3), transparent), url(${heroLab})`
          }} />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Content */}
            <div className="space-y-8 text-white">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Premier B2B
                <br />
                <span className="text-white/90">Pharmaceutical Partner</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                APC Pharma Corporation - Trusted by distributors, hospitals, and regulatory officials across 40+ countries. 
                WHO-GMP certified products with comprehensive regulatory support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" variant="secondary" className="text-primary shadow-lg" asChild>
                  <Link to="/products">Explore Product Portfolio</Link>
                </Button>
                
              </div>
            </div>
            
            {/* Visual Elements */}
            <div className="hidden lg:flex flex-col space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Global Operations Active</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">40+</div>
                    <div className="text-white/70 text-sm">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">2018</div>
                    <div className="text-white/70 text-sm">Established</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-4">Quality Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {["WHO-GMP", "EU GMP", "USFDA", "ISO", "GLP"].map(cert => <span key={cert} className="px-3 py-1 bg-primary/20 text-white text-sm rounded-full border border-primary/30">
                      {cert}
                    </span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <Card key={index} className="text-center shadow-card">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-lg font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Philosophy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At AOE Pharma Corporation, we believe in delivering high-quality, affordable, 
                and accessible healthcare solutions to patients worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-card">
                <CardContent className="pt-8">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">International Reach</h3>
                  <p className="text-muted-foreground">
                    Serving distributors and healthcare institutions across Asia, GCC, West Africa, 
                    and Eastern Europe with reliable pharmaceutical supply chains.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-card">
                <CardContent className="pt-8">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    WHO-GMP, EU GMP, USFDA, GLP, and ISO certified manufacturing partners 
                    ensuring the highest pharmaceutical quality standards.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-card">
                <CardContent className="pt-8">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Regulatory Support</h3>
                  <p className="text-muted-foreground">
                    Complete regulatory documentation and expert support for smooth 
                    market approvals and procurement processes worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Products & Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive pharmaceutical solutions spanning multiple therapeutic areas 
              with a focus on quality, innovation, and accessibility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              {productCategories.map((category, index) => <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg shadow-sm">
                  <span className="font-medium">{category.name}</span>
                  <span className="text-primary font-bold">{category.percentage}</span>
                </div>)}
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {services.map((service, index) => <Card key={index} className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <service.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Become Our B2B Partner?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join our network of trusted distributors and healthcare partners. Access premium 
              pharmaceutical products with comprehensive regulatory support and reliable supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-primary">
                  Request Partnership Information
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm">
                  Browse Product Catalog
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;