"use client"

import { useState } from "react"
import { IoChevronBack, IoChevronForward, IoAdd } from "react-icons/io5"

const portfolioItems = [
  {
    id: 1,
    category: "roofing",
    image: "/placeholder.svg?height=400&width=400",
    title: "Gutter Installation",
    type: "image",
  },
  {
    id: 2,
    category: "roofing",
    image: "/placeholder.svg?height=400&width=400",
    title: "Roof Repair Services",
    subtitle: "REPAIR SERVICES",
    type: "service",
  },
  {
    id: 3,
    category: "roofing",
    image: "/placeholder.svg?height=400&width=400",
    title: "Tile Roofing",
    type: "image",
  },
]

const filterCategories = [
  { id: "all", label: "All Show" },
  { id: "roofing", label: "Roofing" },
  { id: "property", label: "Property Maintenance" },
  { id: "loft", label: "Loft Insulation" },
  { id: "solar", label: "Solar Panel Cleaning" },
  { id: "moss", label: "Moss Removal" },
]

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#9B1915]"></div>
            <span className="text-red-700 font-medium text-sm tracking-wide uppercase">PORTFOLIO</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">We're proud of the Same works</h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === category.id ? "bg-[#9B1915] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <IoChevronBack className="w-5 h-5 text-gray-600" />
          </button>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#9B1915] rounded-full shadow-lg flex items-center justify-center hover:bg-red-800 transition-colors">
            <IoChevronForward className="w-5 h-5 text-white" />
          </button>

          {/* Portfolio Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-[4/3] relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Overlay for service type items */}
                  {item.type === "service" && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                      <p className="text-sm font-medium mb-2 tracking-wide">{item.subtitle}</p>
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <IoAdd className="w-6 h-6 text-gray-800" />
                      </div>
                    </div>
                  )}

                  {/* Hover overlay for regular images */}
                  {item.type === "image" && (
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <IoAdd className="w-6 h-6 text-gray-800" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
