'use client';

import React, { useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronRight, Info, Mail, Phone, Minus, Plus, Search } from 'lucide-react';
import { Button } from '../ui/Buttons';
import Image from 'next/image';

interface GiftShopModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CountryCode {
  name: string;
  code: string;
  flag: string;
}

const GiftShopModal: React.FC<GiftShopModalProps> = ({ isOpen, onClose }) => {
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>({ name: 'Pakistan', code: '92', flag: '🇵🇰' });
  const [searchQuery, setSearchQuery] = useState('');

  // Array of country codes with names and flags
  const countryCodes: CountryCode[] = [
    { name: 'Afghanistan', code: '93', flag: '🇦🇫' },
    { name: 'Albania', code: '355', flag: '🇦🇱' },
    { name: 'Algeria', code: '213', flag: '🇩🇿' },
    { name: 'Argentina', code: '54', flag: '🇦🇷' },
    { name: 'Australia', code: '61', flag: '🇦🇺' },
    { name: 'Austria', code: '43', flag: '🇦🇹' },
    { name: 'Bangladesh', code: '880', flag: '🇧🇩' },
    { name: 'Belgium', code: '32', flag: '🇧🇪' },
    { name: 'Brazil', code: '55', flag: '🇧🇷' },
    { name: 'Canada', code: '1', flag: '🇨🇦' },
    { name: 'China', code: '86', flag: '🇨🇳' },
    { name: 'Denmark', code: '45', flag: '🇩🇰' },
    { name: 'Egypt', code: '20', flag: '🇪🇬' },
    { name: 'Finland', code: '358', flag: '🇫🇮' },
    { name: 'France', code: '33', flag: '🇫🇷' },
    { name: 'Germany', code: '49', flag: '🇩🇪' },
    { name: 'Greece', code: '30', flag: '🇬🇷' },
    { name: 'Hong Kong', code: '852', flag: '🇭🇰' },
    { name: 'India', code: '91', flag: '🇮🇳' },
    { name: 'Indonesia', code: '62', flag: '🇮🇩' },
    { name: 'Iran', code: '98', flag: '🇮🇷' },
    { name: 'Iraq', code: '964', flag: '🇮🇶' },
    { name: 'Ireland', code: '353', flag: '🇮🇪' },
    { name: 'Israel', code: '972', flag: '🇮🇱' },
    { name: 'Italy', code: '39', flag: '🇮🇹' },
    { name: 'Japan', code: '81', flag: '🇯🇵' },
    { name: 'Jordan', code: '962', flag: '🇯🇴' },
    { name: 'Kazakhstan', code: '7', flag: '🇰🇿' },
    { name: 'Kenya', code: '254', flag: '🇰🇪' },
    { name: 'Kuwait', code: '965', flag: '🇰🇼' },
    { name: 'Lebanon', code: '961', flag: '🇱🇧' },
    { name: 'Libya', code: '218', flag: '🇱🇾' },
    { name: 'Malaysia', code: '60', flag: '🇲🇾' },
    { name: 'Maldives', code: '960', flag: '🇲🇻' },
    { name: 'Mexico', code: '52', flag: '🇲🇽' },
    { name: 'Morocco', code: '212', flag: '🇲🇦' },
    { name: 'Netherlands', code: '31', flag: '🇳🇱' },
    { name: 'New Zealand', code: '64', flag: '🇳🇿' },
    { name: 'Nigeria', code: '234', flag: '🇳🇬' },
    { name: 'Norway', code: '47', flag: '🇳🇴' },
    { name: 'Oman', code: '968', flag: '🇴🇲' },
    { name: 'Pakistan', code: '92', flag: '🇵🇰' },
    { name: 'Philippines', code: '63', flag: '🇵🇭' },
    { name: 'Poland', code: '48', flag: '🇵🇱' },
    { name: 'Portugal', code: '351', flag: '🇵🇹' },
    { name: 'Qatar', code: '974', flag: '🇶🇦' },
    { name: 'Russia', code: '7', flag: '🇷🇺' },
    { name: 'Saudi Arabia', code: '966', flag: '🇸🇦' },
    { name: 'Singapore', code: '65', flag: '🇸🇬' },
    { name: 'South Africa', code: '27', flag: '🇿🇦' },
    { name: 'South Korea', code: '82', flag: '🇰🇷' },
    { name: 'Spain', code: '34', flag: '🇪🇸' },
    { name: 'Sri Lanka', code: '94', flag: '🇱🇰' },
    { name: 'Sweden', code: '46', flag: '🇸🇪' },
    { name: 'Switzerland', code: '41', flag: '🇨🇭' },
    { name: 'Syria', code: '963', flag: '🇸🇾' },
    { name: 'Taiwan', code: '886', flag: '🇹🇼' },
    { name: 'Thailand', code: '66', flag: '🇹🇭' },
    { name: 'Tunisia', code: '216', flag: '🇹🇳' },
    { name: 'Turkey', code: '90', flag: '🇹🇷' },
    { name: 'Ukraine', code: '380', flag: '🇺🇦' },
    { name: 'United Arab Emirates', code: '971', flag: '🇦🇪' },
    { name: 'United Kingdom', code: '44', flag: '🇬🇧' },
    { name: 'United States', code: '1', flag: '🇺🇸' },
    { name: 'Uruguay', code: '598', flag: '🇺🇾' },
    { name: 'Venezuela', code: '58', flag: '🇻🇪' },
    { name: 'Vietnam', code: '84', flag: '🇻🇳' },
    { name: 'Yemen', code: '967', flag: '🇾🇪' },
  ];

  // Filter countries based on search query
  const filteredCountries = countryCodes.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.code.includes(searchQuery)
  );

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
    setSearchQuery('');
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (e: React.MouseEvent) => {
    if (isCountryDropdownOpen) {
      setIsCountryDropdownOpen(false);
      setSearchQuery('');
      console.log(e)
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0  bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        style={{ pointerEvents: 'auto' }}
      >
        {/* Background overlay with pointer events disabled for background content */}
        <div
          className="absolute inset-0  bg-opacity-50"
          style={{ pointerEvents: 'none' }}
        />

        {/* Modal content with pointer events enabled */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative bg-[#1a1a1a] rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-white rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white ">The Gift Shop</h2>
            <p className="text-white text-lg">Get that hardworking man the best gift, a night out with his future forever buddy!</p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" onClick={handleClickOutside}>
            {/* Left Panel - Input and Payment */}
            <div className="space-y-6">
              {/* Phone Number Input */}
              <div className="ml-5">
                <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                <div className="relative">
                  <div className="flex items-center border-2 border-pink-400 rounded-lg relative" style={{ borderRadius: "20px" }}>
                    <button
                      className="flex absolute items-center gap-1 text-white font-medium hover:text-white transition-all duration-200 bg-pink-500 px-3 py-3 rounded-full border border-pink-400 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/20"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsCountryDropdownOpen(!isCountryDropdownOpen);
                      }}
                      style={{ marginLeft: '-28px' }}
                    >
                      <span className="text-white font-semibold drop-shadow-sm">+{selectedCountry.code}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform text-white ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="flex-1 bg-transparent text-white placeholder-gray-400 ml-12 outline-none py-2 pr-12 border-none focus:ring-0 focus:border-transparent"
                    />
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                        <Phone className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Country Code Dropdown */}
                  <AnimatePresence>
                    {isCountryDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-96 border border-gray-500 rounded-b-lg shadow-2xl z-10 max-h-96 overflow-hidden border-t-0"
                        style={{ marginTop: '-1px' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Search Field */}
                        <div className="p-4 border-b border-gray-600 bg-gray-700">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                              type="text"
                              placeholder="Search country or code..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full pl-10 pr-4 py-2 bg-gray-700 text-gray-300 placeholder-gray-400 border border-gray-600 rounded-md focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                            />
                          </div>
                        </div>

                        {/* Country List */}
                        <div className="max-h-80 overflow-y-auto">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <div
                                key={country.code}
                                onClick={() => handleCountrySelect(country)}
                                className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-700 border-b border-gray-600 transition-colors"
                              >
                                <span className="text-gray-300">{country.name}</span>
                                <span className="text-gray-300 opacity-90">+{country.code}</span>
                              </div>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-gray-400 text-center">
                              No countries found
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <p className="text-red-500 text-sm mt-1">Required</p>
                </div>
              </div>

              <div style={{ backgroundColor: "#28252D", padding: "20px", borderRadius: "20px" }}>
                <label className="block text-white text-sm font-medium mb-2 text-center">Pay Using</label>
                <div className="rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-gray-800 font-bold text-sm">G</span>
                    </div>
                    <span className="text-white">Google Pay</span>
                  </div>
                  <button className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors">
                    Change <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel - Location and Gift Options */}
            <div className="bg-opacity-50 rounded-lg p-6  border-opacity-20" style={{ backgroundColor: "#28252D" }}>
              {/* Top Row */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="bg-gray-700 text-white placeholder-gray-400 px-2 py-2 rounded-lg outline-none border border-gray-600"
                  />
                  <Info className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-white text-xl font-bold">$0</div>
                  <button style={{ background: "#28252D" }} className="w-8 h-8  rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <Minus className="w-4 h-4 text-white" />
                  </button>
                  <span className="text-white text-lg font-medium">1</span>
                  <button style={{ background: "#28252D" }} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors co">
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Map and Location */}
              <div className="mb-6 display flex-row gap-4 flex">
                <div className="text-center">
                  <Image src="https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/Rectangle_3199_7af7e3fcec.png" alt="" width={300} height={300} />
                  <label className='text-white text-sm text-center flex justify-center alitem-center gap-3' style={{
                    fontSize: "10px", background: "#413F47",
                    padding: "5px 10px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    gap: '21px',
                    margin: "0, 10px",
                  }}>WESTMINISTER</label>
                </div>


                <div>
                  <label className="block text-white font-medium ">Location</label>
                  <input
                    type="text"
                    placeholder="Lorem ipsum Altus Maximus Voya "
                    className="w-full bg-transparent text-gray-300 border-1 border-pink-400 border-opacity-20 rounded-lg px-1 py-1 outline-none focus:ring-0 focus:border-pink-400"
                  />
                  <label style={{ fontSize: "7px" }} className="block text-white text-sm font-sm">Lorem Ipsum Altus Maximus Vaya Yor Lasim Joruai Ei Baraum </label>
                  <div>
                    <h3 className="text-white font-medium mb-1" style={{ fontSize: "9px" }}>The places you could go...</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { icon: "🏰", text: "a" },
                        { icon: "🏰", text: "b" },
                        { icon: "🚗", text: "c..." },
                        { icon: "🚗", text: "Odp" },
                        { icon: "⛪", text: "e..." },
                        { icon: "⛪", text: "f..." },
                        { icon: "🚗", text: "g..." },
                        { icon: "🚗", text: "Op" }
                      ].map((option, index) => (
                        <div key={index} className="flex items-center gap-1 text-pink-500">
                          <span className="text-lg">{option.icon}</span>
                          <span className="text-sm">{option.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Gift Options */}

            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex gap-4 mt-8 justify-center">
            <Button type='primary' >
              Cancel
            </Button>
            <Button type='secondary'>
              Pay $0
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GiftShopModal;
