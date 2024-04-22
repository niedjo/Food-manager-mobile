import React from "react";
import { Image, Text, View, Pressable } from "react-native";
import Styles from "./Styles";

const SecondButton = (props) => {
    return (
        <Pressable style={Styles.vueSecondImage} onPress={props.handleS}>
            <Image 
                source={props.imageURL}
                style={Styles.AutherImages}
            />
            <Text style={{textAlign : "center"}}>{props.imageName}</Text>
        </Pressable>
    )
}

export default SecondButton