import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import MealDetails from '../MealDetails';

type MealItemProps ={
    title: string;
    imageUrl: string;
    affordability: string;
    complexity: string;
    duration: string;
    id: string;
}


const MealItem: React.FC<MealItemProps> = ({id, title, imageUrl, duration, complexity, affordability}) => {
   const navigation = useNavigation<RootStackParamList>();


   function selectMealItemHandler() {
    navigation.navigate('MealDetailScreen', {
      mealId: id,
    });
  }
 
   
   return <View style={styles.mealItem}>  
        <Pressable 
        onPress={selectMealItemHandler}
         android_ripple={{color: '#ccc'}} style={({pressed}) =>  pressed ? styles.buttonPressed: null
} >
          <View style={styles.innerContainer}>
                <View>
                   <Image source={{uri: imageUrl}} style={styles.image} />
                   <Text style={styles.title}>{title}</Text> 
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} id={''} style={undefined} textStyle={undefined} />
         </View>
        </Pressable>
    </View>
};

export default MealItem;

const styles = StyleSheet.create({
    innerContainer: { 
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius:8,
        overflow:Platform.OS ==='android' ? 'hidden': 'visible'

    },
    buttonPressed: {
        opacity: 0.5
    },
    button: {
        flex: 1
    },
  
})