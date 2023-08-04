import { Text, View, Image } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
type MealDetailScreenProps = NativeStackScreenProps<RootStackParamList , 'MealDetailScreen'>
const MealDetailScreen : React.FC<MealDetailScreenProps> = ({ route }) =>{
 
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View>
            <Image source ={{uri : selectedMeal?.imageUrl}}/>
             <Text>{selectedMeal?.title}</Text>
              <MealDetails duration={selectedMeal?.duration} complexity={selectedMeal?.complexity} affordability={selectedMeal?.affordability} id={""} />
                <Text>Ingredients</Text> 
                {selectedMeal?.ingredients.map((ingredient: string) => (<Text key={ingredient}>{ingredient}</Text> ))}    
                <Text>Steps</Text> 
                {selectedMeal?.steps.map((step: string) =>(
                    <Text key={step}>{step}</Text>
                ))}
        </View>
       
    )
}


export default MealDetailScreen;