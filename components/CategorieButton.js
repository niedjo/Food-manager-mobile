import React from "react";
import { Pressable, Text } from "react-native";
import Styles from "./Styles";
import Couleur from "./Couleur";

export default CategorieButton = (props) => {
    return (
        <Pressable 
            style={{...Styles.categoriButton, width : props.largeur ? props.largeur * 90 : 90}}
            onPress={() => {alert("Desole, nous ne disposons pas encore de repas de la categorie " + props.nomb.toUpperCase())}}
        >
            <Text style={{color : Couleur.white}}>{props.nomb}</Text>
        </Pressable>
    )
}
