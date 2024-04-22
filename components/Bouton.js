import React from "react";
import { View, Pressable, Text } from "react-native";
import Couleur from "./Couleur";
import Styles from "./Styles";

export default Bouton = (props) => {
    return (
        <View style={Styles.bouton}>
            <Pressable
                onPress={props.nav}
                style={Styles.bouton}
            >
                <Text style={{color : Couleur.white, fontSize : 19}}>{props.title}</Text>
            </Pressable>
        </View>
    )
}