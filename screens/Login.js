import React, { useState } from "react";
import { View, Text, Pressable, Button } from "react-native";
import Styles from "../components/Styles";
import Input from "../components/Input";
import Bouton from "../components/Bouton";
import SpecialLogin from "../components/SpecialLogin";
import SecondButton from "../components/SecondButton";
import Couleur from "../components/Couleur";
// import { signInWithGoogle }  from "../components/auth";
// import Btn from "../components/Firebase";
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, doc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCQMJSLEpUpmmEMfixrpJbgrDLL4WPVbg4",
    authDomain: "food-manager-6944a.firebaseapp.com",
    projectId: "food-manager-6944a",
    storageBucket: "food-manager-6944a.appspot.com",
    messagingSenderId: "249401583817",
    appId: "1:249401583817:web:127f3727867ccffbc8c518",
    measurementId: "G-9140MJHXD3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const NetworkContext = React.createContext() 


export default function Login (props) {

    const [IsConnexion, setIsConnexion] = useState(true)
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Nom, setNom] = useState('')
    const [Prenom, setPrenom] = useState('')
    const HandleSetConnexion = async () => {
        if (IsConnexion) {
            if (!Email || !Password) {
                alert("veillez remplir tous les champs s'il vous plait")
            }
            else {
                const response = await fetch(
                    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCQMJSLEpUpmmEMfixrpJbgrDLL4WPVbg4',
                    {
                        method : "POST",
                        headers : {
                            'Content-Type' : 'application/json'
                        },
                        body : JSON.stringify({
                            email : Email,
                            password : Password,
                            returnSecureToken : true
                        })
                    }
                )
                if (!response.ok) {
                    // throw new Error("il y a une petite erreur")
                    alert("probleme de login et/ ou de mot de passe : veillez reessayer")
                    return;
                }
                else{
                    const dataObj = await response.json()
                    console.log(dataObj.localId)
                    const info = {
                        email : Email,
                        password : Password,
                        nom : Nom,
                        prenom : Prenom,
                        localId : dataObj.localId
                    }
                    props.navigation.navigate('Page', {data : info})
                }
            }
        }
        else {
            if (!Email || !Password || !Nom || !Prenom) {
                alert("veillez remplir tous les champs s'il vous plait")
            }
            else {
                const response = await fetch(
                    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCQMJSLEpUpmmEMfixrpJbgrDLL4WPVbg4',
                    {
                        method : "POST",
                        headers : {
                            'Content-Type' : 'application/json'
                        },
                        body : JSON.stringify({
                            email : Email,
                            password : Password,
                            returnSecureToken : true
                        })
                    }
                )
                if (!response.ok) {
                    // throw new Error("il y a une petite erreur")
                    alert("probleme de login et/ ou de mot de passe. veillez reessayer")
                    return;
                }
                else{
                    const dataObj = await response.json()
                    console.log(dataObj.localId)
                    const info = {
                        email : Email,
                        password : Password,
                        nom : Nom,
                        prenom : Prenom,
                        localId : dataObj.localId
                    }
                    const addClient = async () => {
                        try {
                            const docRef = doc(db, "client", dataObj.localId);
                            await setDoc(docRef, {
                                nom: Nom,
                                prenom: Prenom,
                            });
                            console.log("Document written with ID: ", docRef.id);
                        } catch (e) {
                            console.error("Error adding document: ", e);
                        }
                    }
                    addClient()
                    props.navigation.navigate('Page', {data : info})
                }
            }
        }

    }

    // const signInWithGoogle = () => {

    // }

    return IsConnexion ? <View style={Styles.container}>
        <Text style={Styles.TextePrincipale}>Connexion</Text>
        <SpecialLogin largeur={2}  handlechange1={Email => setEmail(Email)} handlechange2={Password => setPassword(Password)} valeur={Nom}/>
        <Bouton title = "Connexion" nav={HandleSetConnexion}/>
        <Text style={{color : Couleur.white, margin : 10}}>----------------------   connexion   ----------------------</Text>
        <View style={{...Styles.FlexLine, marginBottom : 15}}>
            {/* <SecondButton imageURL={require("../assets/google.jpg")} imageName="Google" handleS = {() => signInWithGoogle()}/>
            <SecondButton imageURL={require("../assets/facebook.jpg")} imageName="Facebook" handleS = {() => signInWithGoogle}/> */}
        </View>
        <View style={Styles.FlexLine}>
            <Text style={{color : Couleur.white, marginTop : 10}}>Besoin d'un compte ?</Text>
            <Pressable
                onPress={() => setIsConnexion(!IsConnexion)}
            >   
                <Text style={{margin : 10}}> S'inscrire</Text>
            </Pressable>
            {/* <Button title="fetct" onPress={fetChData}/> */}
            {/* <Firebase /> */}
            {/* foodmanager.free.nf  :  if0_34710119!*/}
        </View>
    </View>

    : 

    <View style={Styles.container}>
        <Text style={Styles.TextePrincipale}>Inscription</Text>
        <View style={Styles.FlexLine}>
            <Input largeur={0.94} ico="pencil-square-o" placeholder="Nom" icoSize={20} handlechange={(n) => setNom(n)} valeur={Nom}/>
            <Input largeur={0.94} ico="pencil-square-o" placeholder="Prenom" icoSize={20} handlechange={(n) => setPrenom(n)} valeur={Nom}/>
        </View>
        <SpecialLogin largeur={2} handlechange1={Email => setEmail(Email)} handlechange2={Password => setPassword(Password)}/>
        <Bouton title = "Inscription" nav={HandleSetConnexion}/>
        <Text style={{color : Couleur.white, margin : 10}}>----------------------   inscription   ----------------------</Text>
        <View style={{...Styles.FlexLine, marginBottom : 15}}>
            {/* <SecondButton imageURL={require("../assets/google.jpg")} imageName="Google" handleS = {() => signInWithGoogle}/>
            <SecondButton imageURL={require("../assets/facebook.jpg")} imageName="Facebook" handleS = {() => signInWithGoogle}/> */}
        </View>
        <View style={Styles.FlexLine}>
            <Text style={{color : Couleur.white, marginBottom : 20}}>Avez-vous deja un compte ?</Text>
            <Pressable
                onPress={() => setIsConnexion(!IsConnexion)}
            >   
                <Text style={{marginBottom : 20}}> Se connexion</Text>
            </Pressable>
        </View>
    </View>
}