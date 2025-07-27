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

        {/* Connect with us section */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/90"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
              Connect with us.
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/dharmadutaservicesllp.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-16 h-16 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400"
              >
                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/profile.php?id=61578322432088" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-16 h-16 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#3b5998]"
              >
                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/dharmaduta-services-llp/about/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-16 h-16 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#0077B5]"
              >
                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a 
                href="https://x.com/Dharmadutatech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-16 h-16 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-black"
              >
                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@DharmadutaServicesLLP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-16 h-16 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#FF0000]"
              >
                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Gmail */}
              <a 
                href="mailto:contact@dharmaduta.in"
                className="group flex items-center justify-center w-16 h-16 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#D14836]"
              >
                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;