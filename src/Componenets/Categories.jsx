import React from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "./data";

function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (slug) => {
    navigate(`/shop?category=${slug}`);
  };

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-padd-container">

        {/* Header */}
        <div className="mb-8 text-center md:text-left">

          <p className="text-[#0B1F3A] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            Explore Our Collection
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1F3A]">
            Browse by Legal Discipline
          </h2>

          <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
            Explore textbooks, statutes, and reference materials across
            different areas of law.
          </p>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">

          {categories.map((item) => (
            <div
              key={item.slug}
              onClick={() => handleCategoryClick(item.slug)}
              className="group cursor-pointer bg-[#F8F5EF] p-4 rounded-lg border border-[#0B1F3A]/10 hover:border-[#0B1F3A]/30 hover:shadow-md transition-all duration-300"
            >

              {/* Image */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white rounded-full overflow-hidden flex items-center justify-center mb-3 border border-[#0B1F3A]/10 group-hover:scale-105 transition-transform duration-300">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Category Name */}
              <p className="text-xs sm:text-sm font-semibold text-center text-[#0B1F3A] group-hover:text-[#1A1A1A] transition-colors">
                {item.name}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;