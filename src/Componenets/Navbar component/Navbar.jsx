import React, { useState, useContext } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import { FiMenu } from "react-icons/fi";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import MobileNavbar from "../Navbar component/MobileNavbar";
import { ShopContext } from "../../Context/ShopContextProvider";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Shop", link: "/shop" },
    { name: "Contact", link: "/contact" },
  ];

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // FIXED LINE BELOW: Used ShopContext instead of ShopContextProvider
  const { searchQuery, setSearchQuery, getCartCount } = useContext(ShopContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);

    if (
      e.target.value.trim() !== "" &&
      location.pathname !== "/shop"
    ) {
      navigate("/shop");
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[#0B1F3A]/10 shadow-sm">
        <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between px-6 sm:px-10 py-3">

          {/* Logo */}
          <NavLink to="/" className="shrink-0 flex items-center">
            <img
              src={Logo}
              alt="Law Books"
              className="w-10 sm:w-11 lg:w-12 object-contain"
            />
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-3">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                end={item.link === "/"}
                className={({ isActive }) =>
                  `uppercase text-xs tracking-wider font-bold px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-white bg-[#0B1F3A] shadow-md"
                      : "text-[#0B1F3A] bg-transparent hover:bg-[#0B1F3A]/15 hover:text-[#0B1F3A] hover:scale-105"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Search */}
            <div className="relative flex items-center">

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out relative ${
                  showSearch
                    ? "w-[150px] sm:w-[190px] md:w-[240px] opacity-100"
                    : "w-0 opacity-0"
                }`}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search law books..."
                  className="h-9 w-full rounded-full border border-[#0B1F3A]/20 bg-[#F8F5EF] pl-4 pr-8 text-xs sm:text-sm text-[#1A1A1A] placeholder:text-gray-400 outline-none focus:border-[#0B1F3A]"
                />

                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0B1F3A]"
                  >
                    <FaTimes size={11} />
                  </button>
                )}
              </div>

              <button
                onClick={() => setShowSearch((prev) => !prev)}
                className="p-2 rounded-full text-[#0B1F3A] hover:bg-[#0B1F3A]/10 transition-colors"
                aria-label="Search"
              >
                <IoMdSearch className="text-xl" />
              </button>
            </div>

            {/* Cart */}
            <NavLink
              to="/cart"
              className="relative text-[#0B1F3A] text-lg sm:text-xl p-2 rounded-full hover:bg-[#F8F5EF] transition-colors"
              aria-label="Shopping cart"
            >
              <FaShoppingCart />
              {getCartCount && getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </NavLink>

            {/* Login */}
            <NavLink
              to="/login"
              className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#0B1F3A] text-white text-xs sm:text-sm font-medium rounded-md hover:bg-[#16365f] transition-colors"
            >
              <IoPersonOutline className="text-base" />
              Login
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsNavbarOpen(true)}
              className="lg:hidden p-1 text-2xl sm:text-3xl text-[#0B1F3A]"
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      {isNavbarOpen && (
        <MobileNavbar
          navItems={navItems}
          setIsNavbarOpen={setIsNavbarOpen}
        />
      )}
    </>
  );
};

export default Navbar;