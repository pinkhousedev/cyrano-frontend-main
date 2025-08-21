"use client";
import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useNavigationLink } from "@/lib/hooks/useNavigationLink";
import { usePathname } from "next/navigation";
import Image from "next/image";
import PaymentSection from "../sections/Payment/PaymentSection";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import DarkModeSwitcher from "../ui/ThemeSwitcher";
import { Button } from "../ui/Buttons";
import GiftShopModal from "../modals/GiftShopModal";

import Ticker from "../sections/Ticker";


  const mockTickerSection = {
    __component: "sections.ticker" as const,
    id: 1,
    items: [
      {
        id: 1,
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  3.  Learn More",
        logo: null
      },
      {
        id: 2,
        name: "Lorem Ipsum 1.  Learn More",
        logo: null
      },
      {
        id: 3,
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  2.  Learn More",
        logo: null
      }
    ],
    speed: 1
  };



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isGiftShopModalOpen, setIsGiftShopModalOpen] = useState(false);
  const [isTickerVisible, setIsTickerVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { data, loading } = useNavigationLink();
  const pathname = usePathname();

  const toggleMenu = useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen]);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const openPaymentModal = useCallback(() => {
    setIsPaymentModalOpen(true);
    setIsMenuOpen(false); // Always close menu when opening modal
  }, [setIsMenuOpen]);
  
  const closePaymentModal = useCallback(() => setIsPaymentModalOpen(false), []);

  const openGiftShopModal = useCallback(() => {
    setIsGiftShopModalOpen(true);
    setIsMenuOpen(false); // Always close menu when opening modal
  }, [setIsMenuOpen]);

  const closeGiftShopModal = useCallback(() => setIsGiftShopModalOpen(false), []);

  // Vertical scroll effect to hide/show ticker
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbarHeight = 96; // Height of navbar (h-24 = 96px)
      
      // Show ticker when at top, hide when scrolled down to navbar level
      if (currentScrollY <= 0) {
        // At the very top
        setIsTickerVisible(true);
      } else if (currentScrollY >= navbarHeight) {
        // Scrolled down to navbar level or beyond
        setIsTickerVisible(false);
      } else if (currentScrollY < navbarHeight) {
        // Between top and navbar level
        setIsTickerVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActiveLink = useCallback((url: string) =>
    (url === "/" && pathname === "/") ||
    (url !== "/" && pathname.startsWith(url)), [pathname]);

  // Memoize navigation items to prevent unnecessary re-renders
  const navigationItems = useMemo(() => {
    if (data?.navigation && data.navigation.length > 0) {
      return data.navigation.map((item, index) => (
        <React.Fragment key={item.id}>
          {item.url === "/gift-meetups" ? (
            <button
              onClick={openGiftShopModal}
              className={`font-semibold text-sm uppercase transition-colors duration-200 cursor-pointer ${
                isActiveLink(item.url)
                  ? "text-pink-500"
                  : "text-white hover:text-pink-400"
              }`}
            >
              {item.label}
            </button>
          ) : (
            <Link
              href={item.url}
              className={`font-semibold text-sm uppercase transition-colors duration-200 ${
                isActiveLink(item.url)
                  ? "text-pink-500"
                  : "text-white hover:text-pink-400"
              }`}
            >
              {item.label}
            </Link>
          )}
          {index < data.navigation.length - 1 && (
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-6"></div>
          )}
        </React.Fragment>
      ));
    }
    
    // Fallback navigation items
    return (
      <>
        <Link
          href="/user-type1"
          className="font-semibold text-sm uppercase transition-colors duration-200 text-white hover:text-pink-400"
        >
          userlayout1
        </Link>
        <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-6"></div>
        <Link
          href="/user-type2"
          className="font-semibold text-sm uppercase transition-colors duration-200 text-white hover:text-pink-400"
        >
          userlayout2
        </Link>
        <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-6"></div>
        <button
          onClick={openGiftShopModal}
          className="font-semibold text-sm uppercase transition-colors duration-200 text-white hover:text-pink-400 cursor-pointer"
        >
          GIFT MEETUPS
        </button>
        <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-6"></div>
        <Link
          href="/android-app"
          className="font-semibold text-sm uppercase transition-colors duration-200 text-white hover:text-pink-400"
        >
          GET THE ANDROID APP
        </Link>
      </>
    );
  }, [data?.navigation, isActiveLink]);

  // Memoize mobile navigation items
  const mobileNavigationItems = useMemo(() => {
    if (data?.navigation && data.navigation.length > 0) {
      return data.navigation.map((item) => (
        item.url === "/gift-meetups" ? (
          <button
            key={item.id}
            onClick={() => {
              closeMenu();
              openGiftShopModal();
            }}
            className={`block w-full text-left px-4 py-3 rounded-lg font-semibold text-sm uppercase transition-colors duration-200 cursor-pointer ${
              isActiveLink(item.url)
                ? "text-pink-500 bg-pink-50 dark:bg-pink-900/20"
                : "text-white hover:text-pink-400 hover:bg-white/10"
            }`}
          >
            {item.label}
          </button>
        ) : (
          <Link
            key={item.id}
            href={item.url}
            onClick={closeMenu}
            className={`block px-4 py-3 rounded-lg font-semibold text-sm uppercase transition-colors duration-200 ${
              isActiveLink(item.url)
                ? "text-pink-500 bg-pink-50 dark:bg-pink-900/20"
                : "text-white hover:text-pink-400 hover:bg-white/10"
            }`}
          >
            {item.label}
          </Link>
        )
      ));
    }
    
    // Fallback mobile navigation items
    return (
      <>
        <Link
          href="/user-type1"
          onClick={closeMenu}
          className="block px-4 py-3 rounded-lg font-semibold text-sm uppercase transition-colors duration-200 text-white hover:text-pink-400 hover:bg-white/10"
        >
          userlayout1
        </Link>
        <Link
          href="/user-type2"
          onClick={closeMenu}
          className="block px-4 py-3 rounded-lg font-semibold text-sm uppercase transition-colors duration-200 text-white hover:text-pink-400 hover:bg-white/10"
        >
          userlayout2
        </Link>
        <button
          onClick={() => {
            closeMenu();
            openGiftShopModal();
          }}
          className="block w-full text-left px-4 py-3 rounded-lg font-semibold text-sm uppercase transition-colors duration-200 text-white hover:text-pink-400 hover:bg-white/10 cursor-pointer"
        >
          GIFT MEETUPS
        </button>
        <Link
          href="/android-app"
          onClick={closeMenu}
          className="block px-4 py-3 rounded-lg font-semibold text-sm uppercase transition-colors duration-200 text-white hover:text-pink-400 hover:bg-white/10"
        >
          GET THE ANDROID APP
        </Link>
      </>
    );
  }, [data?.navigation, isActiveLink, closeMenu]);

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-4 animate-pulse">
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-32 mb-2"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-64"></div>
      </div>
    );
  }

  return (
    <>
      <header className="sticky  top-0 z-30 w-full border-b border-gray-700 bg-[#29252D] backdrop-blur-sm " style={{position:"fixed"}}>
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between h-16 sm:h-20 lg:h-24 px-3 sm:px-4 lg:px-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" onClick={closeMenu}>
                <div className="flex items-center gap-2">
                  <Image
                    src="/LOGO.svg"
                    alt={data?.siteName || "Logo"}
                    width={300}
                    height={400}
                    className="h-32 w-32 sm:h-10 sm:w-10 lg:h-30 lg:w-30 object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
              <Button
                type="secondary"
                onClick={openPaymentModal}
                className="mr-4"
              >
                Get Matched
              </Button>
              <div className="flex items-center ml-6">
                {navigationItems}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <>
              {/* Backdrop for mobile menu */}
              <div
                className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={closeMenu}
              />

              {/* Mobile menu content */}
              <div className="lg:hidden fixed left-0 right-0 top-0 bg-[#29252D] border-b border-gray-700 shadow-lg z-50 overflow-hidden">
                <div className="px-4 py-4 space-y-3">
                  {/* Close button at top right */}
                  <div className="flex justify-end">
                    <button
                      onClick={closeMenu}
                      className="p-2 rounded-full transition-colors hover:bg-white/10 text-white"
                      aria-label="Close menu"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  
                  {/* Get Matched button */}
                  <Button
                    type="secondary"
                    onClick={openPaymentModal}
                    className="w-full"
                  >
                    Get Matched
                  </Button>

                  {/* Navigation links */}
                  <div className="space-y-1">
                    {mobileNavigationItems}
                  </div>

                  {/* Theme and Language switchers */}
                  <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <DarkModeSwitcher />
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>


             <div 
         className={`transition-all duration-300 ease-in-out ${
           isTickerVisible 
             ? '' 
             : 'opacity-0 -translate-y-2'
         }`}
         style={{
           opacity: isTickerVisible ? 1 : 0,
           transform: isTickerVisible ? 'none' : 'translateY(-8px)',
           height: isTickerVisible ? 'auto' : '0px',
           overflow: 'hidden'
         }}
       >
         <Ticker section={mockTickerSection} />
       </div>


      </header>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="min-h-full flex items-start sm:items-center justify-center p-4 py-8 sm:py-4">
              <div className="relative bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl w-full max-w-2xl mx-4">
                <div className="sticky top-0 bg-white dark:bg-zinc-800 rounded-t-2xl flex justify-end p-4 z-10">
                  <button
                    onClick={closePaymentModal}
                    className="p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-zinc-700"
                    aria-label="Close payment modal"
                  >
                    <X size={24} className="text-gray-900 dark:text-gray-100" />
                  </button>
                </div>
                <div className="p-6 pt-0">
                  <PaymentSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gift Shop Modal */}
      {isGiftShopModalOpen && (
        <GiftShopModal isOpen={isGiftShopModalOpen} onClose={closeGiftShopModal} />
      )}
    </>
  );
}
