import React, { useContext, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContextProvider";
import BookCard from "../Componenets/Shop component/BookCard";

const Shop = () => {
  const {
    books,
    searchQuery,
  } = useContext(ShopContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "";

  // Filter books based on search and category
  const filteredBooks = useMemo(() => {
    let result = [...books];

    // -----------------------------
    // CATEGORY FILTER
    // -----------------------------
    if (category) {
      const cleanCategory = category
        .toLowerCase()
        .replace(/-/g, " ")
        .replace(/_/g, " ")
        .trim();

      result = result.filter((book) => {
        const bookCategory = (book.category || "")
          .toLowerCase()
          .replace(/-/g, " ")
          .replace(/_/g, " ")
          .trim();

        return (
          bookCategory === cleanCategory ||
          bookCategory.includes(cleanCategory) ||
          cleanCategory.includes(bookCategory)
        );
      });
    }

    // -----------------------------
    // SEARCH FILTER
    // -----------------------------
    const query = (searchQuery || "").toLowerCase().trim();

    if (query) {
      result = result.filter((book) => {
        return (
          book.title?.toLowerCase().includes(query) ||
          book.author?.toLowerCase().includes(query) ||
          book.category?.toLowerCase().includes(query)
        );
      });
    }

    return result;
  }, [books, category, searchQuery]);

  // Convert category slug into readable title
  const getCategoryTitle = () => {
    if (!category) {
      return searchQuery
        ? `Search Results for "${searchQuery}"`
        : "All Law Books";
    }

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

    return categoryMap[category.toLowerCase()] || category
      .replace(/-/g, " ")
      .replace(/_/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  };

  const clearCategory = () => {
    searchParams.delete("category");
    setSearchParams(searchParams);
  };

  return (
    <section className="min-h-screen bg-[#F8F5EF] pt-28 pb-16 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* PAGE HEADER */}
        <div className="mb-8">

          <p className="text-[#0B1F3A] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            JustLaw Bookstore
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A]">
                {getCategoryTitle()}
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                {category
                  ? `Showing books in ${getCategoryTitle()}`
                  : searchQuery
                  ? `Books matching your search`
                  : "Explore our collection of legal books"}
              </p>
            </div>

            {/* CLEAR CATEGORY */}
            {category && (
              <button
                onClick={clearCategory}
                className="self-start sm:self-auto text-sm font-semibold text-[#0B1F3A] border border-[#0B1F3A]/20 px-4 py-2 rounded-md hover:bg-[#0B1F3A] hover:text-white transition"
              >
                View All Books
              </button>
            )}

          </div>
        </div>

        {/* BOOKS */}
        {filteredBooks.length === 0 ? (

          <div className="bg-white rounded-xl border border-[#0B1F3A]/10 p-10 text-center">

            <h2 className="text-lg font-semibold text-[#0B1F3A]">
              No books found
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              {category
                ? `There are currently no books available in ${getCategoryTitle()}.`
                : "No books match your search."}
            </p>

            {category && (
              <button
                onClick={clearCategory}
                className="mt-5 bg-[#0B1F3A] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#16365f] transition"
              >
                Browse All Books
              </button>
            )}

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">

            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}

          </div>

        )}

      </div>

    </section>
  );
};

export default Shop;