import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Headphones, Mic, BookOpen, PenTool, Hash, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const skillCards = [
  {
    title: 'Improve Listening',
    desc: 'Listen and type exactly what you hear.',
    icon: Headphones,
    color: 'bg-blue-50 text-blue-600',
    path: '/listening'
  },
  {
    title: 'Speak Better',
    desc: 'Practice shadowing and fluency drills.',
    icon: Mic,
    color: 'bg-emerald-50 text-emerald-600',
    path: '/speaking'
  },
  {
    title: 'Read Smarter',
    desc: 'Master skimming and scanning skills.',
    icon: BookOpen,
    color: 'bg-orange-50 text-orange-600',
    path: '/reading'
  },
  {
    title: 'Write Better',
    desc: 'Build and upgrade your natural sentences.',
    icon: PenTool,
    color: 'bg-purple-50 text-purple-600',
    path: '/writing'
  },
  {
    title: 'Build Vocabulary',
    desc: 'Contextual learning via LexiVault.',
    icon: Hash,
    color: 'bg-pink-50 text-pink-600',
    path: '/vocabulary'
  }
];

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent font-bold tracking-widest text-sm uppercase mb-4">
              Edtech for Learners
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-6">
              Simple Tools.<br />Serious Progress.
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-10">
              HyPilot focuses on micro-skills, not just exams. 
              Train your English with simple but powerful specialized engines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/listening" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                Start Training <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                Explore Skills
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats & Streak Row */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="premium-card p-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-orange-500 mb-1">
              <Flame className="w-5 h-5 fill-current" />
              <span className="font-bold text-2xl">12</span>
            </div>
            <p className="text-xs text-slate-500 font-medium">DAY STREAK</p>
          </div>
          <div className="text-center border-l border-slate-100">
            <span className="font-bold text-2xl block text-primary">850</span>
            <p className="text-xs text-slate-500 font-medium uppercase">Total Words</p>
          </div>
          <div className="text-center border-l border-slate-100">
            <span className="font-bold text-2xl block text-primary">142</span>
            <p className="text-xs text-slate-500 font-medium uppercase">Tasks Completed</p>
          </div>
          <div className="text-center border-l border-slate-100">
              <div className="flex items-center justify-center gap-1">
                 <div className="w-2 h-2 rounded-full bg-emerald-500" />
                 <span className="font-bold text-2xl block text-primary">A2+</span>
              </div>
            <p className="text-xs text-slate-500 font-medium uppercase">Estimated Level</p>
          </div>
        </div>
      </section>

      {/* Skill Dashboard */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-2">Micro-Skill Dashboard</h3>
          <p className="text-slate-500">Choose a specific tool to sharpen your English skills.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
                <Link 
                  to={card.path} 
                  className="premium-card p-8 block group h-full relative overflow-hidden"
                >
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", card.color)}>
                        <card.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                        {card.title}
                    </h4>
                    <p className="text-slate-500 leading-relaxed">
                        {card.desc}
                    </p>
                    <div className="mt-8 flex items-center text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        Launch Tool <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="premium-card p-8 bg-primary text-white flex flex-col justify-between"
          >
              <div>
                <span className="inline-block px-2 py-1 rounded bg-accent/20 text-accent-light text-[10px] font-bold tracking-widest uppercase mb-4">
                  Daily Challenge
                </span>
                <h4 className="text-xl font-bold mb-2">Ready for today?</h4>
                <p className="text-slate-300 text-sm mb-6">
                  Complete 1 listening, 1 speaking, and 1 vocabulary word to keep your streak.
                </p>
              </div>
              <button className="bg-white text-primary w-full py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                Start Now
              </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
