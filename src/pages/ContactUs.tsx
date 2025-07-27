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
  city: string;
  postalCode: string;
  stateRegion: string;
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
    <div 
      className="min-h-screen bg-background relative"
      style={{
        backgroundImage: `url('/lovable-uploads/ee8972fd-2c56-442e-963d-7437a436d2a5.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-white/60 z-0"></div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Left Section - Text Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  We'd Love To{" "}
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Hear From You
                  </span>
                </h1>
                
                {/* Red handwritten style text with arrow */}
                <div className="relative mt-12">
                  <div className="text-red-500 font-handwriting text-3xl lg:text-4xl transform -rotate-2">
                    You're one step closer to your dream door
                  </div>
                  
                  {/* Curved arrow pointing right */}
                  <svg 
                    className="absolute -bottom-8 right-0 w-24 h-16 text-red-500" 
                    viewBox="0 0 100 60" 
                    fill="none"
                  >
                    <path 
                      d="M10 30 Q 50 50, 90 30" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none"
                      markerEnd="url(#arrowhead)"
                    />
                    <defs>
                      <marker 
                        id="arrowhead" 
                        markerWidth="10" 
                        markerHeight="7" 
                        refX="9" 
                        refY="3.5" 
                        orient="auto"
                      >
                        <polygon 
                          points="0 0, 10 3.5, 0 7" 
                          fill="currentColor"
                        />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="bg-[#101A2B] text-white p-8 lg:p-12 rounded-lg">
              <h2 className="text-2xl font-semibold mb-8 text-white">
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
                        <FormLabel className="text-white text-sm">Full name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-gray-200 border-none text-gray-900 placeholder:text-gray-500 h-12"
                            placeholder=""
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
                        <FormLabel className="text-white text-sm">Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            className="bg-gray-200 border-none text-gray-900 placeholder:text-gray-500 h-12"
                            placeholder=""
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
                        <FormLabel className="text-white text-sm">Phone number</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="tel"
                            className="bg-gray-200 border-none text-gray-900 placeholder:text-gray-500 h-12"
                            placeholder=""
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* City and Postal Code Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-sm">City</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="bg-gray-200 border-none text-gray-900 placeholder:text-gray-500 h-12"
                              placeholder=""
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white text-sm">Postal code</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="bg-gray-200 border-none text-gray-900 placeholder:text-gray-500 h-12"
                              placeholder=""
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* State/Region */}
                  <FormField
                    control={form.control}
                    name="stateRegion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-sm">State/region</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-200 border-none text-gray-900 h-12">
                              <SelectValue placeholder="Please Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="california">California</SelectItem>
                            <SelectItem value="newyork">New York</SelectItem>
                            <SelectItem value="texas">Texas</SelectItem>
                            <SelectItem value="florida">Florida</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  {/* I am a... */}
                  <FormField
                    control={form.control}
                    name="iAmA"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white text-sm">I am a</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-200 border-none text-gray-900 h-12">
                              <SelectValue placeholder="Please Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="individual">Individual</SelectItem>
                            <SelectItem value="buddhist-institution">Buddhist Institution</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="organization">Organization</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-12 mt-8"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;