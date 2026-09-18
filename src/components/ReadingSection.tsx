import React from 'react';
import { Search, Zap, MousePointer2 } from 'lucide-react';

export const ReadingSection: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-primary mb-2">Reading Micro-Skills</h2>
                <p className="text-slate-500">Master the art of skimming, scanning and keyword matching.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="premium-card p-8 group">
                    <Search className="w-10 h-10 text-accent mb-6" />
                    <h3 className="text-xl font-bold text-primary mb-3">Scanning Engine</h3>
                    <p className="text-slate-500 mb-6">Find specific information in large texts within seconds.</p>
                    <button className="btn-primary w-full shadow-none group-hover:shadow-lg group-hover:shadow-accent/20 transition-all">
                        Launch Drill
                    </button>
                </div>

                <div className="premium-card p-8 group">
                    <Zap className="w-10 h-10 text-orange-500 mb-6" />
                    <h3 className="text-xl font-bold text-primary mb-3">Skimming Mode</h3>
                    <p className="text-slate-500 mb-6">Understand the main message of a passage in under 15 seconds.</p>
                    <button className="btn-primary bg-orange-500 hover:bg-orange-600 w-full shadow-none group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all">
                        Launch Drill
                    </button>
                </div>

                <div className="premium-card p-8 group md:col-span-2">
                    <MousePointer2 className="w-10 h-10 text-emerald-500 mb-6" />
                    <h3 className="text-xl font-bold text-primary mb-3">Keyword Matching</h3>
                    <p className="text-slate-500 mb-6">Train your brain to recognize synonyms and paraphrasing instantly.</p>
                    <button className="btn-primary bg-emerald-500 hover:bg-emerald-600 w-full shadow-none group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all">
                        Launch Drill
                    </button>
                </div>
            </div>
        </div>
    );
};
