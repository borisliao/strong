import type { StateStorage } from 'zustand/middleware'
import { get, set, del } from 'idb-keyval'  // IndexedDB key-value storage

/**
 * Custom StateStorage implementation using IndexedDB for persist zustand/middleware
 */
export const IndexedDB: StateStorage = {
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