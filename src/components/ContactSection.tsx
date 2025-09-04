import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  iAmA: string;
  message?: string;
}

const ContactSection = () => {
  const form = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">We'd Love To <span className="text-primary">Hear From You</span></h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to start your Buddhist technology journey? Get in touch with our team to discuss how we can help amplify your mission.
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-sm border border-border p-8">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Full name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          className="h-12 border-border focus-visible:ring-2 focus-visible:ring-primary"
                          placeholder="Enter your full name"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          className="h-12 border-border focus-visible:ring-2 focus-visible:ring-primary"
                          placeholder="Enter your email address"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Phone number</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="tel"
                          className="h-12 border-border focus-visible:ring-2 focus-visible:ring-primary"
                          placeholder="Enter your phone number"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="iAmA"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">I am a</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 border-border focus-visible:ring-2 focus-visible:ring-primary">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="individual">Individual Practitioner</SelectItem>
                          <SelectItem value="teacher">Buddhist Teacher</SelectItem>
                          <SelectItem value="institution">Institution Representative</SelectItem>
                          <SelectItem value="developer">Developer/Technologist</SelectItem>
                          <SelectItem value="student">Student/Researcher</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          className="border-border focus-visible:ring-2 focus-visible:ring-primary min-h-[120px]"
                          placeholder="Tell us about your project or how we can help..."
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:opacity-90 text-primary-foreground h-12 text-lg font-medium"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 