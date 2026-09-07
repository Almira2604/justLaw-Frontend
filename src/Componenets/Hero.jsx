import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ShopContext } from "../Context/ShopContextProvider";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const { books, API_URL } = useContext(ShopContext);

  const [popularBooks, setPopularBooks] = useState([]);

  const shuffleArray = (arr) => {
    const newArr = [...arr];

    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    return newArr;
  };

  // Select books from the Django API
  useEffect(() => {
    if (!books || books.length === 0) {
      setPopularBooks([]);
      return;
    }

    const randomBooks = shuffleArray(books).slice(0, 6);

    setPopularBooks(randomBooks);
  }, [books]);

  // Django media base URL
  const API_BASE = "http://127.0.0.1:8000";

  const defaultCover =
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600";

  return (
    <section className="bg-[#F8F5EF] pt-24 pb-12 lg:pt-28 lg:pb-16">

      <div className="max-padd-container lg:flex lg:items-center gap-10 lg:gap-16">

        {/* ========================= */}
        {/* LEFT SIDE */}
        {/* ========================= */}

        <div className="flex-1 text-center lg:text-left">

          {/* Small label */}
          <p className="text-[#0B1F3A] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Your Trusted Legal Bookstore
          </p>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#0B1F3A]">
            Access Trusted
            <span className="block">
              Law Books, Anytime.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg mt-4 text-[#1A1A1A] font-medium">
            Built for Legal Minds
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-3 text-gray-600 max-w-xl mx-auto lg:mx-0">
            Get the law books you need to succeed. Explore quality legal
            textbooks, statutes, and reference materials designed for
            students, professionals, and legal minds.
          </p>

          {/* CTA */}
          <div className="mt-6 flex justify-center lg:justify-start">

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-[#0B1F3A] text-white rounded-md px-5 py-3 text-sm font-medium hover:bg-[#16365f] transition-colors duration-200"
            >
              Shop Books
              <FaArrowRight className="text-xs" />
            </Link>

          </div>

        </div>

        {/* ========================= */}
        {/* RIGHT SIDE - BOOK SWIPER */}
        {/* ========================= */}

        <div className="flex-1 flex justify-center mt-10 lg:mt-0">

          {popularBooks.length > 0 ? (

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={popularBooks.length > 2}
              slidesPerView={1}
              className="w-full max-w-[280px] sm:max-w-xs"
            >

              {popularBooks.map((book) => {

                const rawImage =
                  book.cover_image ||
                  book.image ||
                  book.cover;

                const imageUrl = rawImage
                  ? rawImage.startsWith("http")
                    ? rawImage
                    : `${API_BASE}${rawImage}`
                  : defaultCover;

                return (
                  <SwiperSlide key={book.id}>

                    {/* CLICK BOOK → PRODUCT DETAILS */}
                    <Link
                      to={`/product/${book.id}`}
                      className="block"
                    >

                      <div className="relative h-80 sm:h-96 bg-white rounded-lg shadow-md border border-[#0B1F3A]/10 overflow-hidden flex items-center justify-center group">

                        {/* BOOK IMAGE */}
                        <img
                          src={imageUrl}
                          alt={book.title}
                          onError={(e) => {
                            e.currentTarget.src = defaultCover;
                          }}
                          className="max-h-full max-w-full object-contain p-5 group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* BOOK INFO */}
                        <div className="absolute bottom-0 left-0 right-0 bg-[#0B1F3A]/95 text-white px-4 py-3">

                          <h3 className="text-sm font-semibold truncate">
                            {book.title}
                          </h3>

                          <p className="text-xs text-white/80 mt-1">
                            {book.author}
                          </p>

                          <p className="text-xs text-white/80 mt-1">
                            ₦{Number(book.price).toLocaleString()}
                          </p>

                        </div>

                      </div>

                    </Link>

                  </SwiperSlide>
                );
              })}

            </Swiper>

          ) : (

            <div className="w-full max-w-[280px] sm:max-w-xs h-80 sm:h-96 bg-white rounded-lg shadow-md border border-[#0B1F3A]/10 flex items-center justify-center">

              <p className="text-sm text-gray-500">
                Loading books...
              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
};

export default Hero;