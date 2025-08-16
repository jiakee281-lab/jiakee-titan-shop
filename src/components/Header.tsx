import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Globe, DollarSign } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const { state } = useCart();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const currencies = [
    { code: 'USD', symbol: '$', name: 'U.S. Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'Pound Sterling' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
    { code: 'CAD', symbol: '$', name: 'Canadian Dollar' },
    { code: 'AUD', symbol: '$', name: 'Australian Dollar' },
  ];

  const categories = [
    "Women's Fashion Bag",
    "Women Clothing & Fashion",
    "Men Clothing & Fashion",
    "Computer & Accessories",
    "Kids & Toy",
    "Sports & Outdoor",
    "Jewelry & Watches",
    "Phone Accessories",
    "Home Improvement & Tools",
    "Home Decoration & Appliance",
  ];

  const brands = [
    "Adidas", "Apple", "ASUS", "Volvo", "Toyota", 
    "Samsung", "Suzuki", "Puma", "Pampers", "Audi"
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 hover:bg-primary-700 px-3 py-1 rounded"
              >
                <Globe size={16} />
                <span>English</span>
              </motion.button>
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 bg-white text-gray-800 rounded-lg shadow-lg border min-w-[200px]"
                  >
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Currency Selector */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center space-x-2 hover:bg-primary-700 px-3 py-1 rounded"
              >
                <DollarSign size={16} />
                <span>USD</span>
              </motion.button>
              <AnimatePresence>
                {isCurrencyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 bg-white text-gray-800 rounded-lg shadow-lg border min-w-[200px]"
                  >
                    {currencies.map((currency, index) => (
                      <motion.button
                        key={currency.code}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <span>{currency.symbol}</span>
                        <span>{currency.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/become-merchant" className="hover:bg-primary-700 px-3 py-1 rounded">
              Become a Merchant
            </Link>
            <Link to="/login" className="hover:bg-primary-700 px-3 py-1 rounded">
              Login
            </Link>
            <Link to="/register" className="hover:bg-primary-700 px-3 py-1 rounded">
              Registration
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="text-3xl font-bold text-primary-600">
              Titan
            </Link>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="hidden md:flex flex-1 max-w-2xl mx-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Search for products, brands, and categories..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </motion.div>

          {/* Right side icons */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-full">
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
                <span className="sr-only">Wishlist</span>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart size={24} className="text-gray-700" />
                {state.items.length > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {state.items.length}
                  </motion.span>
                )}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/account" className="p-2 hover:bg-gray-100 rounded-full">
                <User size={24} className="text-gray-700" />
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 py-3">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium">
              Home
            </Link>
            <Link to="/blogs" className="text-gray-700 hover:text-primary-600 font-medium">
              Blogs
            </Link>
            <Link to="/brands" className="text-gray-700 hover:text-primary-600 font-medium">
              All Brands
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-primary-600 font-medium">
              All Categories
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              {/* Mobile search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.slice(0, 8).map((category, index) => (
                    <Link
                      key={index}
                      to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-gray-600 hover:text-primary-600 p-2 hover:bg-gray-50 rounded"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Top Brands</h3>
                <div className="grid grid-cols-2 gap-2">
                  {brands.slice(0, 6).map((brand, index) => (
                    <Link
                      key={index}
                      to={`/brand/${brand.toLowerCase()}`}
                      className="text-sm text-gray-600 hover:text-primary-600 p-2 hover:bg-gray-50 rounded"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

