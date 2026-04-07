import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqList = [

        {
            question: "Is it suitable for all ages and body types?",
            answer:
                "Yes! Posture Pro is designed to fit most body types and is comfortable for both youth and adults.",
        },
        {
            question: "Does it really help with back pain and posture improvement?",
            answer:
                "Absolutely. Consistent use can help reduce slouching, relieve back pain, and improve natural posture.",
        },
        {
            question: "Does it have smart features like vibration alerts?",
            answer:
                "Yes! Some models include vibration sensors that gently remind you whenever you slouch.",
        },
        {
            question: "How will I be notified when the product is back in stock?",
            answer:
                "You can subscribe to email notifications, and we will alert you the moment it is available.",
        },
    ];

    return (
        <div className="w-full px-4 md:px-8 lg:px-20 py-10">

            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                    Frequently Asked Question (FAQ)
                </h2>
                <p className="text-gray-600 mt-3 text-sm md:text-base">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!
                </p>
            </div>

            {/* FAQ Wrapper */}
            <div className="w-full max-w-4xl mx-auto p-5 my-5 rounded-xl border border-[#067A87] bg-[#067a8718]">

                <p className="font-semibold text-sm md:text-base">
                    How does this posture corrector work?
                </p>
                <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
                    A posture corrector works by providing support and gentle alignment to your shoulders,
                    back, and spine, encouraging you to maintain proper posture throughout the day.
                </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
                {faqList.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-xl transition-all duration-300 
                        ${openIndex === index ? "bg-[#E8F6F3] p-5" : "p-4"}`}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center"
                        >
                            <p className="font-semibold text-sm md:text-base text-left">
                                {item.question}
                            </p>

                            {openIndex === index ? (
                                <ChevronUp className="text-gray-700" />
                            ) : (
                                <ChevronDown className="text-gray-700" />
                            )}
                        </button>

                        {/* Answer Section */}
                        {openIndex === index && (
                            <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                                {item.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className="flex justify-center mt-10 items-center gap-3">
                <button className="px-5 py-2 rounded-xl cursor-pointer bg-primary font-bold text-gray-800">
                    See More FAQ’s
                </button>

                <div className="w-10 h-10 rounded-full bg-black flex items-center cursor-pointer justify-center text-primary">
                    <ArrowUpRight size={20} />
                </div>
            </div>

        </div>
    );
};

export default Faq;
