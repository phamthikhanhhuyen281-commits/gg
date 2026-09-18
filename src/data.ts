import { ListeningExercise, SpeakingPrompt, VocabularyWord } from './types';

export const LISTENING_EXERCISES: ListeningExercise[] = [
  {
    id: 'l1',
    transcript: "I'm planning to travel to Japan next summer for a two-week vacation.",
    level: 'Easy',
    category: 'Travel'
  },
  {
    id: 'l2',
    transcript: "The new startup is focusing on sustainable energy solutions for urban environments.",
    level: 'Medium',
    category: 'Technology'
  },
  {
    id: 'l3',
    transcript: "Despite the economic challenges, the community remained optimistic about the upcoming festival.",
    level: 'Hard',
    category: 'Social'
  },
  {
    id: 'l4',
    transcript: "Could you please pass me the salt and pepper from the kitchen table?",
    level: 'Easy',
    category: 'Daily Life'
  },
  {
    id: 'l5',
    transcript: "Innovative architectural designs are reshaping the skyline of modern cities today.",
    level: 'Medium',
    category: 'Architecture'
  }
];

export const SPEAKING_PROMPTS: SpeakingPrompt[] = [
  {
    id: 's1',
    topic: 'Daily Routine',
    questions: [
      "What is your typical morning schedule like?",
      "Do you prefer working in the morning or at night?",
      "How do you relax after a long day at work or school?"
    ]
  },
  {
    id: 's2',
    topic: 'Technology in Education',
    questions: [
      "How has technology changed the way students learn?",
      "Do you think AI will replace teachers in the future?",
      "What are the disadvantages of online learning?"
    ]
  }
];

export const VOCABULARY_DATA: VocabularyWord[] = [
  {
    word: "Sustainable",
    pos: "adj",
    vi: "Bền vững",
    en: "Able to be maintained at a certain rate or level.",
    ipa: "/səˈsteɪ.nə.bəl/",
    example: "Sustainable energy sources like solar and wind are essential for the planet.",
    collocations: ["Sustainable development", "Sustainable growth", "Sustainable lifestyle"],
    tags: ["tech", "useful"]
  },
  {
    word: "Innovative",
    pos: "adj",
    vi: "Sáng tạo, đổi mới",
    en: "Featuring new methods; advanced and original.",
    ipa: "/ˈɪn.ə.və.tɪv/",
    example: "The company won an award for its innovative approach to project management.",
    collocations: ["Innovative solution", "Innovative idea", "Innovative design"],
    tags: ["writing", "speaking"]
  }
];
