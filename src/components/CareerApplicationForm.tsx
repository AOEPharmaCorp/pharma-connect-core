import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CareerApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  position?: string;
}

const CareerApplicationForm = ({ isOpen, onClose, position }: CareerApplicationFormProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: position || "",
    experience: "",
    linkedin: "",
    coverLetter: "",
    cv: null as File | null,
    portfolio: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and get back to you within 5-7 business days.",
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: position || "",
      experience: "",
      linkedin: "",
      coverLetter: "",
      cv: null,
      portfolio: null
    });
    setIsSubmitted(false);
    onClose();
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={resetForm}>
        <DialogContent className="max-w-md">
          <div className="text-center space-y-6 py-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-green-800">Application Submitted!</h3>
              <p className="text-muted-foreground">
                Thank you for your interest in joining AOE Pharma Corporation. 
                We've received your application and will review it carefully.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-blue-800 mb-2">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">What's Next?</span>
                </div>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Initial review: 2-3 business days</li>
                  <li>• HR screening call: 5-7 business days</li>
                  <li>• Final interview: 10-14 business days</li>
                </ul>
              </div>
            </div>
            <Button onClick={resetForm} className="w-full">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {position ? `Apply for ${position}` : "Submit General Application"}
          </DialogTitle>
        </DialogHeader>
        
        <form 
          onSubmit={handleSubmit}
          className="space-y-6"
          data-netlify="true"
          name="career-application"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="career-application" />
          <input type="hidden" name="bot-field" />
          
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john.doe@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/johndoe"
                />
              </div>
            </CardContent>
          </Card>

          {/* Position Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Position Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="position">Position of Interest</Label>
                <Select value={formData.position} onValueChange={(value) => setFormData(prev => ({...prev, position: value}))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a position or type General Application" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Senior Regulatory Affairs Manager">Senior Regulatory Affairs Manager</SelectItem>
                    <SelectItem value="Business Development Executive">Business Development Executive</SelectItem>
                    <SelectItem value="Quality Assurance Specialist">Quality Assurance Specialist</SelectItem>
                    <SelectItem value="General Application">General Application</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({...prev, experience: value}))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="2-3">2-3 years</SelectItem>
                    <SelectItem value="4-5">4-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cv">CV/Resume * (PDF, DOC, DOCX)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary transition-colors">
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, "cv")}
                      className="hidden"
                      required
                    />
                    <label htmlFor="cv" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {formData.cv ? formData.cv.name : "Click to upload CV"}
                      </p>
                    </label>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio (Optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:border-primary transition-colors">
                    <input
                      type="file"
                      id="portfolio"
                      name="portfolio"
                      accept=".pdf,.doc,.docx,.zip"
                      onChange={(e) => handleFileChange(e, "portfolio")}
                      className="hidden"
                    />
                    <label htmlFor="portfolio" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {formData.portfolio ? formData.portfolio.name : "Click to upload portfolio"}
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cover Letter */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cover Letter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="coverLetter">Why do you want to join AOE Pharma Corporation? *</Label>
                <Textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your motivation, relevant experience, and what you can bring to our team..."
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 gradient-primary text-white">
              Submit Application
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CareerApplicationForm;