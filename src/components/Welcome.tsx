import React from 'react';
import { Heart } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
  name: string;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart, name }) => {
  return (
    <div className="text-center space-y-8 max-w-2xl mx-auto animate-fade-in">
      <h1 className="text-6xl font-dancing text-white mb-8">Forever With Me</h1>
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
        <p className="text-3xl font-dancing text-[#6A0572] mb-6">
          Hey {name}, I made something special for you.
        </p>
        <p className="text-xl text-gray-700 mb-8">
          Ready to go on a little journey with me? 💕
        </p>
        <button
          onClick={onStart}
          className="group relative px-8 py-4 text-xl font-semibold text-white bg-[#FF5E78] rounded-full hover:bg-[#6A0572] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Start Our Journey <Heart className="inline-block" size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;