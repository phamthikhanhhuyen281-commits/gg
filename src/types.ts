export type Level = 'Easy' | 'Medium' | 'Hard';

export interface ListeningExercise {
  id: string;
  transcript: string;
  level: Level;
  category: string;
  audioUrl?: string; // In a real app this would be a real mp3, for now we will use synthesis or placeholder
}

export interface VocabularyWord {
  word: string;
  pos: string;
  vi: string;
  en: string;
  ipa: string;
  example: string;
  collocations: string[];
  tags: string[];
}

export interface UserProgress {
  streak: number;
  tasksCompleted: number;
  wordsLearned: number;
  lastActive: string;
}

export interface SpeakingPrompt {
  id: string;
  topic: string;
  questions: string[];
}
