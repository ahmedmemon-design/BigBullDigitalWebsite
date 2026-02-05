'use client';

import { useEffect, useRef, useState } from 'react';

const SuperSimpleSkills = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const skills = [
    { title: "Web Solution", percent: 75, color: "#EF4444" },
    { title: "Mobile Solution", percent: 85, color: "#EF4444" },
    { title: "Custom Reporting", percent: 65, color: "#EF4444" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setAnimate(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our <span className="text-red-500">Expertise</span>
        </h2>

        {/* Skills */}
        <div className="space-y-12">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between">
                <span className="text-xl font-medium">{skill.title}</span>
                <span className="text-red-500 font-bold text-xl">
                  {animate ? `${skill.percent}%` : '0%'}
                </span>
              </div>
              
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: animate ? `${skill.percent}%` : '0%',
                    backgroundColor: skill.color,
                    transitionDelay: `${index * 300}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Footer Note */}
        <div className="mt-16 text-center text-gray-400">
          <p>We deliver quality digital solutions</p>
        </div>
      </div>
    </div>
  );
};

export default SuperSimpleSkills;