import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import Category from '../models/category';


type ItemData = {
  index: number;
  item: Category;
};

const renderCategoryItem = (itemData: ItemData) =>(
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
)



export default function CategoriesScreen() {
  return (
    <FlatList 
    data={CATEGORIES}
     keyExtractor={(item) => item.id}
     renderItem={renderCategoryItem}
     numColumns={2} />
  )
}
