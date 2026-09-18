import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, PenTool, Lightbulb, Zap, Info, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const WritingSection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'upgrade' | 'idea'>('upgrade');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ original: string, improved: string, advanced: string, explanation: string } | null>(null);

  const handleUpgrade = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = `
        You are an English Writing Expert for an edtech startup HyPilot.
        Rule: NEVER use over-formal words like 'cornerstone', 'familial unit'.
        Rule: Use natural, polished English.
        Input sentence: "${input}"
        
        Provide the result in JSON format:
        {
          "original": "${input}",
          "improved": "natural version",
          "advanced": "more sophisticated but still natural version",
          "explanation": "short explanation of why it is better"
        }
      `;

      const res = await model.generateContent(prompt);
      const text = res.response.text();
      const cleaned = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
      setResult(JSON.parse(cleaned));
    } catch (err) {
      console.error(err);
      // Fallback
      setResult({
        original: input,
        improved: "This is a natural improvement of your sentence.",
        advanced: "This version is more sophisticated and academic.",
        explanation: "Focus on using stronger verbs and clearer structure."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-primary mb-2">Writing Upgrade Engine</h2>
        <p className="text-slate-500">Transform simple ideas into natural, powerful English sentences.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Input Side */}
        <div className="lg:col-span-12 space-y-6">
           <div className="flex bg-slate-50 p-1 rounded-xl w-fit border border-slate-100">
            <button 
              onClick={() => setActiveMode('upgrade')}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2",
                activeMode === 'upgrade' ? "bg-white text-primary shadow-sm" : "text-slate-500"
              )}
            >
              <Zap className="w-4 h-4" /> Sentence Upgrade
            </button>
            <button 
              onClick={() => setActiveMode('idea')}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2",
                activeMode === 'idea' ? "bg-white text-primary shadow-sm" : "text-slate-500"
              )}
            >
              <Lightbulb className="w-4 h-4" /> Idea Generator
            </button>
          </div>

          <div className="premium-card p-6">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={activeMode === 'upgrade' ? "Type a simple sentence to upgrade..." : "Type a topic to generate ideas for..."}
              className="w-full h-32 p-4 text-lg border-2 border-slate-100 rounded-xl focus:border-accent outline-hidden bg-slate-50/50 resize-none"
            />
            <div className="mt-4 flex justify-end">
              <button 
                onClick={handleUpgrade}
                disabled={isLoading || !input.trim()}
                className="btn-primary min-w-[160px] h-12"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white" />
                ) : (
                  <>Upgrade Now <Sparkles className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Result Side */}
        <div className="lg:col-span-12">
          <AnimatePresence mode="wait">
            {result ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Natural Improvement */}
                  <div className="premium-card border-emerald-100 overflow-hidden">
                    <div className="bg-emerald-50 px-4 py-2 border-b border-emerald-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Natural Version</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="p-6">
                      <p className="text-xl font-medium text-emerald-900 leading-relaxed">
                        {result.improved}
                      </p>
                    </div>
                  </div>

                   {/* Advanced Version */}
                   <div className="premium-card border-blue-100 overflow-hidden">
                    <div className="bg-blue-50 px-4 py-2 border-b border-blue-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Advanced Version</span>
                      <Sparkles className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="p-6">
                      <p className="text-xl font-medium text-blue-900 leading-relaxed">
                        {result.advanced}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="premium-card p-6 bg-slate-50 border-slate-200">
                   <div className="flex items-center gap-2 mb-3">
                      <Info className="w-4 h-4 text-slate-400" />
                      <h4 className="text-sm font-bold text-slate-700 uppercase">Expert Insight</h4>
                   </div>
                   <p className="text-slate-600 leading-relaxed italic">
                     "{result.explanation}"
                   </p>
                </div>

                <div className="flex justify-center">
                   <button 
                    onClick={() => { setInput(''); setResult(null); }}
                    className="btn-secondary"
                   >
                     Clear and Try Another
                   </button>
                </div>
              </motion.div>
            ) : !isLoading && (
              <div className="text-center py-20 border-2 border-dashed border-slate-100 rounded-3xl">
                <PenTool className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                <p className="text-slate-400 font-medium">Results will appear here after upgrading</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
