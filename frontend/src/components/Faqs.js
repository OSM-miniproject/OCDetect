"use client";

import React, { useState } from "react";
import '../app/globals.css';
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>

        <div className="accordion-group">
          {/* Accordion Item 2 */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 1 ? "bg-indigo-50" : ""
            }`}
            id="basic-heading-two-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(1)}
              aria-controls="basic-collapse-two-with-arrow"
            >
              <h5>How can I contact customer support?</h5>
              <svg
                className={`transition duration-500 transform ${
                  activeIndex === 1 ? "rotate-180" : ""
                }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-two-with-arrow"
              className="accordion-content w-full px-0 overflow-hidden transition-all duration-500"
              style={{
                maxHeight: activeIndex === 1 ? "250px" : "0px",
              }}
              aria-labelledby="basic-heading-two-with-arrow"
            >
              <p className="text-base text-gray-900 leading-6">
                To contact customer support, look for a Contact us or Help button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 2 ? "bg-indigo-50" : ""
            }`}
            id="basic-heading-three-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(2)}
              aria-controls="basic-collapse-three-with-arrow"
            >
              <h5>What is the purpose of this platform?</h5>
              <svg
                className={`transition duration-500 transform ${
                  activeIndex === 2 ? "rotate-180" : ""
                }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-three-with-arrow"
              className="accordion-content w-full px-0 overflow-hidden transition-all duration-500"
              style={{
                maxHeight: activeIndex === 2 ? "250px" : "0px",
              }}
              aria-labelledby="basic-heading-three-with-arrow"
            >
              <p className="text-base text-gray-900 leading-6">
                This application aims to detect symptoms of OCD, provide users with awareness about the disorder, and offer supportive resources. The platform uses interactive content and therapeutic methods like CBT-based activities to support symptom management.
              </p>
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 3 ? "bg-indigo-50" : ""
            }`}
            id="basic-heading-four-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(3)}
              aria-controls="basic-collapse-four-with-arrow"
            >
              <h5>Who can benefit from this platform?</h5>
              <svg
                className={`transition duration-500 transform ${
                  activeIndex === 3 ? "rotate-180" : ""
                }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-four-with-arrow"
              className="accordion-content w-full px-0 overflow-hidden transition-all duration-500"
              style={{
                maxHeight: activeIndex === 3 ? "250px" : "0px",
              }}
              aria-labelledby="basic-heading-four-with-arrow"
            >
              <p className="text-base text-gray-900 leading-6">
                This platform is designed for individuals who may be at risk of OCD, mental health professionals looking for diagnostic support, and organizations dedicated to mental health awareness. It also provides valuable data insights for researchers studying OCD.
              </p>
            </div>
          </div>

          {/* Accordion Item 5 */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 4 ? "bg-indigo-50" : ""
            }`}
            id="basic-heading-five-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(4)}
              aria-controls="basic-collapse-five-with-arrow"
            >
              <h5>What types of therapy are available in the app?</h5>
              <svg
                className={`transition duration-500 transform ${
                  activeIndex === 4 ? "rotate-180" : ""
                }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-five-with-arrow"
              className="accordion-content w-full px-0 overflow-hidden transition-all duration-500"
              style={{
                maxHeight: activeIndex === 4 ? "250px" : "0px",
              }}
              aria-labelledby="basic-heading-five-with-arrow"
            >
              <p className="text-base text-gray-900 leading-6">
                Currently we are focusing on detection of OCD through our technology and are working on providing therapy based solution as well though we are confirmed that Cognitive Behavioural therapy is the most powerful and effective against OCD.
              </p>
            </div>
          </div>

          {/* Accordion Item 6 */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeIndex === 5 ? "bg-indigo-50" : ""
            }`}
            id="basic-heading-six-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(5)}
              aria-controls="basic-collapse-six-with-arrow"
            >
              <h5>How does the platform raise awareness about OCD?</h5>
              <svg
                className={`transition duration-500 transform ${
                  activeIndex === 5 ? "rotate-180" : ""
                }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-six-with-arrow"
              className="accordion-content w-full px-0 overflow-hidden transition-all duration-500"
              style={{
                maxHeight: activeIndex === 5 ? "250px" : "0px",
              }}
              aria-labelledby="basic-heading-six-with-arrow"
            >
              <p className="text-base text-gray-900 leading-6">
                The application provides users with educational content on OCD symptoms, triggers, and the importance of early intervention. It also connects users with mental health professionals to offer expert advice, fostering understanding and support for those affected by OCD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
