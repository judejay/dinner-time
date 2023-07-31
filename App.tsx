import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverView from './screens/MealsOverView';
import MealDetailScreen from './screens/MealDetailScreen';


export type RootStackParamList ={
  [x: string]: any;
  CategoriesScreen: undefined;
  MealsOverView: { categoryId: string, otherParams: string}; 
  MealDetailScreen: { mealId: number, otherParams: string};
}

export const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
    <StatusBar style='light' />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#4f1515'},
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#401313'}}}>
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen}
        options={({
          title: "All Categories",
          
        })}
        />
        <Stack.Screen name="MealsOverView" component={MealsOverView} />
        <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
