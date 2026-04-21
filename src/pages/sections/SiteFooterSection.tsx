import { MapPin, Phone, Globe, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const contactInfo = [
  {
    Icon: MapPin,
    text: "500 Vineyard Town Center Way\nMorgan Hill, CA 95037",
    href: "https://maps.google.com/?q=500+Vineyard+Town+Center+Way,+Morgan+Hill,+CA+95037",
  },
  { Icon: Phone, text: "+1 408-778-5955", href: "tel:+14087785955" },
  { Icon: Globe, text: "ohenrysdonuts.com", href: "https://ohenrysdonuts.com" },
  { Icon: Clock, text: "Open daily · Closes at 4 PM", href: null },
];

const usefulLinks = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#1a0a1e]" id="contact">
      <div className="max-w-[1440px] mx-auto px-[80px] pt-[60px] pb-[48px]">
        <div className="grid grid-cols-3 gap-16 pb-12 border-b border-white/10">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div className="mb-1">
              <img
                src="/ohenrys-logo-transparent.png"
                alt="O'Henry's Fresh Donuts"
                className="h-[72px] w-auto object-contain"
                data-testid="footer-logo"
              />
            </div>
            <p className="[font-family:'Montserrat',Helvetica] text-[14px] text-[#9b7aaa] leading-[25px] max-w-[320px]">
              Morgan Hill's favorite family-owned donut shop. Fresh donuts, pastries and burgers made with love every single morning.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {[
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-[#cd43e4] hover:text-[#cd43e4] transition-colors duration-200"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-0">
            <div className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[12px] tracking-[0.2em] uppercase mb-7">
              Contact Us
            </div>
            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => {
                const Icon = item.Icon;
                return (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-[#cd43e4] flex-shrink-0 mt-0.5" />
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="[font-family:'Montserrat',Helvetica] text-[14px] text-[#9b7aaa] no-underline hover:text-white transition-colors whitespace-pre-line"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="[font-family:'Montserrat',Helvetica] text-[14px] text-[#9b7aaa] whitespace-pre-line">
                        {item.text}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Links column */}
          <div className="flex flex-col">
            <div className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[12px] tracking-[0.2em] uppercase mb-7">
              Quick Links
            </div>
            <div className="flex flex-col gap-3.5">
              {usefulLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="[font-family:'Montserrat',Helvetica] text-[14px] text-[#9b7aaa] no-underline hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between pt-6 flex-wrap gap-3">
          <p className="[font-family:'Montserrat',Helvetica] text-[13px] text-[#5a3a6a]">
            © {new Date().getFullYear()} O'Henry's Donuts. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <a
                key={label}
                href="#"
                className="[font-family:'Montserrat',Helvetica] text-[13px] text-[#5a3a6a] no-underline hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
