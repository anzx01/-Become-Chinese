import { UserProgress, Module } from './types';
import { MODULES } from './constants';

const STORAGE_KEY = 'become-chinese-progress';

export class ProgressTracker {
  private getDefaultProgress(): UserProgress {
    return {
      currentModule: 'onboarding',
      completedModules: [],
      skillLevels: {
        food: 0,
        living: 0,
        transport: 0,
        culture: 0,
        healthcare: 0,
      },
      lastVisited: new Date().toISOString(),
    };
  }

  getProgress(): UserProgress {
    if (typeof window === 'undefined') {
      return this.getDefaultProgress();
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        return this.getDefaultProgress();
      }
      return JSON.parse(stored);
    } catch (error) {
      console.error('Failed to load progress:', error);
      return this.getDefaultProgress();
    }
  }

  saveProgress(progress: Partial<UserProgress>): void {
    if (typeof window === 'undefined') return;

    try {
      const current = this.getProgress();
      const updated = {
        ...current,
        ...progress,
        lastVisited: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  }

  markModuleComplete(moduleId: string): void {
    const progress = this.getProgress();
    if (!progress.completedModules.includes(moduleId)) {
      progress.completedModules.push(moduleId);

      // Update skill levels
      const module = MODULES.find(m => m.id === moduleId);
      if (module) {
        progress.skillLevels[module.category] += 20;
      }

      this.saveProgress(progress);
    }
  }

  getNextModule(): Module | null {
    const progress = this.getProgress();
    const currentModule = MODULES.find(m => m.id === progress.currentModule);

    if (!currentModule?.nextModule) {
      return null;
    }

    return MODULES.find(m => m.id === currentModule.nextModule) || null;
  }

  calculateSkillLevel(category: string): number {
    const progress = this.getProgress();
    return Math.min(100, progress.skillLevels[category as keyof typeof progress.skillLevels] || 0);
  }

  resetProgress(): void {
    if (typeof window === 'undefined') return;

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to reset progress:', error);
    }
  }

  setCurrentModule(moduleId: string): void {
    this.saveProgress({ currentModule: moduleId });
  }
}

export const progressTracker = new ProgressTracker();
