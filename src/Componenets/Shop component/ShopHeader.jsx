import React from "react";

const ShopHeader = ({ bookCount, searchQuery, categoryQuery }) => {
  return (
    <div className="mb-8">
      {/* Header Info */}
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A] mb-2">
        Legal Book Collection
      </p>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#0B1F3A]">
            Law Books
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-1">
            Explore textbooks, statutes, and legal reference materials.
          </p>
        </div>

        {/* Book Count */}
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-[#0B1F3A]">{bookCount}</span>{" "}
          {bookCount === 1 ? "book" : "books"}
        </p>
      </div>

      {/* Active Filter Badges */}
      {(searchQuery || categoryQuery) && (
        <div className="mt-6 flex flex-wrap gap-2">
          {searchQuery && (
            <div className="bg-white border border-[#0B1F3A]/10 rounded-full px-4 py-2 text-xs text-[#0B1F3A]">
              Search: <span className="font-semibold">{searchQuery}</span>
            </div>
          )}

          {categoryQuery && (
            <div className="bg-white border border-[#0B1F3A]/10 rounded-full px-4 py-2 text-xs text-[#0B1F3A]">
              Category:{" "}
              <span className="font-semibold">
                {categoryQuery.replace(/-/g, " ")}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopHeader;