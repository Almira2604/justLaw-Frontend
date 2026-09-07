import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const CartEmpty = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-[#0B1F3A]/10 rounded-lg text-center py-20 px-5 max-w-lg mx-auto shadow-sm">
      <div className="w-16 h-16 bg-[#F8F5EF] rounded-full flex items-center justify-center mx-auto mb-4 text-[#838992]">
        <FaShoppingBag size={28} />
      </div>

      <h2 className="text-lg font-semibold text-[#0B1F3A]">
        Your cart is currently empty
      </h2>

      <p className="text-sm text-[#838992] mt-2 mb-6">
        Looks like you haven't added any legal textbooks to your cart yet.
      </p>

      <button
        onClick={() => navigate("/shop")}
        className="bg-[#0B1F3A] hover:bg-[#16365f] text-white text-xs font-semibold px-6 py-3 rounded-md transition-colors"
      >
        Explore Shop
      </button>
    </div>
  );
};

export default CartEmpty;