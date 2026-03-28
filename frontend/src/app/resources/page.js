'use client';

import { useRouter } from 'next/navigation';
import '../globals.css';
const Resources = () => {
  const router = useRouter();

  const resources = [
    {
      label: 'Symptoms',
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      image: 'https://res.cloudinary.com/domzgxu5n/image/upload/v1731318920/njsjwaooqkxisjwxe0us.jpg',
      route: '/resources/symptoms',
    },
    {
      label: 'Treatment',
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      image: 'https://res.cloudinary.com/domzgxu5n/image/upload/v1731319604/fauyvixypkxbarae1qua.jpg',
      route: '/resources/treatment',
    },
    {
      label: 'What is OCD?',
      bgColor: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      image: 'https://res.cloudinary.com/domzgxu5n/image/upload/v1731322110/d7ioadf62oglfg19kca9.jpg',
      route: '/resources/whatisocd',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8">Resources</h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl">
        Explore resources about OCD, including symptoms, treatment options, and essential information to understand the disorder better.
      </p>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full max-w-5xl">
        {resources.map((resource) => (
          <div
            key={resource.label}
            className={`flex flex-col items-center p-8 rounded-xl shadow-lg transform transition-transform duration-200 ${resource.bgColor} ${resource.hoverColor} text-white`}
          >
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white mb-6">
              <img
                src={resource.image}
                alt={resource.label}
                className="w-full h-full object-contain transform transition-transform duration-200 hover:scale-105"
              />
            </div>
            <h2 className="text-3xl font-semibold mb-4">{resource.label}</h2>
            <p className="text-center text-sm opacity-90 mb-6 px-4">
              Learn more about {resource.label.toLowerCase()} and how it relates to OCD.
            </p>
            <button
              className="bg-white text-gray-800 font-medium py-2 px-6 rounded-full shadow-md transition-all duration-200 hover:bg-gray-100 hover:shadow-lg"
              onClick={() => router.push(resource.route)}
            >
              Know More ➡️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;

