"use client";
import "../../globals.css";
import React, { useState } from "react";

const symptomsList = [
  {
    title: "Intrusive thoughts or images",
    details:
      "These are unwanted, repetitive, and distressing thoughts or images that cause anxiety.",
  },
  {
    title: "Compulsive behaviors (e.g., excessive hand washing, checking)",
    details:
      "Compulsions are repetitive behaviors that a person feels driven to perform to reduce anxiety.",
  },
  {
    title: "Fear of contamination",
    details:
      "A strong fear of dirt, germs, or environmental toxins leading to excessive cleaning or avoidance.",
  },
  {
    title: "Fear of harming oneself or others",
    details:
      "Fear of causing harm to oneself or others, even though the person does not want to cause harm.",
  },
  {
    title: "Need for order and symmetry",
    details:
      "A desire for things to be arranged in a particular, 'perfect' way, often leading to constant re-arranging.",
  },
  {
    title: "Fear of making a mistake",
    details:
      "An irrational fear of making mistakes in everyday tasks, often leading to indecision and checking.",
  },
  {
    title: "Excessive doubt",
    details:
      "Constantly doubting whether actions or decisions are correct, often requiring reassurance.",
  },
  {
    title: "Avoidance of situations that trigger symptoms",
    details:
      "Avoiding places, people, or situations that provoke distress or anxiety.",
  },
  // Additional Symptoms
  {
    title: "Mental checking",
    details:
      "Mentally reviewing actions or thoughts to ensure no mistakes or harm were made, often leading to doubt.",
  },
  {
    title: "Hoarding",
    details:
      "Difficulty discarding items, even if they seem unnecessary, due to fear that something bad might happen.",
  },
  {
    title: "Magical thinking",
    details:
      "Believing that certain thoughts or actions can influence events in ways that defy logic or reality.",
  },
  {
    title: "Counting rituals",
    details:
      "A compulsion to count items or perform actions a specific number of times to prevent something bad from happening.",
  },
  {
    title: "Perfectionism",
    details:
      "An overwhelming need to complete tasks perfectly, which can lead to procrastination or avoidance.",
  },
  {
    title: "Hyper-responsibility",
    details:
      "Feeling overly responsible for preventing harm to others, often leading to excessive checking or avoidance.",
  },
  {
    title: "Somatic obsessions",
    details:
      "Obsessions related to bodily sensations, such as fear of not breathing correctly or feeling like something is 'off' with the body.",
  },
  {
    title: "Religious or moral obsessions",
    details:
      "Worrying about committing blasphemy or immoral acts, leading to excessive praying or seeking reassurance.",
  },
];

const Symptoms = () => {
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const handleCardClick = (index) => {
    setSelectedSymptom(selectedSymptom === index ? null : index); // Toggle symptom details on click
  };

  const handleCloseModal = () => {
    setSelectedSymptom(null); // Close the modal when clicking outside the card
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      <h1 className="text-4xl font-bold mb-6">Symptoms of OCD</h1>
      <p className="mb-6 text-center px-4">
        Obsessive-Compulsive Disorder (OCD) can manifest in various symptoms.
        Here are some common ones:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {symptomsList.map((symptom, index) => (
          <div
            key={index}
            className="group relative bg-white shadow-md rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ maxWidth: "300px" }} // Restrict the card's width
            onClick={() => handleCardClick(index)}
          >
            {/* Sliding background effect (orange) */}
            <span className="absolute inset-0 h-0 w-0 bg-orange-300 transition-all duration-200 ease-out group-hover:h-full group-hover:w-full"></span>

            {/* Text content */}
            <h2 className="relative text-xl font-semibold group-hover:text-orange-900">
              {symptom.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Card */}
      {selectedSymptom !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleCloseModal} // Close when clicking outside
        >
          <div
            className="bg-white p-8 rounded-lg shadow-2xl max-w-lg text-center relative"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            <h2 className="text-2xl font-bold mb-4">
              {symptomsList[selectedSymptom].title}
            </h2>
            <p className="text-gray-600 mb-4">
              {symptomsList[selectedSymptom].details}
            </p>

            <div class="flex justify-center">
              <button
                class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-md group"
                onClick={handleCloseModal}
              >
                <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-orange-600 rounded-md group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Close
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Symptoms;
