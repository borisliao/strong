import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { IndexedDB } from './IndexedDBStorage'

type WorkoutStore = {
    exerciseName: string
    setExerciseName: (exerciseName: string) => void
}
export const useWorkoutSelection = create<WorkoutStore, [['zustand/persist', unknown]]>(
    persist(
        (set) => ({
            exerciseName: '',
            setExerciseName: (exerciseName: string) => set({ exerciseName }),
        }),
        {
            name: 'workout-selection',
            storage: createJSONStorage(() => IndexedDB),
        },
    ),
)