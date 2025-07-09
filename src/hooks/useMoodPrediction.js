import { useQueries, useQuery } from "@tanstack/react-query"
import { getWeekKey } from "../utils/getWeekKey"
import { doc, getDoc } from "@react-native-firebase/firestore"
import { auth, db } from "../services/firebase/firebaseConfig"

export const useMoodPrediction = (targetDateStr, weekKey) => {

    return useQuery({
        queryKey:['moodPrediction', weekKey],
        queryFn: async ()=> {
            const res = await getDoc(doc(db, 'users', auth?.currentUser?.uid, 'predictedMoods', weekKey))
            return res.data() ? Object.values(res.data()) : null
        },
        enabled: !!weekKey && !!weekKey
    })
}