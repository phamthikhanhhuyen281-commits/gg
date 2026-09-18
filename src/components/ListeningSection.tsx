import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Headphones, Play, RotateCcw, CheckCircle2, XCircle, Info, ChevronRight, Volume2 } from 'lucide-react';
import { LISTENING_EXERCISES } from '../data';
import { cn } from '../lib/utils';

export const ListeningSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'listen-type' | 'gap-fill'>('listen-type');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const exercise = LISTENING_EXERCISES[currentIndex];

  const handleLevelChange = (level: string) => {
    // In a real app, filter data
    console.log("Change to", level);
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleSubmit = () => {
    const normalizedInput = userInput.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
    const normalizedTarget = exercise.transcript.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
    
    setIsCorrect(normalizedInput === normalizedTarget);
    setStatus('submitted');
  };

  const nextExercise = () => {
    setCurrentIndex((prev) => (prev + 1) % LISTENING_EXERCISES.length);
    setUserInput('');
    setStatus('idle');
    setShowExplanation(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">Listening Engine</h2>
          <p className="text-slate-500">Train your ear with precision-driven exercises.</p>
        </div>
        
        <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
          <button 
            onClick={() => setActiveTab('listen-type')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-semibold transition-all",
              activeTab === 'listen-type' ? "bg-white text-primary shadow-sm" : "text-slate-500"
            )}
          >
            Listen & Type
          </button>
          <button 
            onClick={() => setActiveTab('gap-fill')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-semibold transition-all",
              activeTab === 'gap-fill' ? "bg-white text-primary shadow-sm" : "text-slate-500"
            )}
          >
            Gap Fill
          </button>
        </div>
      </div>

      <motion.div 
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="premium-card p-10 mb-8"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <span className="px-3 py-1 rounded-full bg-accent-light text-accent text-xs font-bold uppercase tracking-wider">
               {exercise.level}
             </span>
             <span className="text-xs text-slate-400 font-medium">{exercise.category}</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">Exercise {currentIndex + 1}/{LISTENING_EXERCISES.length}</p>
        </div>

        <div className="flex flex-col items-center mb-10">
          <button 
            onClick={() => speak(exercise.transcript)}
            className="w-24 h-24 rounded-full bg-accent text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20"
          >
            <Play className="w-10 h-10 fill-current ml-1" />
          </button>
          <p className="mt-4 text-sm font-bold text-slate-400 tracking-widest uppercase">Click to play</p>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-bold text-slate-600 uppercase tracking-wide">
            Your Transcription
          </label>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={status === 'submitted'}
            placeholder="Type exactly what you hear..."
            className={cn(
              "w-full p-6 text-lg rounded-2xl border-2 transition-all outline-hidden resize-none h-32",
              status === 'idle' ? "border-slate-100 bg-slate-50 focus:border-accent focus:bg-white" :
              isCorrect ? "border-emerald-500 bg-emerald-50" : "border-red-500 bg-red-50"
            )}
          />
        </div>

        <AnimatePresence>
          {status === 'submitted' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-8 space-y-6"
            >
              <div className="flex items-center gap-4">
                {isCorrect ? (
                  <div className="flex items-center gap-2 text-emerald-600 font-bold">
                    <CheckCircle2 className="w-6 h-6" /> Perfect Match!
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600 font-bold">
                    <XCircle className="w-6 h-6" /> Keep practicing
                  </div>
                )}
              </div>

              {!isCorrect && (
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-2">The correct answer:</p>
                  <p className="text-lg text-primary font-medium">{exercise.transcript}</p>
                </div>
              )}

              <div className="flex gap-4">
                <button 
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="btn-secondary h-12 px-6"
                >
                  <Info className="w-4 h-4" /> 
                  {showExplanation ? 'Hide' : 'Show'} Explanation
                </button>
                <button 
                  onClick={nextExercise}
                  className="btn-primary h-12 px-8 flex-1 sm:flex-none"
                >
                  Next Task <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              {showExplanation && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-blue-50 rounded-2xl border border-blue-100"
                >
                  <h5 className="font-bold text-blue-900 mb-2">Key Vocabulary</h5>
                  <div className="flex flex-wrap gap-2">
                    {exercise.transcript.split(' ').filter(w => w.length > 5).map(word => (
                      <span key={word} className="px-2 py-1 bg-white text-blue-700 text-xs font-medium rounded-md border border-blue-200">
                        {word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"")}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {status === 'idle' && (
          <div className="mt-8 flex justify-end">
            <button 
              onClick={handleSubmit}
              disabled={!userInput.trim()}
              className="btn-primary px-10 h-14 text-lg disabled:opacity-50"
            >
              Check Answer
            </button>
          </div>
        )}
      </motion.div>

      {/* Engine Rules */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="premium-card p-6 bg-slate-50/50">
          <div className="flex items-center gap-2 mb-4">
            <RotateCcw className="w-5 h-5 text-accent" />
            <h4 className="font-bold text-primary">Repetition Rule</h4>
          </div>
          <p className="text-sm text-slate-500">
            Listen at least 3 times before checking the transcript. Try to catch the intonation and pauses.
          </p>
        </div>
        <div className="premium-card p-6 bg-slate-50/50">
          <div className="flex items-center gap-2 mb-4">
            <Volume2 className="w-5 h-5 text-accent" />
            <h4 className="font-bold text-primary">Accent Variety</h4>
          </div>
          <p className="text-sm text-slate-500">
            Our database includes Standard British and American accents to ensure real-world versatility.
          </p>
        </div>
      </div>
    </div>
  );
};
