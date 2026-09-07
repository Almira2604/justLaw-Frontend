import React from "react";

const ShopEmpty = ({ searchQuery }) => {
  return (
    <div className="bg-white border border-[#0B1F3A]/10 rounded-lg text-center py-20 px-5 shadow-sm">
      <h2 className="text-lg font-semibold text-[#0B1F3A]">
        No law books found
      </h2>

      <p className="text-sm text-gray-500 mt-2">
        {searchQuery
          ? `We couldn't find any books matching "${searchQuery}".`
          : "There are no books available in this category yet."}
      </p>
    </div>
  );
};

export default ShopEmpty;