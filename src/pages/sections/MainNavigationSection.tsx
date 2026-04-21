import { useState, useEffect } from "react";
import { Heart, ShoppingBag, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const MainNavigationSection = (): JSX.Element => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      <nav
        className={`w-full bg-white border-b transition-all duration-300 ${
          scrolled ? "border-[#e8d0f0]" : "border-[#f0e8f8]"
        }`}
        data-testid="nav-main"
      >
        <div className="max-w-[1440px] mx-auto flex items-center h-[80px] px-12">

          {/* Logo image */}
          <a href="#" className="shrink-0 flex items-center no-underline" data-testid="logo">
            <img
              src="/ohenrys-logo.jpg"
              alt="O'Henry's Fresh Donuts"
              className="h-[62px] w-auto object-contain"
            />
          </a>

          {/* Nav links — centered */}
          <div className="flex-1 flex items-center justify-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                onClick={() => setActiveLink(link.label)}
                className={`relative [font-family:'Montserrat',Helvetica] text-[15px] tracking-wide leading-normal whitespace-nowrap no-underline transition-colors duration-200 pb-0.5 group ${
                  activeLink === link.label
                    ? "font-semibold text-[#973499]"
                    : "font-normal text-[#444] hover:text-[#973499]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#973499] rounded-full transition-all duration-300 ${
                    activeLink === link.label ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              data-testid="icon-wishlist"
              className="w-9 h-9 flex items-center justify-center rounded-full text-[#666] hover:text-[#973499] hover:bg-[#f5eeff] transition-colors duration-200"
              title="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.6]" />
            </button>
            <button
              data-testid="icon-cart"
              className="w-9 h-9 flex items-center justify-center rounded-full text-[#666] hover:text-[#973499] hover:bg-[#f5eeff] transition-colors duration-200"
              title="Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.6]" />
            </button>
            <div className="w-px h-6 bg-[#e8d8f0] mx-1" />
            <a
              href="tel:+14087785955"
              data-testid="button-order"
              className="no-underline inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#973499] text-white [font-family:'Montserrat',Helvetica] font-semibold text-[14px] whitespace-nowrap hover:bg-[#7a2a7a] transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              Call to Order
            </a>
          </div>

        </div>
      </nav>
    </header>
  );
};
