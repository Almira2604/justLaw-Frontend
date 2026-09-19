import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContextProvider";

const BookCard = ({ book }) => {
  const { currency = "₦", addToCart } = useContext(ShopContext);

  const defaultCover =
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600";

  // Use the local cover from the frontend first.
  // This is where our 12 old book covers are coming from.
  const rawImage = book.localCover || book.cover_image || book.image || book.cover;

  const imageUrl = rawImage
    ? rawImage.startsWith("http")
      ? rawImage
      : rawImage
    : defaultCover;

  const bookId = book.id || book._id;
  const bookTitle = book.title || book.name;

  return (
    <div className="group bg-white rounded-lg border border-[#0B1F3A]/10 p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">

      {/* Clickable Area for Product Details */}
      <Link to={`/product/${bookId}`} className="block flex-1">

        {/* Book Cover */}
        <div className="h-44 sm:h-52 md:h-56 w-full bg-[#F8F5EF] rounded-md overflow-hidden flex items-center justify-center mb-4">
          <img
            src={imageUrl}
            alt={bookTitle}
            onError={(e) => {
              e.target.src = defaultCover;
            }}
            className="max-h-full max-w-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Category */}
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
          {book.category}
        </span>

        {/* Book Title */}
        <h3 className="text-sm sm:text-base font-semibold text-[#1A1A1A] mt-1 line-clamp-2 group-hover:text-[#16365f] transition-colors">
          {bookTitle}
        </h3>

        {/* Author */}
        <p className="text-xs text-gray-500 mt-1 line-clamp-1">
          By {book.author}
        </p>

      </Link>

      {/* Price + Cart Action */}
      <div className="flex items-center justify-between gap-2 border-t border-gray-100 mt-4 pt-3">

        <span className="text-sm sm:text-base font-bold text-[#0B1F3A]">
          {currency}
          {Number(book.price)?.toLocaleString()}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart && addToCart(bookId);
          }}
          className="bg-[#0B1F3A] hover:bg-[#16365f] active:scale-95 text-white text-[10px] sm:text-xs font-medium px-3 py-2 rounded-md transition-all duration-200"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default BookCard;