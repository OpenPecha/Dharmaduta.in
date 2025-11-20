import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Upload } from "lucide-react";

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  company: z.string().min(1, "Company/Organization is required"),
  message: z.string().min(1, "Message is required"),
});

const collaborateFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  portfolio: z.string().min(1, "Portfolio link is required"),
  resume: z.string().min(1, "Resume is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type CollaborateFormData = z.infer<typeof collaborateFormSchema>;

const ContactSection = () => {
  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      company: "",
      message: "",
    },
  });

  const collaborateForm = useForm<CollaborateFormData>({
    resolver: zodResolver(collaborateFormSchema),
    defaultValues: {
      name: "",
      email: "",
      portfolio: "",
      resume: "",
      subject: "",
      message: "",
    },
  });

  const onContactSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
  };

  const onCollaborateSubmit = (data: CollaborateFormData) => {
    console.log("Collaborate form submitted:", data);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 sm:space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Contact Info</h2>
              <div className="h-1 w-16 bg-primary"></div>
            </div>

            <div className="space-y-6">
              
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <a href="mailto:info@dharmaduta.com" className="text-base sm:text-lg text-foreground hover:text-primary transition-colors break-all">
                  info@dharmaduta.com
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-6">
                <a 
                  href="https://www.facebook.com/profile.php?id=61578322432088" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors min-w-[44px] min-h-[44px]"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/Dharmadutatech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors min-w-[44px] min-h-[44px]"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/dharmadutaservicesllp.tech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors min-w-[44px] min-h-[44px]"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/dharmaduta-services-llp/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors min-w-[44px] min-h-[44px]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@DharmadutaServicesLLP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors min-w-[44px] min-h-[44px]"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Forms */}
          <div>
            <Tabs defaultValue="contact" className="space-y-6">
              <TabsList className="grid grid-cols-2 w-full max-w-[400px]">
                <TabsTrigger value="contact" className="text-sm sm:text-base">Contact Form</TabsTrigger>
                <TabsTrigger value="collaborate" className="text-sm sm:text-base">Collaborate Form</TabsTrigger>
              </TabsList>

              {/* Contact Form */}
              <TabsContent value="contact">
                <Form {...contactForm}>
                  <form 
                    action="https://formsubmit.co/contact@dharmaduta.in" 
                    method="POST"
                    className="space-y-6"
                  >
                    {/* FormSubmit.co configuration */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value="https://dharmaduta.in/thank-you" />
                    <input type="hidden" name="_autoresponse" value="Thank you for contacting Dharmaduta. We have received your message and will get back to you soon." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <FormField
                        control={contactForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                {...field}
                                placeholder="Name *"
                                className="h-12 min-h-[44px] border-border focus-visible:ring-2 focus-visible:ring-primary text-base"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={contactForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                {...field}
                                type="email"
                                placeholder="Email *"
                                className="h-12 min-h-[44px] border-border focus-visible:ring-2 focus-visible:ring-primary text-base"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <FormField
                        control={contactForm.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                {...field}
                                placeholder="Subject *"
                                className="h-12 min-h-[44px] border-border focus-visible:ring-2 focus-visible:ring-primary text-base"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={contactForm.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                {...field}
                                placeholder="Company / Organization *"
                                className="h-12 min-h-[44px] border-border focus-visible:ring-2 focus-visible:ring-primary text-base"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={contactForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea 
                              {...field}
                              placeholder="Message *"
                              className="min-h-[150px] border-border focus-visible:ring-2 focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-foreground hover:bg-foreground/90 text-background"
                    >
                      Submit
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              {/* Collaborate Form */}
              <TabsContent value="collaborate">
                <Form {...collaborateForm}>
                  <form 
                    action="https://formsubmit.co/contact@dharmaduta.in" 
                    method="POST"
                    className="space-y-6"
                  >
                    {/* FormSubmit.co configuration */}
                    <input type="hidden" name="_subject" value="New Collaboration Request" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value="https://dharmaduta.in/thank-you" />
                    <input type="hidden" name="_autoresponse" value="Thank you for your interest in collaborating with Dharmaduta. We have received your application and will review it shortly." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <FormField
                        control={collaborateForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                {...field}
                                placeholder="Name *"
                                className="h-12 min-h-[44px] border-border focus-visible:ring-2 focus-visible:ring-primary text-base"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={collaborateForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                {...field}
                                type="email"
                                placeholder="Email *"
                                className="h-12 min-h-[44px] border-border focus-visible:ring-2 focus-visible:ring-primary text-base"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <FormField
                        control={collaborateForm.control}
                        name="portfolio"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                {...field}
                                placeholder="Portfolio Link *"
                                className="h-12 min-h-[44px] border-border focus-visible:ring-2 focus-visible:ring-primary text-base"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={collaborateForm.control}
                        name="resume"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  {...field}
                                  placeholder="Resume *"
                                  className="h-12 min-h-[44px] border-border focus-visible:ring-2 focus-visible:ring-primary pl-10 text-base"
                                />
                                <Upload className="w-4 h-4 absolute left-3 top-4 text-muted-foreground" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={collaborateForm.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              {...field}
                              placeholder="Subject *"
                              className="h-12 min-h-[44px] border-border focus-visible:ring-2 focus-visible:ring-primary text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={collaborateForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea 
                              {...field}
                              placeholder="Message *"
                              className="min-h-[150px] border-border focus-visible:ring-2 focus-visible:ring-primary text-base"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-foreground hover:bg-foreground/90 text-background min-h-[44px] text-base"
                    >
                      Submit
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 