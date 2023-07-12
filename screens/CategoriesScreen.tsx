import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import { FlatList, GestureResponderEvent } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import Category from '../models/category';


type ItemData = {
  index: number;
  item: Category;
};




export default function CategoriesScreen( {navigation}: {navigation: any} ) {
    const renderCategoryItem = (itemData: ItemData) =>{
    const pressHandler= () => {navigation.navigate("MealsOverView");
  }

    return (
    <CategoryGridTile onPress={pressHandler} title={itemData.item.title} color={itemData.item.color} 
    />
)

    }



  
  return (
    <FlatList 
    data={CATEGORIES}
     keyExtractor={(item) => item.id}
     renderItem={renderCategoryItem}
     numColumns={2} />
  )
}
