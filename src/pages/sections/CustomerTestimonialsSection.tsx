import { useState } from "react";
import { Star, Quote } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Morgan Hill, CA",
    avatar: "/figmaAssets/ellipse-27.png",
    text: "Super friendly staff and great tasting donuts! The apple fritter is absolutely incredible — I drive out of my way just for it.",
    stars: 5,
  },
  {
    id: 2,
    name: "James R.",
    location: "Gilroy, CA",
    avatar: "/figmaAssets/ellipse-27-1.png",
    text: "Best donuts ever, very fresh selection every morning. The sticky buns are out of this world. Family-owned and it really shows.",
    stars: 5,
  },
  {
    id: 3,
    name: "Linda K.",
    location: "San Jose, CA",
    avatar: "/figmaAssets/ellipse-27.png",
    text: "Their burgers honestly compete with In-N-Out — I was shocked. A wonderful family atmosphere, the whole team makes you feel welcome.",
    stars: 5,
  },
  {
    id: 4,
    name: "Mike T.",
    location: "Morgan Hill, CA",
    avatar: "/figmaAssets/ellipse-27-1.png",
    text: "Sunday morning tradition for our whole family. The croissants are buttery perfection and the glazed donuts are always fresh.",
    stars: 5,
  },
];

export const CustomerTestimonialsSection = (): JSX.Element => {
  const [page, setPage] = useState(0);
  const pages = [[0, 1], [2, 3]];
  const visible = pages[page].map((i) => testimonials[i]);
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="w-full bg-[#fdf6ff] py-16 px-[80px]">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
        <div>
          <p className="[font-family:'Montserrat',Helvetica] font-semibold text-[#973499] text-[12px] tracking-[0.22em] uppercase mb-1 animate-pop" style={{ "--animation-delay": "0.06s" } as any}>
            Reviews
          </p>
          <h2 className="[font-family:'Montserrat',Helvetica] font-extrabold text-[#1a0a1e] text-[36px] leading-[44px] animate-fade-up" style={{ "--animation-delay": "0.1s" } as any}>
            What Our Customers Say
          </h2>
        </div>
        {/* Aggregate rating */}
        <div className="flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 shadow-sm border border-[#f2dcf7] animate-fade-in" style={{ "--animation-delay": "0.12s" } as any}>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="[font-family:'Montserrat',Helvetica] font-bold text-[#1a0a1e] text-[16px]">4.6</span>
          <span className="[font-family:'Montserrat',Helvetica] text-[#888] text-[14px]">· 281 Google Reviews</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#ead5f5] mb-10" />

      {/* Cards */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {visible.map((t, index) => (
          <div
            key={t.id}
            data-testid={`card-testimonial-${t.id}`}
            data-scroll-stagger
            className="bg-gradient-to-br from-white via-[#fff5ff] to-[#f9f0ff] border border-[#f1d8f7] rounded-[28px] p-7 flex flex-col gap-5 shadow-[0_18px_50px_-30px_rgba(151,52,153,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-25px_rgba(151,52,153,0.42)]"
            style={{ "--animation-delay": `${0.12 + index * 0.08}s` } as any}
          >
            {/* Quote icon */}
            <Quote className="w-7 h-7 text-[#e8d0f5] fill-[#f3e5ff]" />

            {/* Stars */}
            <div className="flex gap-0.5">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Text */}
            <p className="[font-family:'Montserrat',Helvetica] text-[15px] text-[#444] leading-[26px] flex-1">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#f0e8f8]">
              <img
                className="w-11 h-11 rounded-full object-cover ring-1 ring-[#ead5f5] flex-shrink-0"
                alt={t.name}
                src={t.avatar}
                data-testid={`img-avatar-${t.id}`}
              />
              <div>
                <div className="[font-family:'Montserrat',Helvetica] font-semibold text-[#1a0a1e] text-[15px]">
                  {t.name}
                </div>
                <div className="[font-family:'Montserrat',Helvetica] text-[#999] text-[13px] mt-0.5">
                  {t.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 justify-center">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`rounded-full border-none cursor-pointer transition-all duration-200 ${
              page === i ? "w-7 h-2.5 bg-[#973499]" : "w-2.5 h-2.5 bg-[#d5b0e8] hover:bg-[#973499]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
