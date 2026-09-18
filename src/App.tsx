import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { ListeningSection } from './components/ListeningSection';
import { SpeakingSection } from './components/SpeakingSection';
import { ReadingSection } from './components/ReadingSection';
import { WritingSection } from './components/WritingSection';
import { VocabularySection } from './components/VocabularySection';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listening" element={<ListeningSection />} />
            <Route path="/speaking" element={<SpeakingSection />} />
            <Route path="/reading" element={<ReadingSection />} />
            <Route path="/writing" element={<WritingSection />} />
            <Route path="/vocabulary" element={<VocabularySection />} />
          </Routes>
        </main>
        
        <footer className="bg-slate-50 border-t border-slate-100 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
             <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center italic text-white text-xs font-bold">H</div>
                <span className="font-bold text-primary tracking-tight">HyPilot</span>
             </div>
             <p className="text-slate-400 text-sm mb-6 uppercase tracking-widest font-bold">Simple Tools. Serious Progress.</p>
             <div className="flex justify-center gap-8 text-sm font-medium text-slate-500">
                <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms</a>
                <a href="#" className="hover:text-primary transition-colors">Contact</a>
             </div>
             <p className="mt-8 text-slate-300 text-xs text-center">© {new Date().getFullYear()} HyPilot EdTech. Built for real progress.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

