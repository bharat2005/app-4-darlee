import { router } from "expo-router";

export default {
    data: [
        {
            title:'Account',
            data: [
                {
                    label: 'Proifle',
                    onPress:router.push('/profileDetial')
                },
                {
                    label: 'UserId',
                },

            ]
        },
        {
            title:'App Stores',
            data: [
                {
                    label: 'Terms',
                    onPress:router.push({pathname:'/T&PScreen', params:{id: 'terms'}})
                },
                {
                    label: 'Privacy Procily',
                   onPress:router.push({pathname:'/T&PScreen', params:{id: 'privacy'}})
                },

            ]
        },
                {
            title:'Login',
            data: [
                {
                    label: 'Logout',
                 
                },
                {
                    label: 'Delete Account',
                  
                },

            ]
        },
    ]
}