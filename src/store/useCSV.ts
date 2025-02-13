import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { IndexedDB } from './IndexedDBStorage'

type CSVStore = {
    csv: string
    dateUpdated: number
    setCSV: (csv: string) => void
}
export const useCSV = create<CSVStore, [['zustand/persist', unknown]]>(
    persist(
        (set) => ({
            csv: '',
            dateUpdated: Date.now(),
            setCSV: (csv: string) => {
                set({ csv });
                set({ dateUpdated: Date.now() })
            },
        }),
        {
            name: 'csv',
            storage: createJSONStorage(() => IndexedDB),
        },
    ),
)