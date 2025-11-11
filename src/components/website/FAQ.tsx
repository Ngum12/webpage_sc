import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "What makes Student Companion different from other chatbots?",
    answer: "Student Companion is specifically designed for African universities with context-aware responses, multilingual support, and seamless integration with existing university systems. It combines AI intelligence with human escalation when needed."
  },
  {
    question: "How does the chatbot handle data privacy and security?",
    answer: "We prioritize data security with end-to-end encryption, compliance with international data protection standards (GDPR), and restrict access to institutional email domains only. All data is stored securely and never shared with third parties."
  },
  {
    question: "Can the chatbot integrate with our existing university systems?",
    answer: "Yes! Student Companion is designed to integrate with various Learning Management Systems (LMS), Student Information Systems (SIS), and other institutional platforms through secure APIs. Our team works closely with your IT department for seamless integration."
  },
  {
    question: "What languages does the chatbot support?",
    answer: "Currently, the chatbot primarily operates in English, with plans to expand to French, Swahili, and other African languages based on institutional needs. We're actively developing multilingual capabilities."
  },
  {
    question: "How quickly can we implement Student Companion at our university?",
    answer: "Implementation typically takes 4-8 weeks, depending on the complexity of integration requirements. This includes setup, customization, staff training, and a pilot phase with a select group of students."
  },
  {
    question: "What kind of support do universities receive after implementation?",
    answer: "We provide comprehensive ongoing support including 24/7 technical assistance, regular system updates, performance analytics, staff training sessions, and a dedicated account manager for your institution."
  },
  {
    question: "Can students access the chatbot outside of campus?",
    answer: "Absolutely! Student Companion is accessible 24/7 from any device with internet connection - smartphones, tablets, or computers. Students can get support whether they're on campus, at home, or anywhere in the world."
  },
  {
    question: "How does the AI learn and improve over time?",
    answer: "Our AI uses machine learning to continuously improve based on interactions, feedback, and new information. The system is regularly updated with new university policies, course information, and common student queries to enhance accuracy."
  },
  {
    question: "What happens when the chatbot can't answer a question?",
    answer: "When the AI cannot provide a satisfactory answer, it seamlessly escalates the query to appropriate human staff members (advisors, administrators, faculty) and notifies the student of the escalation. No question goes unanswered."
  },
  {
    question: "Is there a cost for students to use the chatbot?",
    answer: "No, Student Companion is completely free for students. The service is provided to universities as an institutional tool, with all costs covered by the university's subscription."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-400 mb-4 text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg">
            Everything you need to know about Student Companion AI
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/5 border border-blue-500/20 rounded-lg px-6 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-white hover:text-blue-300 transition-colors py-5">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-blue-400 hover:text-blue-300 transition-colors font-semibold underline"
          >
            Contact our team →
          </button>
        </div>
      </div>
    </section>
  );
}
