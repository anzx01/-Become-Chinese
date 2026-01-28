import { Module, Motivation, City } from './types';

export const MODULES: Module[] = [
  { id: 'onboarding', title: 'Why China?', slug: 'onboarding', category: 'culture', order: 0, nextModule: 'city' },
  { id: 'city', title: 'Choose Your City', slug: 'city', category: 'living', order: 1, nextModule: 'dashboard', prevModule: 'onboarding' },
  { id: 'dashboard', title: 'Dashboard', slug: 'dashboard', category: 'culture', order: 2, nextModule: 'food', prevModule: 'city' },
  { id: 'food', title: 'Food Survival', slug: 'food', category: 'food', order: 3, nextModule: 'street-food', prevModule: 'dashboard' },
  { id: 'street-food', title: 'Street Food Mastery', slug: 'street-food', category: 'food', order: 4, nextModule: 'living', prevModule: 'food' },
  { id: 'living', title: 'Living Essentials', slug: 'living', category: 'living', order: 5, nextModule: 'healthcare', prevModule: 'street-food' },
  { id: 'healthcare', title: 'Healthcare System', slug: 'healthcare', category: 'healthcare', order: 6, nextModule: 'transport', prevModule: 'living' },
  { id: 'transport', title: 'Transport', slug: 'transport', category: 'transport', order: 7, nextModule: 'clothing', prevModule: 'healthcare' },
  { id: 'clothing', title: 'Clothing & Style', slug: 'clothing', category: 'culture', order: 8, nextModule: 'language', prevModule: 'transport' },
  { id: 'language', title: 'Language Basics', slug: 'language', category: 'culture', order: 9, nextModule: 'money', prevModule: 'clothing' },
  { id: 'money', title: 'Money & Apps', slug: 'money', category: 'living', order: 10, nextModule: 'work', prevModule: 'language' },
  { id: 'work', title: 'Work Culture', slug: 'work', category: 'culture', order: 11, nextModule: 'social', prevModule: 'money' },
  { id: 'social', title: 'Social Life', slug: 'social', category: 'culture', order: 12, nextModule: 'dating', prevModule: 'work' },
  { id: 'dating', title: 'Dating & Relationships', slug: 'dating', category: 'culture', order: 13, nextModule: 'festivals', prevModule: 'social' },
  { id: 'festivals', title: 'Festivals & Holidays', slug: 'festivals', category: 'culture', order: 14, nextModule: 'mindset', prevModule: 'dating' },
  { id: 'mindset', title: 'Chinese Mindset', slug: 'mindset', category: 'culture', order: 15, nextModule: 'becoming-chinese', prevModule: 'festivals' },
  { id: 'becoming-chinese', title: 'Becoming Chinese Mode', slug: 'becoming-chinese', category: 'culture', order: 16, nextModule: 'status', prevModule: 'mindset' },
  { id: 'status', title: 'Achievement', slug: 'status', category: 'culture', order: 17, prevModule: 'becoming-chinese' },
];

export const MOTIVATIONS: Motivation[] = [
  { id: 'work', label: 'Work & Career', icon: '💼', description: 'Moving to China for a job or business opportunity' },
  { id: 'study', label: 'Study & Learn', icon: '📚', description: 'Here to study, research, or immerse in the language' },
  { id: 'love', label: 'Love & Relationships', icon: '❤️', description: 'Dating or married to someone Chinese' },
  { id: 'adventure', label: 'Adventure & Culture', icon: '🌏', description: 'Curious explorer ready to dive deep into Chinese culture' },
  { id: 'understanding', label: 'Understanding China', icon: '🧠', description: 'I want to understand China beyond the news' },
];

export const CITIES: City[] = [
  { id: 'beijing', name: 'Beijing', description: 'Political & cultural heart', difficulty: 'medium', color: '#1A1A1A' },
  { id: 'shanghai', name: 'Shanghai', description: 'International business hub', difficulty: 'easy', color: '#DC2626' },
  { id: 'shenzhen', name: 'Shenzhen', description: 'Tech innovation capital', difficulty: 'medium', color: '#6366F1' },
  { id: 'chengdu', name: 'Chengdu', description: 'Laid-back lifestyle hub', difficulty: 'easy', color: '#059669' },
  { id: 'guangzhou', name: 'Guangzhou', description: 'Cantonese culture center', difficulty: 'medium', color: '#7C3AED' },
  { id: 'hangzhou', name: 'Hangzhou', description: 'Scenic tech paradise', difficulty: 'easy', color: '#0891B2' },
];
