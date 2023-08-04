import { View, Text, StyleSheet } from 'react-native';

type MealDetailsProps = {
    duration: string;
    complexity: string;
    affordability: string;
    id: string;
    style: any;
    textStyle: any;
};

const MealDetails: React.FC<MealDetailsProps> = ({ duration, affordability, complexity, style, textStyle }) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}> {duration}m</Text>
            <Text style={[styles.detailItem, textStyle]}> {complexity.toUpperCase()} </Text>
            <Text style={[styles.detailItem, textStyle]}> {affordability.toUpperCase()} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
});

export default MealDetails;
