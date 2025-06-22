import { useEffect, useState, useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { portfolioItems } from "./portfolio-data";
import { filterCategories } from "./filter-categories";
import { PortfolioCard } from "./portfolio-card";

const SLIDES_TO_SHOW = 3;
const AUTO_SCROLL_INTERVAL = 3000;

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [slideIndex, setSlideIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleFilterChange = (id) => {
    setActiveFilter(id);
    setSlideIndex(0);
    stopAutoSlide(); // stop auto when switching
  };

  // Auto-scroll effect only when "all" is active
  useEffect(() => {
    if (activeFilter === "all") {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
    return stopAutoSlide;
  }, [activeFilter]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % portfolioItems.length);
    }, AUTO_SCROLL_INTERVAL);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  let filteredItems;
  if (activeFilter === "all") {
    const total = portfolioItems.length;
    filteredItems = [];
    for (let i = 0; i < SLIDES_TO_SHOW; i++) {
      filteredItems.push(portfolioItems[(slideIndex + i) % total]);
    }
  } else {
    filteredItems = portfolioItems.filter((item) => item.category === activeFilter);
  }

  const handlePrev = () => {
    if (activeFilter !== "all") return;
    setSlideIndex((prev) =>
      (prev - 1 + portfolioItems.length) % portfolioItems.length
    );
  };

  const handleNext = () => {
    if (activeFilter !== "all") return;
    setSlideIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === category.id
                    ? "bg-[#9B1915] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        <div className="relative">
          {activeFilter === "all" && (
            <>
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                onClick={handlePrev}
              >
                <IoChevronBack className="w-5 h-5 text-gray-600" />
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#9B1915] rounded-full shadow-lg flex items-center justify-center hover:bg-red-800 transition-colors"
                onClick={handleNext}
              >
                <IoChevronForward className="w-5 h-5 text-white" />
              </button>
            </>
          )}

          <div
            className={`grid transition-transform duration-700 ease-in-out grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
          >
            {filteredItems.map((item, idx) => (
              <PortfolioCard key={item.id + "-" + idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
