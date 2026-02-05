'use client';

import { useState, useEffect } from 'react';
import { Palette, Code, TrendingUp, Layers, PenTool, Layout, ChevronRight, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      number: "01",
      icon: <Palette className="w-8 h-8" />,
      title: "Branding And Identity",
      description: "Create a memorable brand identity that resonates with your audience and stands out in the market.",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20"
    },
    {
      id: 2,
      number: "02",
      icon: <Code className="w-8 h-8" />,
      title: "Web Design Development",
      description: "Build responsive, user-friendly websites and web applications with cutting-edge technologies.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      id: 3,
      number: "03",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Drive growth with data-driven marketing strategies across all digital channels.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      id: 4,
      number: "04",
      icon: <Layers className="w-8 h-8" />,
      title: "Corporate Identity Design",
      description: "Design comprehensive corporate identity systems including logos, stationery, and brand guidelines.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      id: 5,
      number: "05",
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Writing Marketing",
      description: "Create compelling content that engages audiences and drives conversions.",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      id: 6,
      number: "06",
      icon: <Layout className="w-8 h-8" />,
      title: "Branding Mockup Design",
      description: "Visualize your brand across various mediums with realistic mockups and presentations.",
      color: "from-indigo-500 to-violet-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20"
    }
  ];

  // Auto cycle through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <div className="bg-black text-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-red-400 font-semibold text-lg">OUR SERVICES</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Tailored Digital Solutions <br />
            <span className="text-red-500">For Every Need</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From branding to development, we provide comprehensive digital services to help your business thrive.
          </p>
        </div>

        {/* View All Button - Desktop */}
        <div className="flex justify-end mb-8">
          <button className="group hidden md:flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:scale-105">
            View All Services
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`relative group cursor-pointer ${
                activeService === index ? 'scale-[1.02]' : ''
              }`}
              onClick={() => setActiveService(index)}
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Service Card */}
              <div className={`relative h-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border ${
                activeService === index ? 'border-white/30' : 'border-white/10'
              } rounded-2xl p-6 transition-all duration-500 overflow-hidden`}>
                
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Service Number */}
                <div className="absolute top-4 right-4">
                  <div className={`text-4xl font-bold ${activeService === index ? 'text-white' : 'text-white/20'}`}>
                    {service.number}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                  <div className={`bg-gradient-to-br text-white bg-clip-text text-transparent`}>
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">{service.description}</p>
        

                {/* Hover Indicator */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>


        {/* Active Service Detail */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${services[activeService].bgColor} rounded-xl flex items-center justify-center`}>
                    <div className={`bg-gradient-to-br text-white bg-clip-text text-transparent`}>
                      {services[activeService].icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{services[activeService].title}</h3>
                    <div className="text-red-400">{services[activeService].number}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg mb-8">
                  {services[activeService].description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].color}`}></div>
                    <span className="text-gray-300">Custom solutions tailored to your business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].color}`}></div>
                    <span className="text-gray-300">Expert team with industry experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].color}`}></div>
                    <span className="text-gray-300">Results-driven approach</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                {/* Service Dots Navigation */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                  {services.map((service, index) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(index)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeService === index 
                          ? `${service.bgColor} border-2 ${service.borderColor} scale-110` 
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className={`${activeService === index ? 'opacity-100' : 'opacity-60'}`}>
                        {service.icon}
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-red-500">100+</div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-red-500">98%</div>
                    <div className="text-gray-400 text-sm">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;