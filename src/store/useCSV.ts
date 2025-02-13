import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { StateStorage } from 'zustand/middleware'
import { get, set, del } from 'idb-keyval'  // IndexedDB key-value storage

const storage: StateStorage = {
    getItem: async (name: string): Promise<string | null> => {
        console.log(name, 'has been retrieved')
        return (await get(name)) || null
    },
    setItem: async (name: string, value: string): Promise<void> => {
        console.log(name, 'with value', value, 'has been saved')
        await set(name, value)
    },
    removeItem: async (name: string): Promise<void> => {
        console.log(name, 'has been deleted')
        await del(name)
    },
}

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
            storage: createJSONStorage(() => storage),
        },
    ),
)