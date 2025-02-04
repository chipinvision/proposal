import React, { useState } from 'react';
import { Heart, ThumbsUp } from 'lucide-react';

interface ProposalProps {
  onAccept: () => void;
  name: string;
}

const Proposal: React.FC<ProposalProps> = ({ onAccept, name }) => {
  const [thinking, setThinking] = useState(false);

  const handleThinking = () => {
    setThinking(true);
    setTimeout(() => setThinking(false), 1000);
  };

  return (
    <div className="text-center space-y-8 max-w-2xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-8">
        <div className="space-y-4">
          <Heart className="mx-auto text-[#FF5E78]" size={48} />
          <h2 className="text-4xl font-dancing text-[#6A0572] mb-6">
            {name}, My Love
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Every moment with you is special.
            I want to spend forever with you.
          </p>
          <p className="text-3xl font-dancing text-[#FF5E78] mt-8">
            Will you be my life partner? 💍
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <button
            onClick={onAccept}
            className="px-8 py-4 bg-[#FF5E78] text-white rounded-full text-xl hover:bg-[#6A0572] transition-all duration-300 flex items-center justify-center gap-2"
          >
            YES! Forever and Always! <ThumbsUp className="inline-block" size={20} />
          </button>
          <button
            onClick={handleThinking}
            className={`px-8 py-4 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-all duration-300 ${
              thinking ? 'animate-shake' : ''
            }`}
          >
            Let me think... 🤔
          </button>
          {thinking && (
            <p className="text-[#FF5E78] italic mt-2">
              Think fast, I'm already picking out our future dog's name! 🐶
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Proposal;