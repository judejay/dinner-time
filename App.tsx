import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverView from './screens/MealsOverView';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';


export type RootStackParamList ={
  [x: string]: any;
  CategoriesScreen: undefined;
  MealsOverView: { categoryId: string, otherParams: string}; 
  MealDetailScreen: { mealId: number, otherParams: string};
}

export const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
    <StatusBar style='light' />
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerStyle: { backgroundColor: '#4f1515'},
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#401313'},
        }}
          >
       
        <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
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
