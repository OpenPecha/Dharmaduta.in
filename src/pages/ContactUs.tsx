import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  iAmA: string;
  message?: string;
}

const ContactUs = () => {
  const form = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
              We'd Love To{" "}
              <span className="text-[#bf9c2e]">
                Hear From You
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to start your Buddhist technology journey? Get in touch with our team to discuss how we can help amplify your mission.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">
                Contact Information
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">Full name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="h-12 border-gray-200 focus:border-[#bf9c2e] focus:ring-[#bf9c2e]"
                            placeholder="Enter your full name"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            className="h-12 border-gray-200 focus:border-[#bf9c2e] focus:ring-[#bf9c2e]"
                            placeholder="Enter your email address"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* Phone Number */}
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">Phone number</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="tel"
                            className="h-12 border-gray-200 focus:border-[#bf9c2e] focus:ring-[#bf9c2e]"
                            placeholder="Enter your phone number"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* I Am A */}
                  <FormField
                    control={form.control}
                    name="iAmA"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">I am a</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 border-gray-200 focus:border-[#bf9c2e] focus:ring-[#bf9c2e]">
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

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900">Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="border-gray-200 focus:border-[#bf9c2e] focus:ring-[#bf9c2e] min-h-[120px]"
                            placeholder="Tell us about your project or how we can help..."
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-[#bf9c2e] hover:bg-[#a6872a] text-white h-12 text-lg font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;