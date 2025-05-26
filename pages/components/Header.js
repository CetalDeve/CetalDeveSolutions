import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '/Careers' },
    { name: 'Blog', href: '/Blog' },
    { name: 'Contact', href: '/Contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="modern-container" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center space-x-2">                <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="Cetal Deve Solutions" 
                    width={32} 
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-xl font-bold text-secondary-900">
                  Cetal Deve Solutions
                </span>
              </a>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="nav-link">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            <Link href="/Contact">
              <a className="modern-btn-primary">
                Get Started
              </a>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-secondary-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >              <span className="sr-only">Open main menu</span>              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-2 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a 
                    className="block rounded-md px-3 py-2 text-base font-medium text-secondary-900 hover:bg-secondary-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
              <Link href="/Contact">
                <a 
                  className="block w-full text-center modern-btn-primary mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
