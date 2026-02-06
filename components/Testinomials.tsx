'use client';

import { useState, useEffect, useRef, RefObject } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Raj S.",
      location: "Birmingham, UK",
      service: "Meta (Facebook & Instagram) Advertising",
      testimonial: "Our sales tripled within 60 days of Bigbull Digital managing our Meta Ads. Their targeting strategies and creative ad copy turned our social media into a conversion machine. Their team understands how to scale small businesses like ours.",
      rating: 5,
      avatarColor: "bg-red-500"
    },
    {
      id: 2,
      name: "James T.",
      location: "London, UK",
      service: "Mobile App Development",
      testimonial: "Working with Bigbull Digital on our mobile app was a game-changer. From initial design to app store launch, their team was efficient, communicative, and creative. Our small business now has a fully functional app that's driving real user engagement and new revenue.",
      rating: 5,
      avatarColor: "bg-blue-500"
    },
    {
      id: 3,
      name: "Melissa R.",
      location: "Atlanta, USA",
      service: "Google PPC Management",
      testimonial: "Bigbull Digital took over our Google Ads account and delivered immediate improvements. Our click-through rate doubled, and we saw a 40% increase in qualified leads within the first month. Their PPC management is data-driven, transparent, and results-focused.",
      rating: 5,
      avatarColor: "bg-green-500"
    },
    {
      id: 4,
      name: "Darren K.",
      location: "Manchester, UK",
      service: "Branding & Creative Identity",
      testimonial: "We came to Bigbull Digital for a complete brand overhaul. They helped us redefine our logo, color palette, and brand voice—all aligned perfectly with our business goals. Our new visual identity has boosted our credibility and helped us stand out.",
      rating: 5,
      avatarColor: "bg-purple-500"
    },
    {
      id: 5,
      name: "Cynthia M.",
      location: "New York, USA",
      service: "MEP Design / Architect Design",
      testimonial: "Bigbull Digital delivered outstanding MEP and architectural design for our commercial property project. Their attention to detail, clear communication, and technical expertise made a complex process seamless.",
      rating: 5,
      avatarColor: "bg-yellow-500"
    }
  ];

  // Services offered
  const services = [
    "Mobile App Development",
    "Google PPC Management", 
    "Meta Advertising",
    "Branding",
    "MEP/Architect Design"
  ];

  // Auto-play testimonials
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="bg-black -mt-52 text-white py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-red-400 fill-current" />
            <span className="text-red-400 text-sm font-semibold">CLIENT TESTIMONIALS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Our <span className="text-red-500">Clients Say</span>
          </h2>
          
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            At Bigbull Digital, we specialize in helping small businesses across the USA and UK grow with expert 
            digital solutions. Don&apos;t just take our word for it—hear from real clients who&apos;ve experienced 
            business transformation through our expertise.
          </p>
        </div>

        {/* Services Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:border-red-500/30 transition-all duration-300 hover:scale-105 cursor-default"
            >
              {service}
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="relative mb-12">
          {/* Quote Icon */}
          <div className="absolute -top-6 -left-6 text-red-500/20">
            <Quote className="w-24 h-24" />
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/5 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative">
              {/* Client Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 ${testimonials[currentIndex].avatarColor} rounded-full flex items-center justify-center text-2xl font-bold`}>
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-400">{testimonials[currentIndex].location}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="px-4 py-2 bg-red-500/20 rounded-full">
                  <span className="text-red-400 font-semibold">{testimonials[currentIndex].service}</span>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 text-red-500/30 w-8 h-8" />
                <p className="text-xl md:text-2xl text-gray-300 italic pl-8">
                  &ldquo;{testimonials[currentIndex].testimonial}&rdquo;
                </p>
              </div>

              {/* Result Highlight */}
              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-400">📈</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Key Result Achieved:</p>
                    <p className="font-semibold">
                      {currentIndex === 0 && "Sales tripled in 60 days"}
                      {currentIndex === 1 && "New revenue stream created"}
                      {currentIndex === 2 && "40% increase in qualified leads"}
                      {currentIndex === 3 && "Brand credibility boosted"}
                      {currentIndex === 4 && "Complex project made seamless"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Dots Indicator */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-red-500 w-8' : 'bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-white/20 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <span className="text-gray-400">
              {currentIndex + 1} / {testimonials.length}
            </span>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-white/20 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
            <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
            <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
            <div className="text-3xl font-bold text-red-500 mb-2">2x</div>
            <div className="text-gray-400">Average Growth</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
            <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;