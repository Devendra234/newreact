import React from 'react';
import { Facebook, Instagram, Linkedin, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">TF</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 tracking-wide">TECHFLY.CLOUD</h1>
              <p className="text-sm text-gray-500 font-medium">Fly High with Tech Solutions</p>
            </div>
          </div>

          {/* Navigation - Centered */}
          <nav className="hidden lg:flex space-x-12">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium text-lg transition-colors duration-200 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium text-lg transition-colors duration-200 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium text-lg transition-colors duration-200 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium text-lg transition-colors duration-200 relative group">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium text-lg transition-colors duration-200 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            <a href="#" className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-md">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105 shadow-md">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center hover:bg-blue-800 transition-all duration-200 hover:scale-105 shadow-md">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-purple-600 rounded-md flex items-center justify-center hover:bg-purple-700 transition-all duration-200 hover:scale-105 shadow-md">
              <Search className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button className="text-gray-700 hover:text-purple-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;