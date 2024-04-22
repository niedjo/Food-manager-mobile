import React from "react";
import { View, Image, Pressable, Text } from "react-native";
import Styles from "../Styles";
import Couleur from "../Couleur";

export default CustomImage = (props) => {
    img = props.item.urlImage
    return (
        <View style={Styles.vueImageFood}>
                <Image source={{uri : props.item.urlImage}} style={Styles.ImageFood}/>
                <View style={{margin : 9, width : 200}}>
                    <Text style={{fontSize : 15, color : Couleur.white}}>{props.item.nom}</Text>
                    <Text style={{opacity : 0.6, color : "#888"}}>{props.item.provenance}</Text>
                    <Pressable
                        onPress={props.nav}
                    >
                        <Text style={{marginLeft : 120, color : Couleur.jaune}}>Voir recette</Text>
                    </Pressable>
                </View>
        </View>
    )
}