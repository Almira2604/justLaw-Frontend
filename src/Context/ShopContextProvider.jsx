import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      return null;
    }
  });

  const currency = "₦";

  // Railway Backend API
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://justlaw-backend-production.up.railway.app/api";

  // Local book covers
  const coverMap = {
    "Business law and practice": "/book-covers/business_law.jpeg",
    "Company law for undergraduate": "/book-covers/company_law.jpg",
    "Administrative Law in Nigeria":
      "/book-covers/Administrative_law_in_nigeria.jfif",
    "Nigerian Law of Contract":
      "/book-covers/Nigeria_law_of_contract.jfif",
    "Constitutional Law in Nigeria":
      "/book-covers/Constitutional_law.jpg",
    "Corporate Law Practice in Nigeria":
      "/book-covers/Law_in_practice.jfif",
    "Criminal Law in Nigeria": "/book-covers/criminal_law.jfif",
    "Environmental Law and Practice in Nigeria":
      "/book-covers/environmenta_law.jpg",
    "Family Law in Nigeria": "/book-covers/family_law.jfif",
    "Intellectual Property Law in Nigeria":
      "/book-covers/intellectual_law.jfif",
    "The Law of Real Property in Nigeria":
      "/book-covers/property_law.jpg",
    "Tax Law and Practice in Nigeria": "/book-covers/tax_law.jfif",
  };

  // Fetch all books
  useEffect(() => {
    fetch(`${API_URL}/books/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const booksWithCovers = data.map((book) => ({
            ...book,
            localCover: coverMap[book.title] || null,
          }));

          setBooks(booksWithCovers);
        }
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, [API_URL]);

  // Fetch cart
  const fetchCart = async () => {
    const activeUser =
      user || JSON.parse(localStorage.getItem("user") || "null");

    const userId = activeUser?.id || activeUser?.user?.id;

    if (!userId) {
      setCartItems([]);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/cart/?user=${userId}`);

      if (res.ok) {
        const data = await res.json();
        setCartItems(Array.isArray(data) ? data : []);
      } else {
        console.error("Server error fetching cart:", res.status);
      }
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  // Add to Cart
  const addToCart = async (bookId) => {
    const activeUser =
      user || JSON.parse(localStorage.getItem("user") || "null");

    const userId = activeUser?.id || activeUser?.user?.id;

    if (!userId) {
      alert("Please log in to add items to your cart.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/cart/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: userId,
          book: bookId,
          quantity: 1,
        }),
      });

      if (res.ok) {
        await fetchCart();
      } else {
        const errorText = await res.text();
        console.error("Failed to add to cart:", errorText);
      }
    } catch (err) {
      console.error("Network error adding to cart:", err);
    }
  };

  // Get total number of items in cart
  const getCartCount = () => {
    if (!Array.isArray(cartItems)) {
      return 0;
    }

    return cartItems.reduce(
      (total, item) => total + (Number(item.quantity) || 1),
      0
    );
  };

  return (
    <ShopContext.Provider
      value={{
        books,
        cartItems,
        setCartItems,
        addToCart,
        getCartCount,
        searchQuery,
        setSearchQuery,
        currency,
        user,
        setUser,
        API_URL,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;