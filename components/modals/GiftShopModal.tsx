'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronRight, Info, Minus, Plus, Search } from 'lucide-react';
import { Button } from '../ui/Buttons';

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
  const [selectedContact, setSelectedContact] = useState<'phone' | 'email'>('phone');
  const [locationInput, setLocationInput] = useState('WESTMINSTER');
  const [currentMapLocation, setCurrentMapLocation] = useState('Westminster,London,UK');

  // Handle location change and update map
  const handleLocationChange = (newLocation: string) => {
    setLocationInput(newLocation);
    // Update map location when Enter is pressed or input loses focus
    if (newLocation.trim()) {
      const formattedLocation = newLocation.trim().replace(/\s+/g, ',');
      setCurrentMapLocation(formattedLocation);
    }
  };

  // Handle Enter key press
  const handleLocationKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLocationChange(locationInput);
    }
  };

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
          <div className="text-center mb-[40px]">
            <div className="w-[67px] h-[83px] mx-auto mb-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="68" height="83" viewBox="0 0 68 83" fill="none">
                <path d="M49.574 24.7998C47.6192 24.7998 46.8253 22.2839 48.4262 21.162L55.7941 15.9985C56.7784 15.3087 56.9363 13.9127 56.1308 13.0205L45.6678 1.43037C44.6788 0.334865 42.8846 0.651203 42.3299 2.01886L36.5449 16.2824C35.8354 18.0317 33.3203 17.9146 32.7763 16.107L29.9361 6.66836C29.5374 5.34334 27.9459 4.81382 26.8328 5.63582L16.987 12.9067C15.9638 13.6624 15.8967 15.1687 16.8487 16.0124L22.8187 21.3029C24.1962 22.5236 23.3327 24.7997 21.4922 24.7997H2C0.895429 24.7997 0 25.6952 0 26.7997V43.6511C0 44.7557 0.89543 45.6511 2 45.6511H2.70587C3.81044 45.6511 4.70587 46.5465 4.70587 47.6511V80.1407C4.70587 81.2453 5.60131 82.1407 6.70587 82.1407H60.9411C62.0456 82.1407 62.9411 81.2453 62.9411 80.1407V47.651C62.9411 46.5464 63.8365 45.651 64.9411 45.651H65.647C66.7516 45.651 67.647 44.7556 67.647 43.651V26.7998C67.647 25.6952 66.7516 24.7998 65.647 24.7998H49.574ZM43.5154 8.85248C44.0734 7.48916 45.8638 7.17644 46.8509 8.26988L50.5927 12.4147C51.3975 13.3062 51.2406 14.7011 50.2578 15.3915L42.6251 20.753C40.9906 21.9012 38.8679 20.2075 39.6246 18.3588L43.5154 8.85248ZM24.9457 11.7281C26.0588 10.9062 27.6502 11.4357 28.049 12.7607L29.3722 17.1581C29.9528 19.0875 27.6385 20.5676 26.1306 19.2313L22.8224 16.2997C21.8704 15.456 21.9375 13.9496 22.9608 13.194L24.9457 11.7281ZM29.1176 74.9279C29.1176 76.0325 28.2222 76.9279 27.1176 76.9279H11.4117C10.3072 76.9279 9.41175 76.0325 9.41175 74.9279V46.0182C9.41175 44.9136 10.3072 44.0182 11.4117 44.0182H27.1176C28.2222 44.0182 29.1176 44.9136 29.1176 46.0182V74.9279ZM29.1176 38.4381C29.1176 39.5427 28.2222 40.4381 27.1176 40.4381H6.70587C5.60131 40.4381 4.70587 39.5427 4.70587 38.4381V32.0126C4.70587 30.908 5.60131 30.0126 6.70587 30.0126H27.1176C28.2222 30.0126 29.1176 30.908 29.1176 32.0126V38.4381ZM58.2353 74.9279C58.2353 76.0325 57.3398 76.9279 56.2353 76.9279H40.5293C39.4247 76.9279 38.5293 76.0325 38.5293 74.9279V46.0182C38.5293 44.9136 39.4247 44.0182 40.5293 44.0182H56.2353C57.3398 44.0182 58.2353 44.9136 58.2353 46.0182V74.9279ZM62.9411 38.4381C62.9411 39.5427 62.0456 40.4381 60.9411 40.4381H40.5293C39.4247 40.4381 38.5293 39.5427 38.5293 38.4381V32.0126C38.5293 30.908 39.4247 30.0126 40.5293 30.0126H60.9411C62.0456 30.0126 62.9411 30.908 62.9411 32.0126V38.4381Z" fill="#C1C1C1" />
              </svg>
            </div>
            <h2 className="font-calistoga text-[22.988px] font-normal text-white mb-[20px]">The Gift Shop</h2>
            <p className="font-gilroy text-[10px] font-medium text-white" style={{ fontSize: "10px" }}>Get that hardworking man the best gift, a night out with his future forever buddy!</p>
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
                <label className="text-[#908E92] font-gilroy text-[7.3px] font-normal">Phone Number</label>
                <div className="relative" style={{
                  boxShadow: `
                          inset -3px -3px 4px rgba(255,255,255,0.10),
                          inset 5px 5px 10px rgba(0,0,0,0.32)
                        `}}>
                  <div className="flex items-center border-2 border-solid border-[#FE3C72] relative" style={{ borderRadius: "20px" }}>
                    <button
                      className="flex absolute items-center gap-1 text-white font-medium hover:text-white transition-all duration-200 p-[11px] rounded-full rounded-[57.44px] filter blur-[0.28px]"
                      style={{
                        marginLeft: '-28px',
                        background: 'linear-gradient(321deg, #DD123C 14.75%, #CC4AA6 84.81%)'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsCountryDropdownOpen(!isCountryDropdownOpen);
                      }}
                    >
                      <span className="text-white font-semibold drop-shadow-sm">+{selectedCountry.code}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform text-white ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="flex-1 bg-transparent text-white placeholder-gray-400 ml-12 outline-none py-2 pr-12 border-none focus:ring-0 focus:border-transparent w-full"
                    />
                    <div className="relative">
                      {/* Pill-shaped toggle container */}
                      <div
                        className="relative w-20 h-8 rounded-full flex items-center transition-all duration-300 ease-in-out"
                        style={{
                          background: 'linear-gradient(180deg, #FE3C72 0%, #E91E63 100%)',
                          boxShadow: `
                            0 2px 4px 0 rgba(0, 0, 0, 0.25),
                            0 4px 4px 0 rgba(0, 0, 0, 0.25),
                            2px -2px 3px 0 rgba(0, 0, 0, 0.40) inset,
                            0 -2px 8px 0 rgba(255, 255, 255, 0.20) inset
                          `
                        }}
                      >
                        {/* Animated sliding circle */}
                        <div
                          className="absolute w-8 h-8 rounded-full bg-white transition-transform duration-300 ease-in-out"
                          style={{
                            transform: selectedContact === 'phone' ? 'translateX(0)' : 'translateX(48px)',
                            left: '0px',
                            boxShadow: `
                              0 2px 4px 0 rgba(0, 0, 0, 0.15),
                              0 1px 2px 0 rgba(0, 0, 0, 0.1)
                            `
                          }}
                        />

                        {/* Phone button (left side) */}
                        <button
                          className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
                          onClick={() => setSelectedContact('phone')}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M6.8099 10.3781V10.2368H1.70573V3.16929L6.8099 6.70304L11.9141 3.16929V5.60051C12.4309 5.85494 12.8711 6.25072 13.1901 6.74544V1.75579C13.1901 0.97836 12.6159 0.342285 11.9141 0.342285H1.70573C1.00391 0.342285 0.429688 0.97836 0.429688 1.75579V10.2368C0.429688 11.0142 1.00391 11.6503 1.70573 11.6503H6.8099V10.3781ZM11.9141 1.75579L6.8099 5.28954L1.70573 1.75579H11.9141ZM12.4245 9.53004V8.46991C12.4245 7.48046 11.5313 6.70304 10.638 6.70304C9.74479 6.70304 8.85156 7.48046 8.85156 8.46991V9.53004C8.46875 9.53004 8.08594 9.95409 8.08594 10.3781V12.8518C8.08594 13.3465 8.46875 13.7705 8.85156 13.7705H12.3607C12.8073 13.7705 13.1901 13.3465 13.1901 12.9224V10.4488C13.1901 9.95409 12.8073 9.53004 12.4245 9.53004ZM11.5951 9.53004H9.68099V8.46991C9.68099 7.90451 10.1276 7.55114 10.638 7.55114C11.1484 7.55114 11.5951 7.90451 11.5951 8.46991V9.53004ZM11.3669 14.5114C11.7816 14.7117 12.2044 14.8707 12.6352 14.9885C13.0661 15.1063 13.4993 15.1828 13.9349 15.2182V13.6633L12.4355 13.3276L11.3669 14.5114Z" fill={selectedContact === 'phone' ? "#FE3C72" : "white"} />
                          </svg>
                        </button>

                        {/* Email button (right side) */}
                        <button
                          className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ml-auto"
                          onClick={() => setSelectedContact('email')}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                            <g filter="url(#filter0_f_2141_653)">
                              <path d="M12.0208 8.89277C11.8401 8.89277 11.6884 8.82492 11.5659 8.68923C11.4434 8.55353 11.3824 8.3858 11.3828 8.18602V6.06577C11.3828 5.86553 11.4441 5.69755 11.5666 5.56186C11.6891 5.42616 11.8405 5.35855 12.0208 5.35902V4.65227C12.0208 4.26356 12.1459 3.93068 12.396 3.65363C12.6461 3.37659 12.9464 3.2383 13.2969 3.23877C13.6478 3.23877 13.9483 3.37729 14.1984 3.65434C14.4485 3.93139 14.5733 4.26403 14.5729 4.65227V5.35902C14.7537 5.35902 14.9053 5.42687 15.0278 5.56257C15.1503 5.69826 15.2114 5.866 15.2109 6.06577V8.18602C15.2109 8.38627 15.1497 8.55424 15.0272 8.68994C14.9047 8.82563 14.7533 8.89324 14.5729 8.89277H12.0208ZM12.6589 5.35902H13.9349V4.65227C13.9349 4.45203 13.8736 4.28405 13.7511 4.14836C13.6286 4.01266 13.4772 3.94505 13.2969 3.94552C13.1161 3.94552 12.9645 4.01337 12.842 4.14906C12.7195 4.28476 12.6584 4.4525 12.6589 4.65227V5.35902ZM14.541 16.667C13.1693 16.667 11.832 16.3283 10.5291 15.6507C9.2263 14.9732 8.07255 14.078 7.06788 12.9651C6.06321 11.8522 5.25505 10.5741 4.6434 9.13095C4.03175 7.68776 3.72614 6.20665 3.72656 4.68761C3.72656 4.47558 3.79036 4.2989 3.91797 4.15755C4.04557 4.0162 4.20508 3.94552 4.39649 3.94552H6.98047C7.12934 3.94552 7.26226 3.99853 7.37923 4.10454C7.4962 4.21055 7.56532 4.34601 7.58659 4.51092L8.0013 6.98455C8.02257 7.14946 8.01981 7.29976 7.99301 7.43545C7.96621 7.57115 7.90517 7.69177 7.8099 7.79731L6.2627 9.52885C6.70931 10.3769 7.27034 11.172 7.9458 11.9141C8.62125 12.6562 9.36284 13.2982 10.1706 13.84L11.6699 12.1792C11.7656 12.0731 11.8907 11.9935 12.0451 11.9403C12.1995 11.887 12.3509 11.8724 12.4994 11.8965L14.7005 12.3912C14.8494 12.4265 14.9717 12.5062 15.0674 12.6301C15.1631 12.754 15.2109 12.8982 15.2109 13.0626V15.9249C15.2109 16.137 15.1471 16.3136 15.0195 16.455C14.8919 16.5963 14.7324 16.667 14.541 16.667ZM5.65658 8.18602L6.70931 7.01988L6.43815 5.35902H5.01856C5.07172 5.84197 5.14616 6.31902 5.24186 6.79019C5.33757 7.26136 5.4758 7.72663 5.65658 8.18602ZM11.3669 14.5114C11.7816 14.7117 12.2044 14.8707 12.6352 14.9885C13.0661 15.1063 13.4993 15.1828 13.9349 15.2182V13.6633L12.4355 13.3276L11.3669 14.5114Z" fill={selectedContact === 'email' ? "#FE3C72" : "white"} />
                            </g>
                            <defs>
                              <filter id="filter0_f_2141_653" x="0.947592" y="0.4598" width="17.0423" height="18.9862" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="1.38949" result="effect1_foregroundBlur_2141_653" />
                              </filter>
                            </defs>
                          </svg>
                        </button>
                      </div>
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

              <div style={{
                backgroundColor: "#28252D", padding: "20px", borderRadius: "20px", boxShadow: `
      inset -3px -3px 4px rgba(255,255,255,0.10),
      inset 5px 5px 10px rgba(0,0,0,0.32)
    `}} >
                <label className="text-[#949296] font-[Gilroy] text-[10.25px] font-medium text-center block">Pay Using</label>
                <div className="rounded-lg p-4 flex items-cente flex-col sm:justify-between sm:flex-row">
                  <div className="flex items-center gap-3">
                    <div className="">
                      <span className="text-white font-bold text-sm text-[30px]" style={{
                        textShadow: `
                            0 0 10px #fff,
                            0 0 20px #fff,
                            0 0 30px #ff00ff,
                            0 0 40px #ff00ff
                          `,
                      }}>G</span>
                    </div>
                    <span className="text-white">Google Pay</span>
                  </div>
                  <button className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors text-shadow-[0_0_20px_#FE3C72]">
                    Change <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel - Location and Gift Options */}
            <div className="bg-[#28252D] bg-opacity-50 rounded-[5px] p-4 border-opacity-20">
              {/* Top Row */}
              <div className="flex items-center justify-between mb-2 flex-col sm:flex-row">
                <div className="flex items-center gap-2 flex-1">
                  <input
                    type="text"
                    value={locationInput}
                    placeholder="Type location and press Enter..."
                    className="w-full rounded-[41.516px] border-[2px] border-[#fd3971] bg-gradient-to-br from-[#27242C] via-[#27242C] to-[#0C0B0E] px-1 py-1 outline-none focus:ring-0 focus:border-pink-400"
                    onChange={(e) => setLocationInput(e.target.value)}
                    onKeyPress={handleLocationKeyPress}
                    onBlur={() => handleLocationChange(locationInput)}
                  />
                  <Info className="w-5 h-5 text-white" />
                </div>
                <div className="text-[#FE3C72] font-[Gilroy] text-[20px] font-bold flex-1 text-right">$0</div>
                <div className="flex items-center gap-2 flex-1 justify-end">

                  <button style={{
                    background: 'linear-gradient(180deg, #323133 0%, #1F1E20 100%)',
                    boxShadow: `
                      0 2px 4px 0 rgba(0, 0, 0, 0.25),
                      0 4px 4px 0 rgba(0, 0, 0, 0.25),
                      2px -2px 3px 0 rgba(0, 0, 0, 0.40) inset,
                      0 -2px 8px 0 rgba(255, 255, 255, 0.20) inset
                    `,
                  }} className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors text-[#FE3C72]">
                    <Minus className="w-4 h-4 text-[#FE3C72] font-bold" />
                  </button>
                  <span className="text-white text-lg font-medium">1</span>
                  <button style={{
                    background: 'linear-gradient(180deg, #323133 0%, #1F1E20 100%)',
                    boxShadow: `
                      0 2px 4px 0 rgba(0, 0, 0, 0.25),
                      0 4px 4px 0 rgba(0, 0, 0, 0.25),
                      2px -2px 3px 0 rgba(0, 0, 0, 0.40) inset,
                      0 -2px 8px 0 rgba(255, 255, 255, 0.20) inset
                    `,
                  }} className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <Plus className="w-4 h-4 text-[#FE3C72] font-bold" />
                  </button>
                </div>
              </div>

              {/* Map and Location */}
              <div className="mb-6 display flex-col gap-4 flex sm:flex-row">
                <div className="text-center h-auto flex-1">
                  {/* Google Maps Search */}
                  <div className="w-full h-64 rounded-lg overflow-hidden border-2 border-gray-600 xl:h-[135px]">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(currentMapLocation)}&output=embed&z=10`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${currentMapLocation}`}
                      key={currentMapLocation} // Force re-render when location changes
                    ></iframe>
                  </div>

                  <label className='text-white text-sm text-center flex justify-center items-center gap-3 mt-2' style={{
                    fontSize: "10px",
                    background: "#413F47",
                    padding: "5px 10px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                    gap: '21px',
                    margin: "0 10px",
                  }}>WESTMINSTER</label>
                </div>


                <div className="flex-2">
                  <label className="block text-[4.57px] font-normal text-[#908E92] font-gilroy ml-4 mt-[2px]">Location</label>
                  <input
                    type="text"
                    placeholder="Lorem ipsum Altus Maximus Voya "
                    className="w-full text-white px-1 py-1 rounded-[41.516px] border-[2px] border-[#fd3971] bg-gradient-to-br from-[#27242C] via-[#27242C] to-[#0C0B0E] px-1 py-1 outline-none focus:ring-0 focus:border-pink-400"
                    onChange={(e) => setLocationInput(e.target.value)}
                    onKeyPress={handleLocationKeyPress}
                    onBlur={() => handleLocationChange(locationInput)}
                  />
                  <label className="block font-sm text-[4px] text-[#FE3C72] ml-4 mt-[2px]">Lorem Ipsum Altus Maximus Vaya Yor Lasim Joruai Ei Baraum </label>
                  <div className="mt-4">
                    <span className="text-[#bdbdbd]  font-gilroy text-[6.944px] font-normal leading-[7.916px] tracking-[-0.076px] block">The places you could go...</span>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
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
            <Button type='secondary' className='rounded-[33.981px] border border-[1.019px] border-[rgba(10,9,9,0.45)] bg-[linear-gradient(180deg,rgba(62,64,69,0.5) 0%,rgba(62,64,69,0) 8.33%),radial-gradient(170.95% 118.01% at 8.39% 32.81%,rgba(67,64,70,0.5) 0%,rgba(41,37,45,0.5) 28.24%,rgba(10,10,11,0.5) 100%)] text-center text-shadow-[0_0_4.768px_#fff,0_0_23.839px_#fe3c72,0_0_23.839px_#fe3c72] text-[15.819px] font-normal font-family-[Calistoga] text-white'>
              Cancel
            </Button>
            <Button type='primary' className='rounded-[33.98px] border border-[1.02px] border-solid border-[rgba(10,9,9,0.45)] 
            bg-gradient-to-b from-[rgba(62,64,69,0.5)] via-[rgba(62,64,69,0)] to-[rgba(62,64,69,0)] 
            bg-[radial-gradient(170.95%_118.01%_at_8.39%_32.81%,_rgba(67,64,70,0.5)_0%,_rgba(41,37,45,0.5)_28.24%,_rgba(10,10,11,0.5)_100%)] 
            text-[#FE638E] text-center 
            shadow-[0_0_11.643px_#FE3C72,0_0_11.643px_#FE3C72] 
            font-[Calistoga] text-[15.82px] font-normal leading-[1.6] 
            text-shadow-[0_0_11.643px_#FE3C72,0_0_11.643px_#FE3C72]' >
              Pay $0
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GiftShopModal;
