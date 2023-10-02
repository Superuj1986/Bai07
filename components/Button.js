import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import colours from "../constants/colours";

const Button = (props) => {
    const filledColour = props.color || colours.primary;
    const outlineColour = colours.white;
    const BgColour = props.filled ? filledColour : outlineColour;
    const TextColour = props.filled ? colours.white : colours.primary;  
    return(
        <TouchableOpacity
            style={{
                ...style.button,
                ...{backgroundColor: BgColour},
                ...props.style
            }}
            onPress={props.onPress}
        >
            <Text style={{fontSize:18,...{color: TextColour }}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingBottom:16,
        paddingVertical:10,
        borderColor:colours.primary,
        borderWidth:2,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Button;