import { Calendar, ArrowRight, Tag, Clock, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const News = () => {
  const featuredNews = {
    title: "AOE Pharma Expands Operations to Eastern Europe with New Strategic Partnership",
    excerpt: "Strategic alliance with leading European distributor enhances market access and strengthens our commitment to global healthcare accessibility.",
    date: "2024-03-15",
    category: "Business Expansion",
    readTime: "5 min read",
    image: "/placeholder-news-hero.jpg"
  };
  const newsArticles = [{
    title: "New WHO-GMP Certification Achieved for Advanced Manufacturing Facility",
    excerpt: "Our latest manufacturing partner receives WHO-GMP certification, reinforcing our commitment to quality excellence.",
    date: "2024-03-10",
    category: "Quality & Compliance",
    readTime: "3 min read",
    author: "Quality Team"
  }, {
    title: "AOE Pharma Announces Breakthrough in Oncology Product Development",
    excerpt: "Collaboration with research institutions leads to innovative oncology therapeutic solutions for emerging markets.",
    date: "2024-03-05",
    category: "Product Development",
    readTime: "4 min read",
    author: "R&D Department"
  }, {
    title: "Sustainability Initiative: Eco-Friendly Packaging Solutions Launched",
    excerpt: "Introduction of biodegradable packaging materials across our product portfolio demonstrates environmental commitment.",
    date: "2024-02-28",
    category: "Sustainability",
    readTime: "3 min read",
    author: "Operations Team"
  }, {
    title: "Partnership with Leading African Healthcare Distributor",
    excerpt: "Strategic collaboration expands access to essential medications across West African markets.",
    date: "2024-02-20",
    category: "Business Expansion",
    readTime: "4 min read",
    author: "Business Development"
  }, {
    title: "AOE Pharma Receives Excellence Award for Quality Innovation",
    excerpt: "Recognition from international pharmaceutical association for outstanding contributions to quality management.",
    date: "2024-02-15",
    category: "Awards & Recognition",
    readTime: "2 min read",
    author: "Corporate Communications"
  }, {
    title: "Digital Transformation: New Supply Chain Management System",
    excerpt: "Implementation of advanced digital platform enhances supply chain efficiency and real-time tracking capabilities.",
    date: "2024-02-10",
    category: "Technology",
    readTime: "3 min read",
    author: "IT Department"
  }];
  const categories = ["All News", "Business Expansion", "Product Development", "Quality & Compliance", "Awards & Recognition", "Sustainability", "Technology"];
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              News & Press Releases
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Stay updated with the latest developments, partnerships, and innovations 
              from AOE Pharma Corporation's global operations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="shadow-elegant overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto bg-gradient-primary flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="h-32 w-32 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Tag className="h-16 w-16" />
                  </div>
                  <p className="text-sm opacity-80">Featured Story</p>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Badge variant="secondary">{featuredNews.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(featuredNews.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredNews.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                    {featuredNews.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  <Button className="gradient-primary text-white">
                    Read Full Story
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* News Categories */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className={index === 0 ? "gradient-primary text-white" : ""}>
                {category}
              </Button>)}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow group cursor-pointer">
                <CardHeader>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        {article.author}
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10 transition-colors">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-elegant">
            <CardContent className="py-16 px-8 text-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Stay Informed</h3>
                  <p className="text-muted-foreground">
                    Subscribe to our newsletter and never miss important updates about 
                    AOE Pharma Corporation's latest developments and industry insights.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                  <Button className="gradient-primary text-white">
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to receive email updates from AOE Pharma Corporation. 
                  You can unsubscribe at any time.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-gradient-primary text-white bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">
              Media Inquiries
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              For press inquiries, interview requests, or additional information about 
              AOE Pharma Corporation, please contact our media relations team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" variant="secondary" className="text-primary">
                media@aoepharma.com
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Download Press Kit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default News;