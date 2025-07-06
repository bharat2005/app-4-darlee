import { create } from 'zustand'

export const useAgreementStore = create((set)=> ({
    readTerms: false,
    readPrivacy:false,
    markTermsRead: ()=> set({ readTerms:true}),
    markPrivacyRead: ()=> set({ readPrivacy:true}),
}))