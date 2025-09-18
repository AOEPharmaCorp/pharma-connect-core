import { Mail, Phone, MapPin, Clock, Send, Building, Globe, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      title: "UAE Headquarters",
      location: "Dubai, United Arab Emirates",
      phone: "+971 12 345 6789",
      email: "info@aoepharma.com",
      hours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
      icon: Building
    },
    {
      title: "India Operations",
      location: "Mumbai, Maharashtra, India",
      phone: "+91 22 1234 5678",
      email: "india@aoepharma.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      icon: Globe
    }
  ];

  const departments = [
    {
      title: "Business Development",
      email: "business@aoepharma.com",
      description: "Partnership opportunities and new business inquiries",
      icon: Users
    },
    {
      title: "Quality & Regulatory",
      email: "quality@aoepharma.com", 
      description: "Quality assurance and regulatory compliance matters",
      icon: Building
    },
    {
      title: "Customer Support",
      email: "support@aoepharma.com",
      description: "General inquiries and customer service",
      icon: Mail
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Connect with our global team to explore partnership opportunities 
              and discuss how we can support your healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What can we help you with?"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full gradient-primary text-white">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-lg text-muted-foreground">
                  Reach out to us through any of our global offices or departmental contacts.
                </p>
              </div>

              {/* Office Locations */}
              <div className="space-y-6">
                {contactInfo.map((office, index) => (
                  <Card key={index} className="shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <office.icon className="h-5 w-5 text-primary" />
                        {office.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{office.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href={`tel:${office.phone}`} className="text-sm hover:text-primary transition-colors">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-sm hover:text-primary transition-colors">
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{office.hours}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Department Contacts */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <Card key={index} className="shadow-card">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <dept.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold">{dept.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{dept.description}</p>
                            <a
                              href={`mailto:${dept.email}`}
                              className="text-sm text-primary hover:underline"
                            >
                              {dept.email}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With operations spanning across Asia, GCC, West Africa, and Eastern Europe, 
              we're positioned to serve healthcare needs worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">25+ Countries</h3>
                <p className="text-muted-foreground">Global market presence</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">2 Regional Offices</h3>
                <p className="text-muted-foreground">UAE & India operations</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="pt-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Round-the-clock assistance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;