import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps  } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { ItemData } from './CategoriesScreen';
import MealItem from '../components/MealItem';
import Meal from '../models/meal';

export type MealsOverViewRouteProp = NativeStackScreenProps<RootStackParamList, 'MealsOverView'>;


const MealsOverView: React.FC<MealsOverViewRouteProp> = ({ route, navigation}) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
 const categoryTitle = CATEGORIES.find(category => category.id === catId)?.title;

  navigation.setOptions({
    title: categoryTitle
  });
  }, [catId, navigation]);

 

const renderMealItem = (itemData: any) => {
  const item = itemData.item;
  const mealItemProps = {
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    affordability: item.affordability,
    complexity: item.complexity,
    duration: item.duration,
  }
  return(
    <MealItem {...mealItemProps}  />
  ) 
}

  return (
    <View style={styles.container}>
     <FlatList data={displayedMeals} keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
     />
    </View>
  )
}

export default MealsOverView

const styles = StyleSheet.create({
  container:{
     flex: 1,
     padding: 16,
  }
   

})