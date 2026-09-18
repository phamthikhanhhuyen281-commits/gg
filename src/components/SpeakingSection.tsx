import React from 'react';
import { Mic, Video, Repeat, Play, PlayCircle, BarChart, ChevronRight } from 'lucide-react';
import { SPEAKING_PROMPTS } from '../data';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const SpeakingSection: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<'prompts' | 'shadowing'>('prompts');
    const [currentPrompt, setCurrentPrompt] = React.useState(0);

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-bold text-primary mb-2">Speaking Engine</h2>
                    <p className="text-slate-500">Practice fluency, pronunciation, and random prompts.</p>
                </div>
                
                <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
                    <button 
                        onClick={() => setActiveTab('prompts')}
                        className={cn("px-4 py-2 rounded-lg text-sm font-semibold transition-all", activeTab === 'prompts' ? "bg-white text-primary shadow-sm" : "text-slate-500")}
                    >
                        Daily Prompts
                    </button>
                    <button 
                        onClick={() => setActiveTab('shadowing')}
                        className={cn("px-4 py-2 rounded-lg text-sm font-semibold transition-all", activeTab === 'shadowing' ? "bg-white text-primary shadow-sm" : "text-slate-500")}
                    >
                        Shadowing
                    </button>
                </div>
            </div>

            {activeTab === 'prompts' ? (
                <div className="space-y-8">
                    <motion.div 
                        key={currentPrompt}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="premium-card p-10 bg-slate-50/30"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <span className="px-3 py-1 rounded-full bg-accent text-white text-[10px] font-bold uppercase tracking-widest">
                                Random Prompt
                            </span>
                            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                                Part 1 & 3 Focus
                            </span>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-primary mb-8 leading-tight">
                            Topic: {SPEAKING_PROMPTS[currentPrompt].topic}
                        </h3>

                        <div className="space-y-4">
                            {SPEAKING_PROMPTS[currentPrompt].questions.map((q, idx) => (
                                <div key={idx} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl group hover:border-accent/40 transition-all">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-light text-accent flex items-center justify-center font-bold text-sm">
                                        {idx + 1}
                                    </span>
                                    <p className="text-lg text-slate-700 font-medium pt-0.5">{q}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-500/20">
                                <Mic className="w-5 h-5" /> Start Recording
                            </button>
                            <button 
                                onClick={() => setCurrentPrompt((prev) => (prev + 1) % SPEAKING_PROMPTS.length)}
                                className="w-full sm:w-auto btn-secondary"
                            >
                                Get New Topic
                            </button>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="premium-card p-6 border-slate-200">
                           <BarChart className="w-6 h-6 text-accent mb-3" />
                           <h4 className="font-bold text-slate-900 mb-1">Fluency Meter</h4>
                           <p className="text-xs text-slate-500">Real-time analysis of your speech speed and fillers.</p>
                        </div>
                        <div className="premium-card p-6 border-slate-200">
                           <Repeat className="w-6 h-6 text-emerald-500 mb-3" />
                           <h4 className="font-bold text-slate-900 mb-1">Mirror Mode</h4>
                           <p className="text-xs text-slate-500">Record and playback to find your own mistakes.</p>
                        </div>
                        <div className="premium-card p-6 border-slate-200">
                           <Video className="w-6 h-6 text-purple-500 mb-3" />
                           <h4 className="font-bold text-slate-900 mb-1">Face Analysis</h4>
                           <p className="text-xs text-slate-500">Improve non-verbal communication and confidence.</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="premium-card p-12 text-center">
                   <div className="w-20 h-20 bg-accent-light text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <PlayCircle className="w-10 h-10" />
                   </div>
                   <h3 className="text-2xl font-bold text-primary mb-4">Shadowing Mode</h3>
                   <p className="text-slate-500 max-w-md mx-auto mb-8">
                     Listen to a native snippet and repeat exactly over it to improve rhythm and intonation.
                   </p>
                   <button className="btn-primary text-lg px-10 h-14">
                      Choose Snippet <ChevronRight className="w-5 h-5" />
                   </button>
                </div>
            )}
        </div>
    );
};
