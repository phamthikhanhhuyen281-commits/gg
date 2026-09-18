import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hash, Search, Filter, Volume2, Save, Tags, Book, ChevronRight, Check } from 'lucide-react';
import { VOCABULARY_DATA } from '../data';
import { cn } from '../lib/utils';

export const VocabularySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWord, setSelectedWord] = useState(VOCABULARY_DATA[0]);
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const filteredWords = VOCABULARY_DATA.filter(w => 
    w.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">LexiVault</h2>
          <p className="text-slate-500">Contextual vocabulary storage. No more isolated lists.</p>
        </div>
        
        <div className="bg-slate-50 p-1 rounded-xl border border-slate-100 flex">
           <button 
             onClick={() => setIsFlashcardMode(false)}
             className={cn("px-4 py-2 rounded-lg text-sm font-semibold", !isFlashcardMode ? "bg-white shadow-sm text-primary" : "text-slate-500")}
           >
             Vault View
           </button>
           <button 
             onClick={() => setIsFlashcardMode(true)}
             className={cn("px-4 py-2 rounded-lg text-sm font-semibold", isFlashcardMode ? "bg-white shadow-sm text-primary" : "text-slate-500")}
           >
             Flashcards
           </button>
        </div>
      </div>

      {!isFlashcardMode ? (
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar list */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search vault..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-hidden transition-all"
              />
            </div>

            <div className="premium-card overflow-hidden">
               <div className="max-h-[500px] overflow-y-auto">
                 {filteredWords.map((word) => (
                   <button
                    key={word.word}
                    onClick={() => setSelectedWord(word)}
                    className={cn(
                      "w-full px-6 py-4 text-left border-b border-slate-50 transition-colors flex items-center justify-between group",
                      selectedWord.word === word.word ? "bg-accent-light" : "hover:bg-slate-50"
                    )}
                   >
                     <div>
                       <p className={cn("font-bold", selectedWord.word === word.word ? "text-accent" : "text-primary")}>
                         {word.word}
                       </p>
                       <p className="text-xs text-slate-400 uppercase tracking-tight">{word.pos}</p>
                     </div>
                     <ChevronRight className={cn("w-4 h-4 transition-transform", selectedWord.word === word.word ? "text-accent translate-x-1" : "text-slate-300")} />
                   </button>
                 ))}
               </div>
            </div>
          </div>

          {/* Detailed View */}
          <div className="lg:col-span-8">
             <motion.div 
               key={selectedWord.word}
               initial={{ opacity: 0, x: 10 }}
               animate={{ opacity: 1, x: 0 }}
               className="premium-card p-10 min-h-[500px]"
             >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
                   <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-4xl font-bold text-primary">{selectedWord.word}</h3>
                        <span className="text-lg text-slate-400 font-medium">{selectedWord.ipa}</span>
                        <button 
                          onClick={() => speak(selectedWord.word)}
                          className="p-2 bg-slate-50 text-accent rounded-full hover:bg-accent hover:text-white transition-all shadow-sm"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-xl text-slate-500 italic">{selectedWord.pos}</p>
                   </div>
                   <div className="flex gap-2">
                      <button className="btn-secondary gap-1 pr-4">
                        <Save className="w-4 h-4" /> Save
                      </button>
                      <button className="btn-primary gap-1 pr-4">
                        <Check className="w-4 h-4" /> Mastered
                      </button>
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-8">
                      <section>
                         <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Meaning & Context</h4>
                         <div className="space-y-4">
                            <div>
                               <p className="text-xs font-bold text-accent mb-1 uppercase">Vietnamese</p>
                               <p className="text-xl font-bold text-primary">{selectedWord.vi}</p>
                            </div>
                            <div>
                               <p className="text-xs font-bold text-accent mb-1 uppercase">English Definition</p>
                               <p className="text-slate-600 leading-relaxed">{selectedWord.en}</p>
                            </div>
                         </div>
                      </section>

                      <section>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Example Sentence</h4>
                        <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-accent">
                           <p className="text-lg text-primary italic leading-relaxed">
                             "{selectedWord.example}"
                           </p>
                        </div>
                      </section>
                   </div>

                   <div className="space-y-8">
                      <section>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Natural Collocations</h4>
                        <div className="space-y-2">
                           {selectedWord.collocations.map(col => (
                             <div key={col} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                <span className="font-medium text-slate-700">{col}</span>
                             </div>
                           ))}
                        </div>
                      </section>

                      <section>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                           {selectedWord.tags.map(tag => (
                             <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-xs font-bold flex items-center gap-1 uppercase">
                               <Hash className="w-3 h-3" /> {tag}
                             </span>
                           ))}
                        </div>
                      </section>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto py-12">
           <div className="perspective-1000 h-[400px] mb-8 cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)}>
              <motion.div 
                className="w-full h-full relative transition-all duration-500 preserve-3d"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden premium-card flex flex-col items-center justify-center p-12">
                      <h4 className="text-6xl font-bold text-primary mb-4">{selectedWord.word}</h4>
                      <p className="text-slate-400 font-medium mb-8">{selectedWord.ipa}</p>
                      <p className="text-xs font-bold text-accent uppercase tracking-widest animate-pulse">Click to Reveal</p>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden premium-card flex flex-col items-center justify-center p-12 rotate-y-180 bg-accent text-white">
                      <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2">Meaning</p>
                      <h4 className="text-4xl font-bold mb-8">{selectedWord.vi}</h4>
                      <div className="text-center bg-white/10 p-6 rounded-2xl border border-white/20">
                         <p className="text-lg italic">"{selectedWord.example}"</p>
                      </div>
                  </div>
              </motion.div>
           </div>
           
           <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => {
                  let nextIdx = (VOCABULARY_DATA.findIndex(w => w.word === selectedWord.word) + 1) % VOCABULARY_DATA.length;
                  setSelectedWord(VOCABULARY_DATA[nextIdx]);
                  setIsFlipped(false);
                }}
                className="btn-primary px-10 h-14 text-lg"
              >
                Next Word
              </button>
           </div>
        </div>
      )}
    </div>
  );
};
