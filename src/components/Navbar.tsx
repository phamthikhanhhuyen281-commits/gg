import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Logo } from './Logo';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Listening', path: '/listening' },
  { name: 'Speaking', path: '/speaking' },
  { name: 'Reading', path: '/reading' },
  { name: 'Writing', path: '/writing' },
  { name: 'Vocabulary', path: '/vocabulary' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    isActive ? "text-accent" : "text-slate-600"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <button className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                Log in
              </button>
              <button className="btn-primary py-2 px-4 text-sm">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    isActive ? "text-accent bg-accent-light" : "text-slate-600 hover:bg-slate-50"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-100">
              <button className="w-full text-left px-3 py-2 text-base font-medium text-slate-600">
                Log in
              </button>
              <div className="px-3 py-2">
                <button className="w-full btn-primary">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
