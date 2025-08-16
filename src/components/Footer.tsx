import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">TitanGo</h3>
            <p className="text-gray-300 mb-4">
              Your trusted destination for quality products from top brands worldwide. 
              Discover fashion, electronics, home goods, and more.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p className="font-medium">Headquarters Address:</p>
                  <p>SIPCOT Industrial Complex, Hosur – 635126,</p>
                  <p>Krishnagiri District, Tamil Nadu, India</p>
                  <br />
                  <p className="font-medium">Company Headquarters:</p>
                  <p>Titan Company Limited, Golden Enclave, Tower-A,</p>
                  <p>HAL Old Airport Road, Bengaluru – 560017,</p>
                  <p>Karnataka, India</p>
                  <br />
                  <p className="font-medium">Branch Address:</p>
                  <p>Mies van der Rohe Street 6 & 8,</p>
                  <p>80807 Munich, Germany</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-400" />
                <span className="text-gray-300">+49 157 75127832</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-400" />
                <span className="text-gray-300">global@titango.fun</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/support-policy" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Support Policy Page
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Return Policy Page
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Privacy Policy Page
                </Link>
              </li>
              <li>
                <Link to="/seller-policy" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Seller Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Terms & Conditions Page
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account & Seller */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">My Account</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/login" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/order-history" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Order History
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-300 hover:text-primary-400 transition-colors">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/affiliate" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Be an Affiliate Partner
                </Link>
              </li>
            </ul>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-400">Be A Seller</h4>
              <Link
                to="/become-seller"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2 text-primary-400">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">Get the latest updates on new products and special offers</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-r-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 TitanGo. All rights reserved. | 
            <Link to="/terms" className="hover:text-primary-400 ml-2">Terms & Conditions</Link> | 
            <Link to="/privacy" className="hover:text-primary-400 ml-2">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

