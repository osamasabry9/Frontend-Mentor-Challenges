import Image from "next/image";
import QuestionAnswerItem from "./QuestionAnswerItem";

const faqData = [
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
];

const FAQContainer = () => {
  return (
    <div className="w-full max-w-2xl mx-4">
      <div className="relative bg-white rounded-xl shadow-2xl p-6 md:p-8 max-h-[80vh] md:max-h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-4 pb-6 md:pb-8">
          <Image
            src="/images/icon-star.svg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 md:h-12 md:w-12"
            aria-hidden="true"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-[--DarkPurple]">
            FAQs
          </h1>
        </div>
        <div role="list" className="space-y-6">
          {faqData.map((item, index) => (
            <QuestionAnswerItem
              key={`faq-${index}`}
              FAQData={item}
              isLast={index === faqData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQContainer;
