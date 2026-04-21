import { ArticlesPreviewSection } from "./sections/ArticlesPreviewSection";
import { BestSellersSection } from "./sections/BestSellersSection";
import { ChocolateCollectionSection } from "./sections/ChocolateCollectionSection";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection";
import { HeroPromotionSection } from "./sections/HeroPromotionSection";
import { MainNavigationSection } from "./sections/MainNavigationSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="w-full bg-white flex flex-col overflow-x-hidden">
      <MainNavigationSection />
      {/* Hero has its own soft blush tint */}
      <div className="bg-[#fdf6ff]">
        <div className="max-w-[1440px] mx-auto">
          <HeroPromotionSection />
        </div>
      </div>
      {/* White sections */}
      <div className="bg-white border-t border-[#f0e8f8]">
        <div className="max-w-[1440px] mx-auto">
          <ChocolateCollectionSection />
        </div>
      </div>
      <div className="bg-[#faf5ff] border-t border-[#f0e8f8]">
        <div className="max-w-[1440px] mx-auto">
          <WhyChooseUsSection />
        </div>
      </div>
      <div className="bg-[#fdf6ff] border-t border-[#f0e8f8]">
        <div className="max-w-[1440px] mx-auto">
          <BestSellersSection />
        </div>
      </div>
      <ArticlesPreviewSection />
      <div className="bg-white border-t border-[#f0e8f8]">
        <div className="max-w-[1440px] mx-auto">
          <CustomerTestimonialsSection />
        </div>
      </div>
      <SiteFooterSection />
    </div>
  );
};
