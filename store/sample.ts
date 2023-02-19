import { create } from 'zustand';

interface Sample {
  bears: number;
  increasePopulation: (state: number) => void;
  removeAllBears: () => void;
}

export const sample = create<Sample>((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: Sample) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
