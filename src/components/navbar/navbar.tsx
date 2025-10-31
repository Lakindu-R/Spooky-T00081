import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../public/SpookyLogo.png';
import TelegramIcon from '../../../public/telegram.png';
import TwitterIcon from '../../../public/x.png';
import DexIcon from '../../../public/dex.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'ROADMAP', path: '/roadmap' },
    { name: 'PATH TO BUY', path: '/pathtobuy' },
    { name: 'PARTNERS', path: '/partners' }
  ];

  const socialIcons = [
    { name: 'Dex', icon: DexIcon, url: '#' },
    { name: 'Telegram', icon: TelegramIcon, url: '#' },
    { name: 'Twitter', icon: TwitterIcon, url: '#' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-linear-to-b bg-transparent  h-[10vh] absolute top-0 left-0  right-0 z-50 py-4 md:py-1">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <NavLink to="/">
              <img 
                src={Logo} 
                alt="Spooky Logo" 
                className="h-12 md:h-16 lg:h-20 w-auto"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-white font-normal text-sm lg:text-[32px] px-4 py-2 transition-all duration-300 ${
                    isActive
                      ? 'border-2 border-white rounded-full'
                      : 'hover:border-2 hover:border-white/50 hover:rounded-full'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {socialIcons.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  className="h-8 w-8 lg:h-10 lg:w-10"
                />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: '0', left: '0', right: '0', bottom: '0' }}
          onClick={toggleMenu}
        />

        {/* Mobile Slide Menu */}
        <div 
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-linear-to-b from-red-600 via-emerald-800 to-emerald-900 shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ zIndex: 100 }}
        >
          <div className="flex flex-col h-full p-6">
            {/* Close button */}
            <button
              onClick={toggleMenu}
              className="self-end text-white text-2xl mb-8 hover:opacity-70"
              aria-label="Close menu"
            >
              ×
            </button>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `text-white font-bold text-base px-4 py-3 transition-all duration-300 text-center ${
                      isActive
                        ? 'border-2 border-white rounded-full'
                        : 'hover:border-2 hover:border-white/50 hover:rounded-full'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center space-x-6 mt-auto mb-8">
              {socialIcons.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    className="h-10 w-10"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;