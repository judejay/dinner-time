import { Pressable, View, Text, StyleSheet, Platform } from 'react-native'

interface CategoryGridTileProps {
    title: string,
    color: string,
}


const CategoryGridTile: React.FC<CategoryGridTileProps> = ({title, color}) => {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
        <Pressable android_ripple={{color: '#ccc'}} style={(pressed) => [styles.button,pressed ? styles.button: null ]}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </Pressable>

    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius:8,
        overflow:Platform.OS ==='android' ? 'hidden': 'visible'

    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonPressed: {
        opacity: 0.5
    },
    button: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})