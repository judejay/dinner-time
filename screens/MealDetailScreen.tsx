import { useContext } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, Button } from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';
type MealDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'MealDetailScreen'>;

const MealDetailScreen: React.FC<MealDetailScreenProps> = ({ route, navigation }) => {
    
    const favoritesCtx = useContext(FavoritesContext)
    
    const mealId = route.params.mealId.toString();
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
   
    const mealIsFavorite = favoritesCtx?.ids?.includes(mealId);

    function changeFavoritesStatusHandler() {
        if (mealIsFavorite) {
            favoritesCtx?.removeFavorite(mealId);
        } else {
            favoritesCtx?.addFavorite(mealId);
        }
    }

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerRight: ()=> {
                return<IconButton
                    icon={mealIsFavorite? 'star' : 'star-outline' }
                    color='white'
                    onPress={changeFavoritesStatusHandler}  />
            }
        });
    }, [navigation, changeFavoritesStatusHandler]);
   
   
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