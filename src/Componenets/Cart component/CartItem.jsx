import React from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const CartItem = ({ item, currency, updateQuantity, removeFromCart }) => {
  return (
    <div className="bg-white rounded-lg border border-[#0B1F3A]/10 p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Book Image & Info */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="w-16 h-20 bg-[#F8F5EF] rounded-md overflow-hidden shrink-0 flex items-center justify-center p-1">
          <img
            src={item.cover_image}
            alt={item.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#838992]">
            {item.category}
          </span>
          <h3 className="text-sm font-semibold text-[#1A1A1A] line-clamp-1">
            {item.name}
          </h3>
          <p className="text-xs text-[#838992]">By {item.author}</p>
          <p className="text-sm font-bold text-[#0B1F3A] mt-1 sm:hidden">
            {currency}{item.price?.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Quantity & Actions */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
        <span className="hidden sm:block text-sm font-bold text-[#0B1F3A]">
          {currency}{item.price?.toLocaleString()}
        </span>

        {/* Quantity Controls */}
        <div className="flex items-center border border-[#0B1F3A]/20 rounded-md bg-[#F8F5EF]">
          <button
            onClick={() => updateQuantity && updateQuantity(item._id, item.quantity - 1)}
            className="p-2 text-[#0B1F3A] hover:bg-[#0B1F3A]/10 rounded-l-md transition-colors"
            aria-label="Decrease quantity"
          >
            <FaMinus size={10} />
          </button>
          <span className="px-3 text-xs font-semibold text-[#0B1F3A]">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity && updateQuantity(item._id, item.quantity + 1)}
            className="p-2 text-[#0B1F3A] hover:bg-[#0B1F3A]/10 rounded-r-md transition-colors"
            aria-label="Increase quantity"
          >
            <FaPlus size={10} />
          </button>
        </div>

        {/* Item Total */}
        <span className="text-sm font-bold text-[#0B1F3A] w-20 text-right">
          {currency}{(item.price * item.quantity)?.toLocaleString()}
        </span>

        {/* Delete Button */}
        <button
          onClick={() => removeFromCart && removeFromCart(item._id)}
          className="text-[#838992] hover:text-red-600 transition-colors p-2"
          aria-label="Remove item"
        >
          <FaTrash size={14} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;