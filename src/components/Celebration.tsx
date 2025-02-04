import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

interface CelebrationProps {
  name: string;
}

const Celebration: React.FC<CelebrationProps> = ({ name }) => {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF5E78', '#FFC1CC', '#FFD700']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF5E78', '#FFC1CC', '#FFD700']
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center space-y-8 max-w-2xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
        <Heart className="mx-auto text-[#FF5E78] animate-pulse" size={64} />
        <h2 className="text-4xl font-dancing text-[#6A0572] mt-6 mb-4">
          She Said YES! 💍
        </h2>
        <p className="text-2xl text-gray-700 mb-8">
          You just made me the happiest person in the world.
          <br />I love you, {name}! ❤️
        </p>
      </div>
    </div>
  );
};

export default Celebration;