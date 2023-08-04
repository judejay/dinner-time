import { ReactNode } from "react";
import { Text, View, StyleSheet } from "react-native"

type SubtitleProps ={
    children: ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({children}) =>{
    return (
        <View style={styles.subtitleContainer}>          
            <Text  style={styles.subtitle}>{children}</Text>
       </View>
    );
}
export default Subtitle;

const styles = StyleSheet.create({
    subtitle :{
        color: '#e2b497',
        margin: 6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
       
    },
    subtitleContainer: {
        padding: 6,
        margin: 4,
        marginHorizontal: 12,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,

    }
})