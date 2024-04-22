import React, {useState} from "react";
import { TextInput, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from "./Styles";
import Couleur from "./Couleur";

export default Input = (props) => {
    const [Valeur, setValeur] = useState('props.valeur')


    return (
        <View style={{...Styles.vueInput, width : 150 * props.largeur}}>
            <View style={{marginTop : 13, marginLeft : 15}}>
                <Text>
                    {/* pencil-square-o */}
                    <Icon name={props.ico} size={props.icoSize ? props.icoSize : 12 } color={Couleur.rouge}/>
                </Text>
            </View> 
            <Text style={{fontSize : 35, marginLeft : 10, marginBottom : 10, color : Couleur.rouge}}>|</Text>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={props.handlechange}
                style={{width : props.largeur > 1 ? props.largeur * 120 : props.largeur * 80, paddingLeft : 10}}
                keyboardType={props.keyboardType ? props.keyboardType : 'default'}
                secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
                onSubmitEditing={props.affiche}
            />
        </View>
    )
}