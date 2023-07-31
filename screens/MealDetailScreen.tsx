import { Text, View } from "react-native";
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type MealDetailScreenProps = NativeStackScreenProps<RootStackParamList , 'MealDetailScreen'>
const MealDetailScreen : React.FC<MealDetailScreenProps> = ({ route }) =>{
 
    const mealId = route.params.mealId

    return (
        <View>
             <Text>{mealId}</Text>
        </View>
       
    )
}


export default MealDetailScreen;