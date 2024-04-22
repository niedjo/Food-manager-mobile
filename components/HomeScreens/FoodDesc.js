import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Styles from "../Styles";
import Couleur from "../Couleur";

export default Food = (props) => {
    // console.log(props.route.params.astuce)
    return (
        <View style={{...Styles.container, paddingLeft : 15}}>
            <Text style={{...leStyle.head}}>{props.route.params.nom}</Text>
            <ScrollView>
                <Image source={{uri : props.route.params.urlImage}} style={{width : 270, height : 200, borderRadius : 20, margin : 10}}/>
                
                <Text style={{...leStyle.what}}>Nom du plat : </Text>
                <Text style={leStyle.texte}>{props.route.params.nom}</Text>

                <Text style={{...leStyle.what}}>historique </Text>
                <Text style={leStyle.texte}>{ props.route.params.historique}</Text>

                <Text style={leStyle.what}>procedure : </Text>
                { props.route.params.precedure.map((p, k) => <Text key={k} style={leStyle.texte}>{k + 1} - {p} {'\n'}</Text>)}

                <Text style={leStyle.what}>astuces :</Text>
                { props.route.params.astuce.map((a, k) => <Text key={k} style={leStyle.texte}>{k + 1} - {a} {'\n'}</Text>)}
            </ScrollView>
        </View>
    )
}

const leStyle = StyleSheet.create({
    head : {
        color : Couleur.white,
        fontSize : 25,
        marginBottom : -0,
        paddingTop : -50,
        marginLeft : "-10%",
        fontStyle : "italic"
    },
    texte : {
       color : Couleur.rougeBlanc,
       marginLeft : 33,
       fontSize : 17,
       paddingBottom : 10
    },
    what : {
        textDecorationLine : "underline",
        marginLeft : 20,
    }
})