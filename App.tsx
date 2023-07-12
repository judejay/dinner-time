import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverView from './screens/MealsOverView';
type RootStackParamList ={
  //name: string;
  CategoriesScreen: undefined;
  MealsOverView: { categoryId: string}; 
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen}/>
        <Stack.Screen name="MealsOverView" component={MealsOverView} 
        options={({route, navigation}) => {
          const catId = route.params?.categoryId;
          return {
            title: catId
          }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
