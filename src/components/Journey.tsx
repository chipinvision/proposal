import React, { useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';

interface JourneyProps {
  onComplete: () => void;
  name: string;
}

const questions = [
  {
    question: "What was the first thing I noticed about you?",
    answer: "Those eyes",
    hint: "They caught my attention instantly"
  },
  {
    question: "What was the first thing I said to you when we met?",
    answer: "You glow like moon",
    hint: "I had to say something to break the ice!"
  },
  {
    question: "Will you still be there with me if the world ends?",
    answer: "Yes",
    hint: "It’s you and me, no matter what"
  }
];

const Journey: React.FC<JourneyProps> = ({ onComplete, name }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = () => {
    const trimmedAnswer = answer.trim().toLowerCase(); // To remove any extra spaces and handle case-insensitivity
    const correctAnswer = questions[currentQuestion].answer.toLowerCase().trim(); // Answer comparison

    console.log(`User Answer: ${trimmedAnswer}`);
    console.log(`Correct Answer: ${correctAnswer}`);

    if (trimmedAnswer === correctAnswer) {
      if (currentQuestion === questions.length - 1) {
        onComplete();
      } else {
        setCurrentQuestion(prev => prev + 1);
        setAnswer('');
        setShowHint(false);
      }
    } else {
      setShowHint(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-dancing text-[#6A0572]">Our Love Story</h2>
          <span className="text-[#FF5E78]">
            {currentQuestion + 1} / {questions.length}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-[#FF5E78] rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl text-gray-800 mb-4">
          {questions[currentQuestion].question}
        </h3>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#FF5E78] focus:outline-none"
          placeholder="Your answer..."
        />
        {showHint && (
          <p className="text-[#FF5E78] italic">
            Hint: {questions[currentQuestion].hint}
          </p>
        )}
        <button
          onClick={handleSubmit}
          className="w-full px-6 py-3 bg-[#FF5E78] text-white rounded-lg hover:bg-[#6A0572] transition-colors duration-300 flex items-center justify-center gap-2"
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Journey;
