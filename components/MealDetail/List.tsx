import { ReactNode } from "react"
import { Text, View, StyleSheet } from "react-native"
import { MEALS } from "../../data/dummy-data"

type ListProps ={
    data: string[],
}

const List: React.FC<ListProps> = ({data}) =>{
    return data.map((dataPoint) =>(
        <View key={dataPoint} style={styles.listItem}>
            <Text style={styles.itemText} >{dataPoint}</Text>
        </View>
    ));       
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#4f1515',
        textAlign: 'center'
    }
})