import FAQContainer from "@/components/faq/FAQContainer";
import React from "react";

const FAQPage = () => {
  return (
    <main className="min-h-screen bg-[--LightPink] relative">
      {/* Responsive background pattern */}
      <div className="absolute inset-x-0 top-0 h-64 bg-mobile-pattern md:bg-desktop-pattern bg-cover bg-no-repeat"
           aria-hidden="true" />

      {/* Responsive content container */}
      <div className="relative flex justify-center items-start pt-32 md:pt-40 pb-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <FAQContainer />
      </div>
    </main>
  );
};

export default FAQPage;
