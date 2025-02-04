import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import Welcome from './components/Welcome';
import Journey from './components/Journey';
import Proposal from './components/Proposal';
import Celebration from './components/Celebration';

export type Stage = 'welcome' | 'journey' | 'proposal' | 'celebration';

function App() {
  const [stage, setStage] = useState<Stage>('welcome');
  const [name] = useState('Prii'); // Updated name to Prii

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFC1CC] to-[#FF5E78] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="absolute animate-float text-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3,
              }}
              size={24}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        {stage === 'welcome' && <Welcome onStart={() => setStage('journey')} name={name} />}
        {stage === 'journey' && <Journey onComplete={() => setStage('proposal')} name={name} />}
        {stage === 'proposal' && <Proposal onAccept={() => setStage('celebration')} name={name} />}
        {stage === 'celebration' && <Celebration name={name} />}
      </div>
    </div>
  );
}

export default App;