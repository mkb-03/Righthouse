import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    rating: 4,
    title: "It's Very Good Services",
    content:
      "Pellentesque in ipsum id porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit Amet dui.",
    author: {
      name: "Ronald Richards",
      position: "Founder CEO",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  },
  {
    id: 2,
    rating: 4,
    title: "It's Very Good Services",
    content:
      "Pellentesque in ipsum id porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit Amet dui.",
    author: {
      name: "Ronald Richards",
      position: "Founder CEO",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  },
  {
    id: 3,
    rating: 4,
    title: "It's Very Good Services",
    content:
      "Pellentesque in ipsum id porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit Amet dui.",
    author: {
      name: "Ronald Richards",
      position: "Founder CEO",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  },
  {
    id: 4,
    rating: 5,
    title: "Excellent Roofing Work",
    content:
      "Outstanding service and professional team. They completed our roof repair quickly and efficiently. Highly recommended!",
    author: {
      name: "Sarah Johnson",
      position: "Homeowner",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  },
  {
    id: 5,
    rating: 4,
    title: "Professional Team",
    content:
      "Great experience working with this roofing company. They were punctual, professional, and delivered quality work.",
    author: {
      name: "Mike Davis",
      position: "Property Manager",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - 3) : prev - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
      index < rating ? (
        <FaStar key={index} className="w-4 h-4 text-white" />
      ) : (
        <FaRegStar key={index} className="w-4 h-4 text-white" />
      )
    );
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#9B1915]"></div>
            <span className="text-red-700 font-medium text-sm tracking-wide uppercase">
              TESTIMONIAL
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            What Clients Say About Us
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-[#9B1915] rounded-full shadow-lg flex items-center justify-center hover:bg-red-800 transition-colors"
          >
            <IoChevronBack className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-[#9B1915] rounded-full shadow-lg flex items-center justify-center hover:bg-red-800 transition-colors"
          >
            <IoChevronForward className="w-5 h-5 text-white" />
          </button>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 shadow-sm relative"
              >
                {/* Star Rating Banner */}
                <div className="absolute top-0 left-0">
                  <div
                    className="bg-[#9B1915] px-4 py-2 flex items-center gap-1 rounded-tl-lg"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0 100%)",
                    }}
                  >
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-[#9B1915] rounded flex items-center justify-center">
                    <FaQuoteLeft className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-12 pb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {testimonial.content}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-l-2 border-red-700 pl-4">
                  <img
                    src={testimonial.author.avatar || "/placeholder.svg"}
                    alt={testimonial.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.author.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.author.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
