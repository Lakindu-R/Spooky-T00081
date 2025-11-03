import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../public/SpookyLogo.png';
import TelegramIcon from '../../../public/telegram.png';
import TwitterIcon from '../../../public/x.png';
import DexIcon from '../../../public/dex.png';
import { BackgroundGradientAnimation } from '../ui/gradientAnimation';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'ROADMAP', path: '/roadmap' },
    { name: 'PATH TO BUY', path: '/pathtobuy' },
    { name: 'PARTNERS', path: '/partners' },
  ];

  const socialIcons = [
    { name: 'Dex', icon: DexIcon, url: '#' },
    { name: 'Telegram', icon: TelegramIcon, url: '#' },
    { name: 'Twitter', icon: TwitterIcon, url: '#' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 right-0 left-0 z-60 h-[13vh] bg-linear-to-t from-red-600 to-[#18398F] py-4 md:h-[10vh] md:bg-transparent md:bg-none md:py-1">

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo-glow shrink-0">
            <NavLink to="/">
              <img
                src={Logo}
                alt="Spooky Logo"
                className="relative z-10 h-12 w-auto md:h-16 lg:h-20"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center space-x-4 md:flex lg:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-normal text-white transition-all duration-300 lg:text-[32px] ${
                    isActive
                      ? 'rounded-full border-2 border-white'
                      : 'hover:rounded-full hover:border-2 hover:border-white/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="shrink-0">
            <div className="hidden items-center space-x-3 md:flex lg:space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-transform hover:scale-110 hover:opacity-80 ${index % 2 === 0 ? 'float' : 'pulse-scale'}`}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="h-8 w-8 lg:h-10 lg:w-10"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="flex h-10 w-10 flex-col items-center justify-center space-y-1.5 focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-8 bg-white transition-all duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
            ></span>
            <span
              className={`block h-0.5 w-8 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block h-0.5 w-8 bg-white transition-all duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isMenuOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
          style={{ top: '0', left: '0', right: '0', bottom: '0' }}
          onClick={toggleMenu}
        />

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-linear-to-t from-red-600 to-[#18398F] shadow-2xl transition-transform duration-300 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ zIndex: 100 }}
        >
          <div className="flex h-full flex-col p-6">
            {/* Close button */}
            <button
              onClick={toggleMenu}
              className="mb-8 self-end text-2xl text-white hover:opacity-70"
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
                    `px-4 py-3 text-center text-base font-bold text-white transition-all duration-300 ${
                      isActive
                        ? 'rounded-full border-2 border-white'
                        : 'hover:rounded-full hover:border-2 hover:border-white/50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="mt-auto mb-8 hidden items-center justify-center space-x-6 lg:flex">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
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
