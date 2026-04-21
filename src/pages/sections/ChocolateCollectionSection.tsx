import { Star, Sparkles, Flame, Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const features = [
  {
    id: 1,
    Icon: Star,
    title: "Classic & Specialty Donuts",
    description: "From timeless glazed rings to bold specialty flavors, baked fresh every morning with authentic recipes.",
  },
  {
    id: 2,
    Icon: Sparkles,
    title: "Apple Fritters & Pastries",
    description: "Our apple fritters and sticky buns are legendary — flaky, buttery, and made from scratch with love.",
  },
  {
    id: 3,
    Icon: Flame,
    title: "Burgers & More",
    description: "Our burgers compete with In-N-Out. Bold claim, but our customers agree. Crispy, juicy, perfect.",
  },
];

const highlights = [
  "Fresh baked every single morning",
  "Premium locally-sourced ingredients",
  "Family recipes passed down for decades",
  "No frozen dough, no shortcuts",
  "Hand-crafted with attention to detail",
  "Fast, friendly, and warm service",
];

export const ChocolateCollectionSection = (): JSX.Element => {
  const sectionRef = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="w-full py-12 px-[80px] bg-gradient-to-b from-white via-[#fdfbff] to-white"
    >
      {/* Header */}
      <div className="mb-12 max-w-[900px]">
        <span 
          data-scroll
          className="[font-family:'Montserrat',Helvetica] font-bold text-[#973499] text-[11px] tracking-[0.3em] uppercase inline-block mb-2"
          style={{ "--animation-delay": "0.06s" } as any}
        >
          ✨ Our Collection
        </span>
        <h2 
          data-scroll
          className="[font-family:'Montserrat',Helvetica] font-black text-[#1a0a1e] text-[48px] leading-[56px] mb-3"
          style={{ "--animation-delay": "0.1s" } as any}
        >
          Artisan Quality, Every Single Day
        </h2>
        <p 
          data-scroll
          className="[font-family:'Montserrat',Helvetica] text-[#555] text-[15px] leading-[26px] max-w-[800px]"
          style={{ "--animation-delay": "0.14s" } as any}
        >
          Since opening our doors, we've been committed to one simple promise: bake everything fresh, use only premium ingredients, and treat every customer like family.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-12 lg:grid-cols-3 items-center">
        {/* Left: Features Grid */}
        <div className="lg:col-span-1 flex flex-col gap-3">
          {features.map(({ id, Icon, title, description }, index) => (
            <div
              key={id}
              data-scroll-stagger
              className="group rounded-[24px] border border-[#f1d7fb] bg-gradient-to-br from-white via-[#fff9ff] to-[#f8f0ff] p-4 shadow-[0_16px_40px_-30px_rgba(151,52,153,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(151,52,153,0.4)] cursor-pointer"
              style={{ "--animation-delay": `${0.12 + index * 0.06}s` } as any}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#f9e7ff] to-[#f3d5ff] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon className="w-4 h-4 text-[#973499]" />
                </div>
                <div className="min-w-0">
                  <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-[#1a0a1e] text-[13px] leading-[18px] mb-0.5">
                    {title}
                  </h3>
                  <p className="[font-family:'Montserrat',Helvetica] text-[13px] text-[#666] leading-[20px]">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center: Image */}
        <div className="lg:col-span-1 flex items-center justify-center h-full">
          <img
            data-scroll
            className="w-full h-[380px] object-cover rounded-[32px] shadow-[0_35px_100px_-40px_rgba(151,52,153,0.45)]"
            alt="Our handmade donuts and pastries"
            src="/figmaAssets/group-796.png"
            data-testid="img-collection"
            style={{ "--animation-delay": "0.16s" } as any}
          />
        </div>

        {/* Right: Highlights */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <div>
            <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-[#1a0a1e] text-[16px] leading-[24px] mb-4">
              Why O'Henry's Stands Out
            </h3>
          </div>
          <div className="space-y-2">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                data-scroll-stagger
                className="flex items-start gap-2.5 group"
                style={{ "--animation-delay": `${0.18 + index * 0.05}s` } as any}
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#973499] to-[#7a2a7a] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="[font-family:'Montserrat',Helvetica] text-[#444] text-[13px] leading-[20px]">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <a
            href="#menu"
            className="mt-2 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-[#973499] to-[#7a2a7a] text-white [font-family:'Montserrat',Helvetica] font-bold text-[13px] shadow-[0_14px_30px_-12px_rgba(151,52,153,0.75)] hover:shadow-[0_18px_40px_-8px_rgba(151,52,153,0.85)] transition-all duration-300"
          >
            Explore Our Menu
          </a>
        </div>
      </div>
    </section>
  );
};
