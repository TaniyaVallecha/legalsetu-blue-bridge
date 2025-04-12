
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-white to-legalsetu-gray py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-legalsetu-dark mb-4">
                  Simplifying Legal Access for Everyone
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Get instant legal assistance, document summaries, and connect with verified lawyers in your language.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/ask">
                    <Button className="btn-primary">Ask a Question</Button>
                  </Link>
                  <Link to="/summarize">
                    <Button variant="outline" className="btn-secondary">Analyze Documents</Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <img 
                  src="https://placehold.co/600x400/1EAEDB/FFFFFF.png?text=Legal+Assistance" 
                  alt="Legal Assistance" 
                  className="rounded-lg shadow-lg max-w-full h-auto animate-float"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Card 1 */}
              <div className="service-card">
                <div className="service-icon">
                  <MessageCircle size={48} />
                </div>
                <h3 className="text-xl font-bold mb-2">Ask a Legal Question</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Type or speak your legal issue in your language and get instant answers.
                </p>
                <Link to="/ask">
                  <Button className="btn-primary">Start Chat</Button>
                </Link>
              </div>
              
              {/* Card 2 */}
              <div className="service-card">
                <div className="service-icon">
                  <FileText size={48} />
                </div>
                <h3 className="text-xl font-bold mb-2">Summarize a Legal Document</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Upload documents to get simple summaries, timelines, and law sections.
                </p>
                <Link to="/summarize">
                  <Button className="btn-primary">Upload & Analyze</Button>
                </Link>
              </div>
              
              {/* Card 3 */}
              <div className="service-card">
                <div className="service-icon">
                  <Users size={48} />
                </div>
                <h3 className="text-xl font-bold mb-2">Find a Lawyer</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Search verified lawyers by language, expertise, and availability.
                </p>
                <Link to="/find-lawyer">
                  <Button className="btn-primary">Search Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-legalsetu-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Why Choose LegalSetu?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2 text-legalsetu-dark">Multilingual Support</h3>
                <p className="text-gray-600">Get legal assistance in your regional language.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2 text-legalsetu-dark">AI-Powered</h3>
                <p className="text-gray-600">Advanced AI to simplify complex legal information.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2 text-legalsetu-dark">Document Analysis</h3>
                <p className="text-gray-600">Get quick summaries of legal documents.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2 text-legalsetu-dark">Verified Lawyers</h3>
                <p className="text-gray-600">Connect with pre-verified legal professionals.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">What Users Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-legalsetu-gray flex items-center justify-center">
                    <span className="font-bold text-legalsetu-primary">RK</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold">Rajesh Kumar</h4>
                    <p className="text-sm text-gray-500">Farmer, Bihar</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "LegalSetu helped me understand my land rights in Hindi. The document summary feature saved me multiple trips to a lawyer."
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-legalsetu-gray flex items-center justify-center">
                    <span className="font-bold text-legalsetu-primary">SP</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold">Sita Patel</h4>
                    <p className="text-sm text-gray-500">Teacher, Gujarat</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "I was able to chat with the AI in Gujarati and get information about property inheritance laws. Very helpful service!"
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-legalsetu-gray flex items-center justify-center">
                    <span className="font-bold text-legalsetu-primary">MR</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold">Manoj Reddy</h4>
                    <p className="text-sm text-gray-500">Small Business Owner, Telangana</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Found an excellent business lawyer through LegalSetu. The platform made legal consultation affordable and accessible."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default HomePage;
