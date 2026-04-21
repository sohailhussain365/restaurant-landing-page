import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const articles = [
  {
    id: 1,
    image: "/figmaAssets/rectangle-332.png",
    title: "Why Our Apple Fritters Are Morgan Hill's Best",
    date: "Daily",
  },
  {
    id: 2,
    image: "/figmaAssets/rectangle-332-1.png",
    title: "The Story Behind Our Family-Owned Donut Shop",
    date: "Local",
  },
  {
    id: 3,
    image: "/figmaAssets/rectangle-332-2.png",
    title: "Fresh Baked Every Morning — Our Promise to You",
    date: "Fresh",
  },
];

export const ArticlesPreviewSection = (): JSX.Element => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="w-full bg-[#faf5ff] border-y border-[#ead5f5] py-16">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-[80px]">
        <div className="flex items-end justify-between mb-10">
          <div data-scroll>
            <p className="[font-family:'Montserrat',Helvetica] font-semibold text-[#973499] text-[12px] tracking-[0.22em] uppercase mb-1" style={{ "--animation-delay": "0.06s" } as any}>
              Our Story
            </p>
            <h2 className="[font-family:'Montserrat',Helvetica] font-extrabold text-[#1a0a1e] text-[36px] leading-[44px]" style={{ "--animation-delay": "0.1s" } as any}>
              A Taste of Who We Are
            </h2>
          </div>
          <span className="[font-family:'Montserrat',Helvetica] text-[#973499] text-[14px] font-semibold cursor-pointer hover:text-[#7a2a7a] transition-colors">
            View All →
          </span>
        </div>

        {/* Cards */}
        <div className="grid gap-6 xl:grid-cols-3 lg:grid-cols-2">
          {articles.map((article, index) => (
            <div
              key={article.id}
              data-testid={`card-article-${article.id}`}
              data-scroll-stagger
              className="group relative overflow-hidden rounded-[32px] border border-[#f2dcf7] bg-white shadow-[0_22px_70px_-40px_rgba(151,52,153,0.4)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_35px_100px_-30px_rgba(151,52,153,0.45)] cursor-pointer"
              style={{ "--animation-delay": `${0.12 + index * 0.08}s` } as any}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[220px]">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={article.title}
                  src={article.image}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Tag */}
                <span className="absolute top-4 left-4 bg-[#973499] text-white text-[11px] font-bold px-3 py-1 rounded-full [font-family:'Montserrat',Helvetica] tracking-wide uppercase">
                  {article.date}
                </span>
              </div>
              {/* Content */}
              <div className="px-5 py-5">
                <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#1a0a1e] text-[16px] leading-[24px]">
                  {article.title}
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] text-[#973499] text-[13px] font-medium mt-3 hover:text-[#7a2a7a] transition-colors">
                  Read more →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
