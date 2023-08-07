import { Children, ReactNode } from "react"
import {StyleSheet, GestureResponderEvent, Pressable, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'

type IconButtonProps ={
    onPress: () => void;
    icon: keyof typeof Ionicons.glyphMap;
    color: string;
}

const IconButton= ({onPress, icon, color}: IconButtonProps)  => {
    // function onPress(event: GestureResponderEvent): void {
    //     throw new Error("Function not implemented.");
    // }

    return (
<Pressable style={({pressed}) =>pressed && styles.pressed} onPress={onPress}>
    <Ionicons name={icon} size={24} color={color} />
</Pressable>
)
};

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})