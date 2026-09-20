import React, { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContextProvider";

const Cart = () => {
  const {
    cartItems,
    setCartItems,
    currency = "₦",
    user,
    API_URL,
  } = useContext(ShopContext);

  // Delivery Information State
  const [deliveryInfo, setDeliveryInfo] = useState({
    university: "",
    address: "",
    phone: "",
  });

  // Safe helper to extract item price
  const getItemPrice = (item) => {
    const price =
      item.book_details?.price ||
      item.book?.price ||
      item.price;

    return Number(price) || 0;
  };

  // Safe helper to extract item title
  const getItemTitle = (item) => {
    return (
      item.book_details?.title ||
      item.book?.title ||
      item.title ||
      "Law Textbook"
    );
  };

  // Calculate total price
  const totalAmount = cartItems.reduce((acc, item) => {
    return (
      acc +
      getItemPrice(item) * (item.quantity || 1)
    );
  }, 0);

  // Remove item handler
  const removeItem = (cartItemId) => {
    fetch(`${API_URL}/cart/${cartItemId}/`, {
      method: "DELETE",
    })
      .then(() => {
        setCartItems((prev) =>
          prev.filter((item) => item.id !== cartItemId)
        );
      })
      .catch((err) =>
        console.error("Error deleting item:", err)
      );
  };

  // WhatsApp Checkout Handler
  const handleWhatsAppCheckout = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      return;
    }

    // Check delivery information
    if (
      !deliveryInfo.university.trim() ||
      !deliveryInfo.address.trim() ||
      !deliveryInfo.phone.trim()
    ) {
      alert("Please fill in all campus delivery details.");
      return;
    }

    // Your WhatsApp number
    const sellerWhatsApp = "2348127059934";

    // Build the formatted order message
    let message = `*New Order - JustLaw Bookstore*\n\n`;

    message += `*Customer Details*\n`;
    message += `• *Name:* ${user?.first_name || ""} ${
      user?.last_name || ""
    }\n`;
    message += `• *Email:* ${user?.email || "N/A"}\n`;
    message += `• *Phone:* ${deliveryInfo.phone}\n\n`;

    message += `*Delivery Location*\n`;
    message += `• *University:* ${deliveryInfo.university}\n`;
    message += `• *Address:* ${deliveryInfo.address}\n\n`;

    message += `*Order Summary*\n`;

    cartItems.forEach((item, index) => {
      const title = getItemTitle(item);
      const price = getItemPrice(item);
      const qty = item.quantity || 1;

      message += `${index + 1}. *${title}* (x${qty}) - ₦${(
        price * qty
      ).toLocaleString()}\n`;
    });

    message += `\n*Total Amount:* ₦${totalAmount.toLocaleString()}\n\n`;

    message +=
      `Hello JustLaw! I would like to pay for and receive this order at my school address.`;

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp
    window.open(
      `https://wa.me/${sellerWhatsApp}?text=${encodedMessage}`,
      "_blank"
    );

    // Clear the cart from the backend
    try {
      await Promise.all(
        cartItems.map((item) =>
          fetch(`${API_URL}/cart/${item.id}/`, {
            method: "DELETE",
          })
        )
      );

      // Clear the cart in the frontend
      setCartItems([]);

      // Clear delivery form
      setDeliveryInfo({
        university: "",
        address: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  // If user isn't logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-[#F8F5EF] flex items-center justify-center pt-24">
        <p className="text-gray-700 font-medium">
          Please log in to view your cart.
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#F8F5EF] pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl border border-[#0B1F3A]/10 p-6 shadow-sm">

        <h1 className="text-2xl font-bold text-[#0B1F3A] mb-6">
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            Your cart is currently empty.
          </p>
        ) : (
          <div>

            {/* Cart Items List */}
            <div className="divide-y divide-gray-100">

              {cartItems.map((item) => {
                const title = getItemTitle(item);
                const price = getItemPrice(item);
                const qty = item.quantity || 1;

                return (
                  <div
                    key={item.id}
                    className="py-4 flex items-center justify-between gap-4"
                  >

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {title}
                      </h3>

                      <p className="text-xs text-gray-500 mt-1">
                        Qty: {qty}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">

                      <span className="font-bold text-[#0B1F3A]">
                        {currency}
                        {(price * qty).toLocaleString()}
                      </span>

                      <button
                        onClick={() =>
                          removeItem(item.id)
                        }
                        className="text-xs text-red-500 hover:underline font-medium"
                      >
                        Remove
                      </button>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* Total Display */}
            <div className="border-t border-gray-200 mt-6 pt-4 flex justify-between items-center">

              <span className="text-lg font-bold text-gray-800">
                Total:
              </span>

              <span className="text-xl font-bold text-[#0B1F3A]">
                {currency}
                {totalAmount.toLocaleString()}
              </span>

            </div>

            {/* Student Delivery Info Form */}
            <form
              onSubmit={handleWhatsAppCheckout}
              className="mt-8 border-t border-gray-200 pt-6"
            >

              <h2 className="text-lg font-bold text-[#0B1F3A] mb-4">
                Campus Delivery Details
              </h2>

              <div className="space-y-4">

                {/* University */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
                    University / Institution
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. UNILAG, OAU, ABU Zaria, LASU"
                    value={deliveryInfo.university}
                    onChange={(e) =>
                      setDeliveryInfo({
                        ...deliveryInfo,
                        university: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0B1F3A]"
                    required
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
                    Address
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your school/campus address"
                    value={deliveryInfo.address}
                    onChange={(e) =>
                      setDeliveryInfo({
                        ...deliveryInfo,
                        address: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0B1F3A]"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
                    Phone Number (WhatsApp/Call)
                  </label>

                  <input
                    type="tel"
                    placeholder="e.g. 08012345678"
                    value={deliveryInfo.phone}
                    onChange={(e) =>
                      setDeliveryInfo({
                        ...deliveryInfo,
                        phone: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0B1F3A]"
                    required
                  />
                </div>

              </div>

              {/* Submit to WhatsApp Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-3.5 px-4 rounded-md flex items-center justify-center gap-2 transition"
              >
                Send Order to WhatsApp (
                ₦{totalAmount.toLocaleString()}
                )
              </button>

            </form>

          </div>
        )}

      </div>
    </section>
  );
};

export default Cart;

