import { Phone, Star, Clock, Tag, MapPin } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const socialIcons = [
  { alt: "Facebook", src: "/figmaAssets/facebook.svg", href: "https://facebook.com" },
  { alt: "Instagram", src: "/figmaAssets/instagram.svg", href: "https://instagram.com" },
];

export const HeroPromotionSection = (): JSX.Element => {
  const sectionRef = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="relative w-full flex flex-col lg:flex-row items-center justify-between px-[80px] pt-[60px] pb-[48px] gap-12 overflow-hidden">
      {/* Left content */}
      <div className="flex flex-col items-start gap-6 max-w-[520px] flex-shrink-0 animate-fade-up" style={{ "--animation-delay": "0.08s" } as any}>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 border border-[#d4a8e0] rounded-full px-4 py-1.5 bg-[#f9f0ff] shadow-sm">
          <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#7a00cc] text-[12px] tracking-[0.18em] uppercase">
            Family-Owned · Morgan Hill, CA
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-extrabold text-[50px] tracking-[-0.5px] leading-[60px] bg-[linear-gradient(120deg,#81008c_0%,#540096_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [font-family:'Montserrat',Helvetica]">
          Fresh donuts, baked with love every morning
        </h1>

        {/* Sub */}
        <p className="[font-family:'Montserrat',Helvetica] text-[16px] text-[#555] leading-[27px] max-w-[460px]">
          Apple fritters, sticky buns, croissants and burgers made fresh daily — 
          right here at Vineyard Town Center.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-1 animate-fade-in" style={{ "--animation-delay": "0.18s" } as any}>
          <a
            href="#menu"
            className="no-underline inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#973499] text-white [font-family:'Montserrat',Helvetica] font-semibold text-[15px] shadow-[0_18px_40px_-25px_rgba(151,52,153,0.8)] hover:bg-[#7a2a7a] transition-all duration-200"
            data-testid="button-shop-now"
          >
            View Our Menu
          </a>
          <a
            href="tel:+14087785955"
            className="no-underline inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-[#973499] text-[#973499] [font-family:'Montserrat',Helvetica] font-semibold text-[15px] hover:bg-[#f5eeff] transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </a>
        </div>

        {/* Info pills */}
        <div className="flex flex-wrap gap-2 mt-1">
          {[
            { icon: <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />, text: "4.6 · 281 Reviews" },
            { icon: <Clock className="w-3.5 h-3.5 text-[#973499]" />, text: "Open · Closes 4 PM" },
            { icon: <Tag className="w-3.5 h-3.5 text-[#973499]" />, text: "$1 – $10" },
            { icon: <MapPin className="w-3.5 h-3.5 text-[#973499]" />, text: "Dine-in · Takeout · Delivery" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 border border-[#e0d0ec] rounded-full px-3.5 py-1.5 bg-white text-[13px] [font-family:'Montserrat',Helvetica] text-[#444]"
            >
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex items-center gap-3 mt-1">
          {socialIcons.map((icon) => (
            <a
              key={icon.alt}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <img className="w-7 h-7" alt={icon.alt} src={icon.src} />
            </a>
          ))}
        </div>
      </div>

      {/* Right: hero image */}
      <div className="flex-1 min-w-0 flex items-center justify-center relative animate-fade-up" style={{ "--animation-delay": "0.12s" } as any}>
        {/* Soft background circle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[420px] h-[420px] rounded-full bg-[#f3e0ff] opacity-50 blur-2xl" />
          <div className="absolute -bottom-10 right-16 w-32 h-32 rounded-full bg-[#fce5ff] opacity-70 blur-2xl" />
        </div>
        <img
          className="relative z-10 w-full max-w-[640px] h-[460px] object-contain animate-float"
          alt="O'Henry's fresh donuts"
          src="/figmaAssets/2150674190-1.png"
          data-testid="img-hero"
        />
      </div>

      {/* Subtle chevron scroll hint */}
      <img
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[48px] h-[52px] opacity-30"
        alt=""
        src="/figmaAssets/group-794.png"
        aria-hidden="true"
      />
    </section>
  );
};
