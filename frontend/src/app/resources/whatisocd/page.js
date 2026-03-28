'use client'; // Ensure this component is a Client Component
import "../../globals.css";
import { useState } from 'react';

const WhatIsOCD = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLie, setSelectedLie] = useState(null);

  const ocdLies = [
    {
      title: "You're not in control.",
      description: "OCD makes you feel like you can't manage your thoughts or actions, but you can regain control.",
      solution: "Practice mindfulness techniques to ground yourself and regain control over your thoughts."
    },
    {
      title: "You must be perfect.",
      description: "OCD pushes you to seek perfection, but it's okay to be imperfect and make mistakes.",
      solution: "Embrace imperfection and challenge yourself to let go of small mistakes."
    },
    {
      title: "You're a danger to others.",
      description: "OCD can convince you that you're a threat, but having these thoughts doesn't define your character.",
      solution: "Seek support from trusted friends or a therapist to help reframe your thoughts."
    },
    {
      title: "You can't trust your thoughts.",
      description: "OCD can create doubt about your own thoughts, but remember that thoughts are just thoughts.",
      solution: "Keep a thought journal to separate thoughts from facts and gain clarity."
    },
    {
      title: "You're alone in this.",
      description: "OCD can make you feel isolated, but many people experience similar challenges.",
      solution: "Join a support group to connect with others who understand your experience."
    },
    {
      title: "Treatment won't help.",
      description: "Many believe that therapy or medication won't work, but effective treatments are available.",
      solution: "Explore various treatment options with a mental health professional to find what works for you."
    },
    {
      title: "You should avoid triggers.",
      description: "Avoiding situations that trigger OCD might seem like a solution, but it often worsens symptoms.",
      solution: "Gradually face your fears through exposure therapy under professional guidance."
    },
    {
      title: "You are defined by your thoughts.",
      description: "People with OCD often feel that their intrusive thoughts define who they are.",
      solution: "Remind yourself that everyone has unwanted thoughts; they do not reflect your true self."
    },
    {
      title: "It’s all in your head.",
      description: "Many think OCD is just a matter of willpower or imagination, but it is a real mental health condition.",
      solution: "Educate yourself about OCD to understand its nature and impact on your life."
    },
    {
      title: "You can just snap out of it.",
      description: "Some believe that they can easily stop their compulsive behaviors, but this is often not the case.",
      solution: "Seek professional help to develop coping strategies and address the underlying issues."
    },
    {
      title: "Medication is the only answer.",
      description: "While medication can help, it’s not the only solution for everyone with OCD.",
      solution: "Consider combining medication with therapy for a more comprehensive treatment approach."
    },
    {
      title: "You should be ashamed of your symptoms.",
      description: "OCD can make you feel embarrassed about your symptoms, but it's important to understand that you are not alone.",
      solution: "Talk openly about your experiences with trusted friends or professionals to reduce stigma."
    },
    {
      title: "You can't have a normal life.",
      description: "Many feel that OCD will prevent them from living a fulfilling life, but with treatment, improvement is possible.",
      solution: "Set realistic goals for yourself and celebrate small achievements in your journey to recovery."
    },
  ];

  const openModal = (lie) => {
    setSelectedLie(lie);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedLie(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">What is OCD?</h1>
      <p className="mb-8 text-center max-w-2xl">
        Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by intrusive thoughts (obsessions) and repetitive behaviors (compulsions). It can make you believe certain lies about yourself. Here are some common misconceptions:
      </p>

      {/* Video Section */}
      <h2 className="text-3xl font-bold mt-10 mb-6 text-center">Learn More About OCD</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mb-10">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-Zg6PEJHRoo?si=XYmvJS4aANge3_kJ"
            title="OCD: Signs and Symptoms"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/I8Jofzx_8p4?si=ZQO-51MjhyIm3qTR"
            title="OCD: Causes, Symptoms, Pathology"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQXx_2rFPzQ?si=5t5wniUE2uk1fgMA"
            title="OCD: What Causes OCD?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* OCD Lies Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ocdLies.map((lie) => (
          <div
            key={lie.title}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 cursor-pointer hover:bg-orange-400"
            onClick={() => openModal(lie)}
          >
            <h2 className="text-xl font-semibold">{lie.title}</h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transform transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-4">{selectedLie.title}</h2>
            <p className="mb-4">{selectedLie.description}</p>
            <p className="mb-4 font-semibold">Solution: {selectedLie.solution}</p>
            <div className="flex justify-center">
              <button
                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-orange-500 rounded-md group"
                onClick={closeModal}
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-orange-600 rounded-md group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatIsOCD;
