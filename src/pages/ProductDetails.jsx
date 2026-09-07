import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContextProvider";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();

  const {
    addToCart,
    currency = "₦",
    API_URL,
  } = useContext(ShopContext);

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_BASE = "http://127.0.0.1:8000";

  const defaultCover =
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600";

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/books/${id}/`);

        if (!response.ok) {
          throw new Error("Book not found");
        }

        const data = await response.json();

        setBook(data);
      } catch (err) {
        console.error("Error loading book details:", err);
        setError("Unable to load this book.");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id, API_URL]);

  // -----------------------------
  // LOADING
  // -----------------------------
  if (loading) {
    return (
      <section className="min-h-screen bg-[#F8F5EF] pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl p-10 text-center shadow-sm">
          <p className="text-gray-500">
            Loading book details...
          </p>
        </div>
      </section>
    );
  }

  // -----------------------------
  // ERROR
  // -----------------------------
  if (error || !book) {
    return (
      <section className="min-h-screen bg-[#F8F5EF] pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl p-10 text-center shadow-sm">

          <h1 className="text-xl font-bold text-[#0B1F3A]">
            Book Not Found
          </h1>

          <p className="text-gray-500 mt-2">
            We couldn't find the book you're looking for.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-6 bg-[#0B1F3A] text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-[#16365f] transition"
          >
            <FaArrowLeft />
            Back to Shop
          </Link>

        </div>
      </section>
    );
  }

  // -----------------------------
  // IMAGE
  // -----------------------------
  const rawImage =
    book.cover_image ||
    book.image ||
    book.cover;

  const imageUrl = rawImage
    ? rawImage.startsWith("http")
      ? rawImage
      : `${API_BASE}${rawImage}`
    : defaultCover;

  // -----------------------------
  // CATEGORY NAME
  // -----------------------------
  const categoryMap = {
    criminal: "Criminal Law",
    constitutional: "Constitutional Law",
    corporate: "Corporate Law",
    property: "Property Law",
    administrative: "Administrative Law",
    contract: "Contract Law",
    family: "Family Law",
    tax: "Tax Law",
    intellectual_property: "Intellectual Property Law",
    environmental: "Environmental Law",
  };

  const categoryName =
    categoryMap[book.category] ||
    book.category
      ?.replace(/_/g, " ")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <section className="min-h-screen bg-[#F8F5EF] pt-28 pb-16 px-4 sm:px-6">

      <div className="max-w-5xl mx-auto">

        {/* BACK TO SHOP */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] hover:underline mb-6"
        >
          <FaArrowLeft className="text-xs" />
          Back to Shop
        </Link>

        {/* PRODUCT CONTAINER */}
        <div className="bg-white rounded-xl border border-[#0B1F3A]/10 shadow-sm overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* ========================= */}
            {/* BOOK COVER */}
            {/* ========================= */}

            <div className="bg-[#F8F5EF] min-h-[420px] md:min-h-[600px] flex items-center justify-center p-8">

              <img
                src={imageUrl}
                alt={book.title}
                onError={(e) => {
                  e.currentTarget.src = defaultCover;
                }}
                className="max-h-[500px] max-w-full object-contain rounded-md shadow-md"
              />

            </div>

            {/* ========================= */}
            {/* BOOK INFORMATION */}
            {/* ========================= */}

            <div className="p-6 sm:p-8 md:p-10 flex flex-col">

              {/* CATEGORY */}

              <span className="self-start text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] bg-[#F8F5EF] px-3 py-1.5 rounded-md">
                {categoryName}
              </span>

              {/* TITLE */}

              <h1 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] mt-5 leading-tight">
                {book.title}
              </h1>

              {/* AUTHOR */}

              <p className="text-sm text-gray-500 mt-3">
                Written by{" "}
                <span className="font-semibold text-gray-800">
                  {book.author}
                </span>
              </p>

              {/* PRICE */}

              <div className="mt-6">
                <span className="text-2xl sm:text-3xl font-bold text-[#0B1F3A]">
                  {currency}
                  {Number(book.price).toLocaleString()}
                </span>
              </div>

              {/* DIVIDER */}

              <div className="border-t border-gray-200 my-6" />

              {/* DESCRIPTION */}

              <div>

                <h2 className="text-lg font-bold text-[#0B1F3A] mb-3">
                  About This Book
                </h2>

                <p className="text-sm sm:text-base text-gray-600 leading-7 whitespace-pre-line">
                  {book.description ||
                    "No description is available for this book yet."}
                </p>

              </div>

              {/* ADD TO CART */}

              <button
                onClick={() => addToCart(book.id)}
                className="w-full mt-8 bg-[#0B1F3A] hover:bg-[#16365f] active:scale-[0.99] text-white py-3.5 px-6 rounded-md font-semibold flex items-center justify-center gap-2 transition"
              >
                <FaShoppingCart />
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductDetails;