import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps  } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { ItemData } from './CategoriesScreen';
import MealItem from '../components/MealsList/MealItem';
import Meal from '../models/meal';
import MealsList from '../components/MealsList/MealsList';

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

 return <MealsList items={displayedMeals} />


}

export default MealsOverView

