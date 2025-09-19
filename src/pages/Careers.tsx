import { Users, Award, Globe, TrendingUp, CheckCircle, MapPin, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const Careers = () => {
  const benefits = [{
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
    icon: Award
  }, {
    title: "Professional Growth",
    description: "Continuous learning opportunities and career advancement",
    icon: TrendingUp
  }, {
    title: "Global Exposure",
    description: "Work with international teams across multiple markets",
    icon: Globe
  }, {
    title: "Work-Life Balance",
    description: "Flexible working arrangements and generous time off",
    icon: Clock
  }];
  const openPositions = [{
    title: "Senior Regulatory Affairs Manager",
    department: "Quality & Regulatory",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead regulatory submissions and maintain compliance across global markets.",
    requirements: ["Bachelor's degree in Life Sciences or related field", "5+ years of regulatory affairs experience", "Knowledge of WHO, FDA, and EU regulations", "Strong communication and project management skills"]
  }, {
    title: "Business Development Executive",
    department: "Sales & Marketing",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive business growth through strategic partnerships and market expansion.",
    requirements: ["Bachelor's degree in Business or related field", "3+ years of pharmaceutical sales experience", "Strong network in pharmaceutical industry", "Excellent negotiation and presentation skills"]
  }, {
    title: "Quality Assurance Specialist",
    department: "Quality Control",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "2+ years",
    description: "Ensure quality standards and compliance across manufacturing operations.",
    requirements: ["Bachelor's degree in Chemistry, Pharmacy, or related field", "2+ years of QA experience in pharmaceuticals", "Knowledge of GMP and quality systems", "Attention to detail and analytical skills"]
  }];
  const companyValues = [{
    title: "Innovation",
    description: "Fostering creativity and continuous improvement in everything we do"
  }, {
    title: "Integrity",
    description: "Operating with transparency, honesty, and ethical principles"
  }, {
    title: "Excellence",
    description: "Striving for the highest standards in quality and performance"
  }, {
    title: "Collaboration",
    description: "Working together as a global team to achieve common goals"
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Join Our Global Team
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Build your career with a leading pharmaceutical company committed to 
              innovation, excellence, and making a positive impact on global healthcare.
            </p>
            <Button size="lg" variant="secondary" className="text-primary">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AOE Pharma?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join a dynamic team that's shaping the future of global healthcare 
              while building rewarding careers in a supportive environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => <Card key={index} className="text-center shadow-card">
                <CardContent className="pt-8">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our core values guide everything we do and shape our company culture, 
              creating an environment where everyone can thrive.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore exciting career opportunities across our global operations 
              and find the perfect role to advance your career.
            </p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => <Card key={index} className="shadow-elegant">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {position.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {position.type}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {position.experience}
                        </Badge>
                      </div>
                    </div>
                    <Button className="gradient-primary text-white">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{position.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Requirements:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {position.requirements.map((req, idx) => <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">{req}</span>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see the right opportunity? We're always looking for talented individuals.
            </p>
            <Button variant="outline" size="lg">
              Submit General Application
            </Button>
          </div>
        </div>
      </section>

      {/* Growth & Development */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Professional Growth & Development</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We invest in our people's growth through comprehensive training programs, 
                mentorship opportunities, and clear career advancement paths.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Career Advancement</h3>
                    <p className="text-sm text-muted-foreground">
                      Clear pathways for promotion with regular performance reviews and goal setting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Learning & Training</h3>
                    <p className="text-sm text-muted-foreground">
                      Access to professional development courses, certifications, and industry conferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Global Opportunities</h3>
                    <p className="text-sm text-muted-foreground">
                      International assignments and cross-cultural collaboration opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Employee Benefits Package</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Health & Wellness</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Medical insurance</li>
                      <li>• Dental & vision coverage</li>
                      <li>• Wellness programs</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Financial Benefits</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Competitive salary</li>
                      <li>• Performance bonuses</li>
                      <li>• Retirement savings</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Time Off</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Generous vacation days</li>
                      <li>• Sick leave</li>
                      <li>• Flexible schedules</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Professional Growth</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Training budget</li>
                      <li>• Conference attendance</li>
                      <li>• Certification support</li>
                    </ul>
                  </div>
                </div>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join our mission to improve global healthcare while building a rewarding career 
              with opportunities for growth, innovation, and meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" variant="secondary" className="text-primary">
                Browse All Positions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Submit Your Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Careers;