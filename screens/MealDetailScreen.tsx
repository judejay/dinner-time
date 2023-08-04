import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
type MealDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'MealDetailScreen'>;
const MealDetailScreen: React.FC<MealDetailScreenProps> = ({ route }) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
            <Text style={styles.title}>{selectedMeal?.title}</Text>
            <MealDetails duration={selectedMeal?.duration} complexity={selectedMeal?.complexity} affordability={selectedMeal?.affordability} id={''} textStyle={styles.detailText} style={undefined} />
            <View style={styles.listOuterContainer}>
               <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>  
                <List data={selectedMeal?.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal?.steps} />
               </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailScreen;


const styles =  StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    rootContainer:{
        marginBottom: 30
    }
   
})