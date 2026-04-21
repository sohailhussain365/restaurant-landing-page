import { useState } from "react";
import { Heart, ChevronRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const products = [
  {
    id: 1,
    title: "Apple Fritter",
    description: "Golden fried dough packed with fresh apple chunks, finished with a sweet glaze. Our most beloved item.",
    price: "$3.50",
    image: "/figmaAssets/rectangle-332-3.svg",
    imageAlt: "Apple Fritter",
    badge: "Fan Favorite",
  },
  {
    id: 2,
    title: "Sticky Bun",
    description: "Pillowy dough in caramel glaze with crunchy pecans — warm, gooey and absolutely irresistible.",
    price: "$3.25",
    image: "/figmaAssets/rectangle-333.svg",
    imageAlt: "Sticky Bun",
    badge: "",
  },
  {
    id: 3,
    title: "Cheeseburger & Fries",
    description: "Juicy, melty, and crispy. Our customers say it rivals In-N-Out — try one and decide.",
    price: "$9.50",
    image: "/figmaAssets/rectangle-334.svg",
    imageAlt: "Cheeseburger and Fries",
    badge: "Must Try",
  },
];

export const BestSellersSection = (): JSX.Element => {
  const [wishlisted, setWishlisted] = useState<number[]>([]);
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  const toggleWish = (id: number) =>
    setWishlisted((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  return (
    <section ref={sectionRef} id="menu" className="w-full py-12 px-[80px]">
      {/* Header */}
      <div className="flex items-start justify-between gap-8 mb-8">
        <div data-scroll className="min-w-0">
          <p className="[font-family:'Montserrat',Helvetica] font-bold text-[#973499] text-[11px] tracking-[0.3em] uppercase mb-1" style={{ "--animation-delay": "0.06s" } as any}>
            Our Menu
          </p>
          <h2 className="[font-family:'Montserrat',Helvetica] font-black text-[#1a0a1e] text-[44px] leading-[52px]" style={{ "--animation-delay": "0.1s" } as any}>
            Popular Items
          </h2>
        </div>
        <button className="flex items-center gap-1 [font-family:'Montserrat',Helvetica] font-bold text-[#973499] text-[13px] hover:text-[#7a2a7a] transition-colors group whitespace-nowrap">
          See All
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#ead5f5] mb-8" />

      {/* Cards */}
      <div className="grid gap-5 xl:grid-cols-3 lg:grid-cols-2">
        {products.map((product, index) => (
          <div
            key={product.id}
            data-testid={`card-product-${product.id}`}
            data-scroll-stagger
              className="bg-gradient-to-br from-white via-[#fff5ff] to-[#f8f0ff] border border-[#f1d8f7] rounded-[28px] overflow-hidden shadow-[0_18px_50px_-32px_rgba(151,52,153,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_-22px_rgba(151,52,153,0.42)]"
            style={{ "--animation-delay": `${0.12 + index * 0.08}s` } as any}
          >
            {/* Image */}
            <div className="relative mx-3 mt-3 rounded-[24px] overflow-hidden">
              <img
                className="w-full h-[200px] object-cover transition-transform duration-500 hover:scale-105"
                alt={product.imageAlt}
                src={product.image}
                data-testid={`img-product-${product.id}`}
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-[#973499] text-white text-[11px] font-bold px-3 py-1 rounded-full [font-family:'Montserrat',Helvetica]">
                  {product.badge}
                </span>
              )}
              <button
                onClick={() => toggleWish(product.id)}
                className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-white rounded-full border border-[#f1d8f7] shadow-sm hover:border-[#973499] transition-colors"
                data-testid={`button-wishlist-${product.id}`}
              >
                <Heart
                  className={`w-4 h-4 stroke-[2] transition-colors ${
                    wishlisted.includes(product.id)
                      ? "fill-[#973499] text-[#973499]"
                      : "text-[#973499]"
                  }`}
                />
              </button>
            </div>

            {/* Info */}
            <div className="px-4 pt-3 pb-4 flex flex-col gap-2 flex-1">
              <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-[#1a0a1e] text-[16px] leading-[22px]">
                {product.title}
              </h3>
              <p className="[font-family:'Montserrat',Helvetica] text-[13px] text-[#666] leading-[20px] flex-1">
                {product.description}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[#f0e8f8]">
                <span
                  className="[font-family:'Montserrat',Helvetica] font-extrabold text-[#1a0a1e] text-[18px]"
                  data-testid={`text-price-${product.id}`}
                >
                  {product.price}
                </span>
                <button
                  data-testid={`button-add-to-cart-${product.id}`}
                  className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#973499] text-white [font-family:'Montserrat',Helvetica] font-bold text-[12px] shadow-[0_10px_28px_-18px_rgba(151,52,153,0.8)] hover:bg-[#7a2a7a] transition-all duration-200"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
