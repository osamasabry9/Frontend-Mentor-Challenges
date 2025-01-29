import React from "react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  FAQData: FAQItem;
  isLast: boolean;
}

const QuestionAnswerItem = ({ FAQData, isLast }: Props) => {
  return (
    <div
      role="listitem"
      className={`pb-6 ${!isLast ? "border-b border-[--LightPink]" : ""}`}
    >
      <details className="group">
        <summary className="flex justify-between items-center cursor-pointer list-none">
          <h2 className="text-[--DarkPurple] font-semibold text-base md:text-lg hover:text-[--Pink] transition-colors">
            {FAQData.question}
          </h2>
          <div className="ml-4 shrink-0">
            <Image
              src="/images/icon-plus.svg"
              alt="Expand answer"
              width={24}
              height={24}
              className="group-open:hidden block"
              aria-hidden="true"
            />
            <Image
              src="/images/icon-minus.svg"
              alt="Collapse answer"
              width={24}
              height={24}
              className="group-open:block hidden"
              aria-hidden="true"
            />
          </div>
        </summary>
        <p className="mt-4 text-[--GrayishPurple] text-sm md:text-base leading-relaxed">
          {FAQData.answer}
        </p>
      </details>
    </div>
  );
};

export default QuestionAnswerItem;
