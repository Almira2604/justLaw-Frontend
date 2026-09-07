import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const CartSummary = ({ cartData, subtotal, currency }) => {
  const whatsappNumber = "2348127059934";

  const handleWhatsAppCheckout = () => {
    let orderText = "Hello Law Books! I would like to place an order for:\n\n";

    cartData.forEach((item, index) => {
      orderText += `${index + 1}. *${item.name}*\n   Qty: ${item.quantity} | Price: ${currency}${item.price.toLocaleString()} each\n`;
    });

    orderText += `\n*Total Amount:* ${currency}${subtotal.toLocaleString()}\n\nPlease let me know how to proceed with payment and delivery.`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderText)}`;
    window.open(url, "_blank");
  };

  const totalItems = cartData.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white rounded-lg border border-[#0B1F3A]/10 p-6 shadow-sm h-fit">
      <h2 className="text-lg font-bold text-[#0B1F3A] mb-4 pb-3 border-b border-gray-100">
        Order Summary
      </h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-[#838992]">
          <span>Total Items</span>
          <span className="font-semibold text-[#1A1A1A]">{totalItems}</span>
        </div>

        <div className="flex justify-between text-[#838992]">
          <span>Subtotal</span>
          <span className="font-semibold text-[#0B1F3A]">
            {currency}{subtotal?.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between text-[#838992]">
          <span>Delivery Fee</span>
          <span className="text-xs text-[#838992]">Calculated on WhatsApp</span>
        </div>

        <div className="border-t border-gray-100 pt-3 mt-3 flex justify-between text-base font-bold text-[#0B1F3A]">
          <span>Total</span>
          <span>{currency}{subtotal?.toLocaleString()}</span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <button
          onClick={handleWhatsAppCheckout}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm text-sm"
        >
          <FaWhatsapp className="text-lg" />
          Order via WhatsApp
        </button>

        <p className="text-[11px] text-[#838992] text-center">
          Fastest delivery confirmation & support on WhatsApp.
        </p>
      </div>
    </div>
  );
};

export default CartSummary;