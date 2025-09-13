import React from 'react';
import { Facebook, Instagram, Linkedin, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">TF</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">TECHFLY.CLOUD</h1>
              <p className="text-sm text-gray-600">Fly High with Tech Solutions</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Services</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Portfolio</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center hover:bg-pink-700 transition-colors">
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center hover:bg-blue-800 transition-colors">
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center hover:bg-purple-700 transition-colors">
              <Search className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;