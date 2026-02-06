'use client';

import { useState, useEffect } from 'react';
import { Target, Zap, Star, ChevronRight, TrendingUp, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const AboutUsSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    experts: 0
  });

  // Unsplash Images - Professional business/tech themed
  const unsplashImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Business meeting
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Data analytics
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"  // Team collaboration
  ];

  const features = [
    {
      number: "01",
      icon: <Target className="w-8 h-8 text-red-400" />,
      title: "Marketing Experts",
      description: "Our marketing experts don't just follow trends; we set them. Through data-driven insights and creative solutions, we develop customised marketing plans that resonate with your target audience.",
      color: "from-red-500/20 to-red-500/5"
    },
    {
      number: "02",
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: "Ecommerce Automation",
      description: "We help businesses automate and scale with Amazon PL, wholesale systems, and fully managed eCommerce setups. From product research to store management—we handle the back-end so you can focus on profits.",
      color: "from-red-500/20 to-red-500/5"
    }
  ];

  // Counter animation
  useEffect(() => {
    const targetValues = {
      projects: 150,
      clients: 50,
      years: 5,
      experts: 25
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        projects: Math.floor(targetValues.projects * progress),
        clients: Math.floor(targetValues.clients * progress),
        years: Math.floor(targetValues.years * progress),
        experts: Math.floor(targetValues.experts * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <div className="relative group">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={unsplashImages[0]}
                alt="Bigbull Digital Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-red-500/10 rounded-full blur-xl"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Provide The Best Easy Solution <br />
                <span className="text-red-500">For Your IT Problem</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Crafting visually appealing and user websites tailored to your brand&apos;s and objectives.
                We transform complex IT challenges into simple, effective solutions.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">Expert IT Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">Custom Development</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </div>

            <button className="group px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95">
              About More
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-500 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-sm font-bold">
                      {feature.number}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: counters.projects, label: "Projects", suffix: "+" },
              { value: counters.clients, label: "Happy Clients", suffix: "+" },
              { value: counters.years, label: "Years Experience", suffix: "+" },
              { value: counters.experts, label: "Team Experts", suffix: "+" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-red-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl font-bold text-red-500 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Agency Banner with Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={unsplashImages[1]}
              alt="Bigbull Digital Office"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-red-400" />
                </div>
                <span className="text-red-400 font-semibold text-lg">TRUSTED AGENCY</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                BIGBULL <span className="text-red-500">DIGITAL AGENCY</span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-8">
                Your partner in digital transformation. We deliver innovative solutions that drive growth and maximize ROI.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  Web Development
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  Digital Marketing
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  Ecommerce Solutions
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                  IT Consulting
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;