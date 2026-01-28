export type ModuleCategory = 'food' | 'living' | 'transport' | 'culture';

export interface Module {
  id: string;
  title: string;
  slug: string;
  category: ModuleCategory;
  order: number;
  nextModule?: string;
  prevModule?: string;
}

export interface UserProgress {
  currentModule: string;
  completedModules: string[];
  selectedMotivation?: string;
  selectedCity?: string;
  skillLevels: {
    food: number;
    living: number;
    transport: number;
    culture: number;
  };
  lastVisited: string;
}

export interface Motivation {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface City {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  color: string;
}
