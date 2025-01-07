'use client';
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      initials: "SK",
      name: "Sarah Kim",
      role: "Fashion Influencer",
      text: "SocialStats has completely transformed how I analyze my Instagram performance. The insights are invaluable for growing my audience.",
      rating: 5,
    },
    {
      initials: "JD",
      name: "John Doe",
      role: "Travel Blogger",
      text: "The competitor analysis feature helped me understand my niche better and improve my content strategy significantly.",
      rating: 5,
    },
    {
      initials: "MP",
      name: "Maria Perez",
      role: "Fitness Coach",
      text: "Best time posting feature alone doubled my engagement rate. The analytics are spot on!",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Loved by Content Creators
          </h2>
          <p className="text-gray-400">
            See what our users have to say about their experience with
            SocialStats
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-zinc-900 rounded-lg p-8 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-white font-medium">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">"{testimonial.text}"</p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-violet-500 text-violet-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center text-white hover:bg-violet-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center text-white hover:bg-violet-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TestimonialSlider;
