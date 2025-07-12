import { create } from 'zustand'


export const homeSheetStore = create((set)=> ({
    homeSheetDate: null,
    isOpen:false,
    openSheet: (date)=> set({ homeSheetDate: date, isOpen:true}),
    closeSheet: ()=> set({ homeSheetDate: null, isOpen:false}),
}))