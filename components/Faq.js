"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. The item must be unused and in its original packaging."
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. Shipping costs and delivery times vary depending on your location."
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive an email with a tracking number and link."
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive an email with a tracking number and link."
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive an email with a tracking number and link."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 min-h-[480px] mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm text-gray-700"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left font-medium cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
