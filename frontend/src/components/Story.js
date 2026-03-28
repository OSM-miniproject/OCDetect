'use client';
import { useState } from 'react';
import '../app/globals.css';
const Story = ({ story }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-md p-4 bg-white rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold text-purple-700 cursor-pointer" onClick={toggleExpand}>
        {story.title}
      </h2>

      {isExpanded && (
        <div className="mt-2">
          <p className="text-gray-600">{story.description}</p>

          <div className="mt-4">
            <label className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={story.depressionDiagnosis}
                readOnly
              />
            How often do you find yourself feeling anxious or worried about not doing something &#34;the right way&#34;?
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" checked={story.anxietyDiagnosis} readOnly />
              Do you ever spend extra time checking or re-doing things to ensure everything is done correctly, even if it feels repetitive?
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" checked={story.obsessionType} readOnly />
              Have you experienced thoughts that, no matter how hard you try, you can&#39;t seem to ignore or push away?
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" checked={story.compulsionType} readOnly />
              Do you worry that something bad will happen to you or your loved ones if you don&#39;t follow certain practices or routines exactly?
            </label>
          </div>

          <button
            onClick={toggleExpand}
            className="mt-4 text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Story;
