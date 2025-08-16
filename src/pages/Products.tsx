import React, { useState, useEffect } from 'react';
import { Filter, Grid, List, Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../context/CartContext';

const Products: React.FC = () => {
  const { addItem } = useCart();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Sample products data
  const [products] = useState<Product[]>([
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
    },
    {
      id: '5',
      name: 'Laptop Computer',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
      category: 'Electronics',
      brand: 'Dell',
      description: 'High-performance laptop for work and gaming'
    },
    {
      id: '6',
      name: 'Smartphone',
      price: 699.99,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      category: 'Electronics',
      brand: 'Samsung',
      description: 'Latest smartphone with advanced camera features'
    },
    {
      id: '7',
      name: 'Casual T-Shirt',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      category: 'Fashion',
      brand: 'Adidas',
      description: 'Comfortable casual t-shirt for everyday wear'
    },
    {
      id: '8',
      name: 'Coffee Maker',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
      category: 'Home',
      brand: 'Breville',
      description: 'Automatic coffee maker for perfect brew every time'
    }
  ]);

  const categories = ['Electronics', 'Fashion', 'Sports', 'Home', 'Books', 'Toys'];
  const brands = ['Sony', 'Gucci', 'Apple', 'Nike', 'Dell', 'Samsung', 'Adidas', 'Breville'];

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesCategory && matchesBrand && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'featured':
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">All Products</h1>
          <p className="text-gray-600">Discover amazing products from top brands</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Filter size={20} />
                </button>
              </div>

              <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
                {/* Sort By */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Brands</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandChange(brand)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                    setPriceRange([0, 1000]);
                  }}
                  className="w-full text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* View Controls */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    {sortedProducts.length} products found
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${
                      viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                        <Heart size={16} className="text-gray-600" />
                      </button>
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
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center space-x-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} fill="currentColor" />
                            ))}
                          </div>
                          <span className="text-gray-500 text-sm ml-2">(4.8)</span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-2">{product.brand} • {product.category}</p>
                        <p className="text-gray-700 text-sm mb-4">{product.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-bold text-primary-600">${product.price}</span>
                          <div className="flex items-center space-x-3">
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                              <Heart size={20} className="text-gray-600" />
                            </button>
                            <button
                              onClick={() => handleAddToCart(product)}
                              className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-6 rounded-lg font-medium transition-colors flex items-center"
                            >
                              <ShoppingCart size={18} className="mr-2" />
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                    setPriceRange([0, 1000]);
                  }}
                  className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

