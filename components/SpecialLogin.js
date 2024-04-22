import React from "react";
import { View } from "react-native";
import Input from "./Input";

export default SpecialLogin = (props) => {
    return (
        <View>
            <Input largeur={props.largeur} ico="envelope" placeholder="Votre e-mail" handlechange={props.handlechange1} keyboardType={'email-address'}/>
            <Input largeur={props.largeur} ico="lock" placeholder="Mot de passe" icoSize={16} handlechange={props.handlechange2} secureTextEntry={true}/>
        </View>
    )
}