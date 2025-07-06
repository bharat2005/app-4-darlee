import { FontAwesome6, Ionicons } from "@expo/vector-icons";

export default {
    'Temperature':{
        title: 'Basal Body Temprerature',
        
        icon:<FontAwesome6 name="temperature-half" size={24} color="black" />,
        unit:'C'
    },

        'Weight':{
        title: 'Body Weight',
        icon:<FontAwesome6 name="weight-scale" size={24} color="black" />,
        unit:'KG'
    },
            'Time':{
        title: 'Sleep time',
        icon:<Ionicons name="alarm" size={24} color="black" />,
        unit:'time'
    },
    
}