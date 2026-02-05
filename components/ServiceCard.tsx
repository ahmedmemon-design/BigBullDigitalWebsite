'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ServicesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: ServiceCard[] = [
    {
      id: 1,
      title: "Digital Marketing Services",
      description: "Boost your online presence with data-driven strategies and targeted campaigns that deliver real results.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      id: 2,
      title: "Web Design & Development",
      description: "Custom websites built with cutting-edge technologies for optimal performance and user experience.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
    },
    {
      id: 3,
      title: "Branding and Creative Identity",
      description: "Create a memorable brand identity that resonates with your audience and stands out from competition.",
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800&q=80"
    },
    {
      id: 4,
      title: "Google PPC Management",
      description: "Maximize ROI with expertly managed pay-per-click advertising campaigns on Google Ads platform.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      id: 5,
      title: "Ecommerce Automation",
      description: "Streamline your online store operations with intelligent automation solutions and integrations.",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80"
    },
    {
      id: 6,
      title: "Meta Ads & Advertising",
      description: "Reach your target audience on Facebook and Instagram with precision-targeted advertising campaigns.",
      image: "https://images.unsplash.com/photo-1656164631668-8673eab87b84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWV0YSUyMGFkc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 7,
      title: "TikTok & Snapchat Ads",
      description: "Engage younger demographics with creative short-form video campaigns on trending social platforms.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29jaWFsJTIwbWVkaWElMjBhcHB8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 8,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on all devices.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
    },
    {
      id: 9,
      title: "Logo & Brand Kit Design",
      description: "Professional logo design and complete brand identity packages that capture your business essence.",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80"
    },
    {
      id: 10,
      title: "Animation & Video Production",
      description: "Compelling video content that tells your story and engages viewers across all digital platforms.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
    },
    {
      id: 11,
      title: "Digital Media Management",
      description: "Comprehensive social media strategy and community management to grow your online presence.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      id: 12,
      title: "GhostWriting & Content Creation",
      description: "High-quality content that positions you as an industry thought leader and drives engagement.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
    },
    {
      id: 13,
      title: "Global Book Publishing",
      description: "End-to-end book publishing services for authors worldwide, from manuscript to distribution.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80"
    },
    {
      id: 14,
      title: "MEP and Architectural",
      description: "Professional MEP design and architectural planning services for commercial and residential projects.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
    },
    {
      id: 15,
      title: "3D Modeling and Visualization",
      description: "Photorealistic 3D renders and architectural visualizations that bring your concepts to life.",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80"
    }
  ];

  return (
    <div className="w-full bg-black py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Services Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                />
              </div>

              {/* Gradient Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent transition-opacity duration-500 ${
                  hoveredCard === service.id ? 'opacity-95' : 'opacity-80'
                }`}
              ></div>

              {/* Shine Effect */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform transition-transform duration-700 ${
                  hoveredCard === service.id ? 'translate-x-full' : '-translate-x-full'
                }`}
                style={{ 
                  transform: hoveredCard === service.id ? 'translateX(100%) rotate(25deg)' : 'translateX(-100%) rotate(25deg)',
                  width: '50%'
                }}
              ></div>

              {/* Border Glow */}
              <div 
                className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  hoveredCard === service.id 
                    ? 'ring-2 ring-white/30 shadow-xl shadow-black/50' 
                    : ''
                }`}
              ></div>

              {/* Content */}
              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                {/* Title */}
                <h3 
                  className={`text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 transition-all duration-300 leading-tight ${
                    hoveredCard === service.id ? 'transform -translate-y-2' : ''
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    hoveredCard === service.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Number Badge */}
              <div 
                className={`absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center font-bold text-white text-sm border border-white/20 transition-all duration-500 ${
                  hoveredCard === service.id ? 'scale-110 bg-white/20' : 'scale-100'
                }`}
              >
                {service.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;