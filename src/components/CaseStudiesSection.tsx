
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, User } from "lucide-react";

const CaseStudiesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              See How We're Making an Impact
            </h3>
            <p className="text-lg text-gray-600">
              Real projects, real results, real impact on the Buddhist community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Custom Transcription Tool Development
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  Institution Focus
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Project:</strong> Developing a Custom Transcription Tool for a Leading Monastery Center.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We partnered with a renowned monastery to create an AI-powered tool that accurately transcribes 
                  their archive of oral teachings. This project involved training a model on specialized terminology 
                  and has made decades of wisdom searchable and accessible to their global student base for the first time.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium">
                    Impact: Thousands of hours of teachings now digitally accessible
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Buddhist Influencer Growth Success
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  Influencer Focus
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Project:</strong> Growing the Reach of a Buddhist Teaching Channel.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Through our coaching program, we helped a dedicated teacher refine their content strategy 
                  and double their audience in six months. We provided strategic guidance on platform use and 
                  helped them launch a new online course, creating a sustainable model for their teaching activities.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium">
                    Impact: 100% audience growth + sustainable teaching platform
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
