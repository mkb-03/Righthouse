import { IoAdd } from "react-icons/io5";

export function PortfolioCard({ item }) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <div className="aspect-[4/3] relative">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {item.type === "service" ? (
          <div className="absolute inset-0 bg-[#141422]/50 bg-opacity-50 flex flex-col items-center justify-center text-white m-5">
            <p className="text-sm font-medium mb-2 tracking-wide">
              {item.subtitle}
            </p>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <IoAdd className="w-6 h-6 text-gray-800" />
            </div>
          </div>
        ) : (
          <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <IoAdd className="w-6 h-6 text-gray-800" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
