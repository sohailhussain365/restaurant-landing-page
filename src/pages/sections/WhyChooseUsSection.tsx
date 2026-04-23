import { Sparkles, Leaf, Clock, Heart } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const reasons = [
  {
    id: 1,
    title: "Prepared Fresh Daily",
    description:
      "Every dish is cooked fresh to order using traditional Pakistani methods and premium ingredients — never pre-made.",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Authentic Desi Heritage",
    description:
      "Family recipes passed down with decades of expertise in traditional Pakistani cuisine and desi cooking excellence.",
    icon: Heart,
  },
  {
    id: 3,
    title: "Premium Quality",
    description:
      "We source the finest ingredients to create authentic flavors that celebrate Pakistani culinary traditions.",
    icon: Leaf,
  },
  {
    id: 4,
    title: "Warm Hospitality",
    description:
      "From quick takeout to leisurely dine-in, your visit is welcomed with genuine warmth and excellent service.",
    icon: Clock,
  },
];

export const WhyChooseUsSection = (): JSX.Element => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="why-us" className="w-full py-16 px-[80px]">
      <div className="flex flex-col gap-10 lg:gap-14">
        <div className="max-w-[750px]">
          <span className="[font-family:'Montserrat',Helvetica] font-semibold text-[#973499] text-[12px] tracking-[0.22em] uppercase mb-3 inline-block animate-pop" style={{ "--animation-delay": "0.05s" } as any}>
            Why We're Beloved
          </span>
          <h2 className="[font-family:'Montserrat',Helvetica] font-extrabold text-[#1a0a1e] text-[38px] leading-[46px] max-w-[680px] animate-fade-up" style={{ "--animation-delay": "0.1s" } as any}>
            Authentic Desi Flavors and True Hospitality
          </h2>
          <p className="[font-family:'Montserrat',Helvetica] text-[#555] text-[16px] leading-[28px] mt-5 max-w-[720px] animate-fade-in" style={{ "--animation-delay": "0.15s" } as any}>
            Our team celebrates Pakistani culinary tradition with passion and pride. Every dish is prepared with authentic recipes and genuine care.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                data-scroll-stagger
                className="group relative overflow-hidden rounded-[24px] border border-[#f1d7fb] bg-gradient-to-br from-white via-[#fff9ff] to-[#f8f0ff] p-5 shadow-[0_16px_40px_-30px_rgba(151,52,153,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(151,52,153,0.4)]"
                style={{ "--animation-delay": `${0.15 + index * 0.08}s` } as any}
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f9ecff] to-transparent opacity-80" />
                <div className="relative flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#f8e6ff] text-[#973499] flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-[#1a0a1e] text-[14px] leading-[20px]">
                      {reason.title}
                    </h3>
                    <p className="[font-family:'Montserrat',Helvetica] text-[#666] text-[13px] leading-[20px] mt-1">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
