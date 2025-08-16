import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../context/CartContext';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const { addItem } = useCart();

  // Sample featured products
  const featuredProducts: Product[] = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      category: 'Electronics',
      brand: 'Sony',
      description: 'High-quality wireless headphones with noise cancellation'
    },
    {
      id: '2',
      name: 'Designer Handbag',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
      category: 'Fashion',
      brand: 'Gucci',
      description: 'Luxury designer handbag made from premium materials'
    },
    {
      id: '3',
      name: 'Smart Fitness Watch',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      category: 'Electronics',
      brand: 'Apple',
      description: 'Advanced fitness tracking with health monitoring'
    },
    {
      id: '4',
      name: 'Running Shoes',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      category: 'Sports',
      brand: 'Nike',
      description: 'Professional running shoes for maximum performance'
    }
  ];

  const categories = [
    { name: "Women's Fashion Bag", icon: "👜", count: "2,500+ items" },
    { name: "Women Clothing & Fashion", icon: "👗", count: "15,000+ items" },
    { name: "Men Clothing & Fashion", icon: "👔", count: "12,000+ items" },
    { name: "Computer & Accessories", icon: "💻", count: "8,500+ items" },
    { name: "Kids & Toy", icon: "🧸", count: "6,200+ items" },
    { name: "Sports & Outdoor", icon: "⚽", count: "4,800+ items" },
    { name: "Jewelry & Watches", icon: "⌚", count: "3,100+ items" },
    { name: "Phone Accessories", icon: "📱", count: "7,300+ items" },
    { name: "Home Improvement & Tools", icon: "🔧", count: "5,600+ items" },
    { name: "Home Decoration & Appliance", icon: "🏠", count: "9,400+ items" }
  ];

  const brands = [
    { name: "Adidas", logo: "🏃", products: "1,200+" },
    { name: "Apple", logo: "🍎", products: "800+" },
    { name: "ASUS", logo: "💻", products: "600+" },
    { name: "Volvo", logo: "🚗", products: "150+" },
    { name: "Toyota", logo: "🚙", products: "200+" },
    { name: "Samsung", logo: "📱", products: "1,000+" },
    { name: "Suzuki", logo: "🏍️", products: "120+" },
    { name: "Puma", logo: "🐆", products: "900+" },
    { name: "Pampers", logo: "👶", products: "300+" },
    { name: "Audi", logo: "🚘", products: "180+" }
  ];

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <span className="text-yellow-300">Titan</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover millions of products from top brands worldwide. 
            From fashion to electronics, we have everything you need.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/products"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Shop Now
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/become-seller"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                Become a Seller
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Top 10 Categories</h2>
            <p className="text-gray-600 text-lg">Explore our wide range of product categories</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link
                  to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-primary-50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/categories"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All Categories
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Handpicked products from top brands</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={product.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">(4.8)</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-primary-600">${product.price}</span>
                    <span className="text-gray-500 text-sm">{product.category}</span>
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Top 10 Brands</h2>
            <p className="text-gray-600 text-lg">Shop from world-renowned brands</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link
                  to={`/brand/${brand.name.toLowerCase()}`}
                  className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-primary-50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{brand.logo}</div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-gray-600">{brand.products} products</p>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/brands"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All Brands
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
          >
            Ready to Start Selling?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            Join thousands of successful sellers on Titan. Start your business today and reach millions of customers worldwide.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/become-seller"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Apply Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/seller-guide"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

