import { MEALS, CATEGORIES } from '../data/dummy-data'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { ItemData } from './CategoriesScreen';
import MealItem from '../components/MealItem';
import Meal from '../models/meal';

type MealsOverViewRouteProp = RouteProp<RootStackParamList, 'MealsOverView'>;

type Props = {
  route: MealsOverViewRouteProp;
}
const MealsOverView: React.FC<Props> = (props: Props) => {
  const catId = props.route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
const renderMealItem = (itemData: any) => {
  const item = itemData.item;
  const mealItemProps = {
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