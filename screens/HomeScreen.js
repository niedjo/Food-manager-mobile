import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Couleur from '../components/Couleur';
import Styles from '../components/Styles';
import Input from '../components/Input';
import CustomImages from '../components/HomeScreens/CustomImages';
import CategorieButton from '../components/CategorieButton';
import { NetworkContext } from './Login';
import { Firebase } from '../components/Firebase';

// Importez les bibliothèques Firebase nécessaires
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, updateDoc, deleteDoc, doc, getDocs, getDoc } from "firebase/firestore";

// Initialisez Firebase avec vos informations de configuration
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

// const DONNEES = [
//   {
//       id : '1',
//       urlImage : "https://i.pinimg.com/originals/fb/48/1d/fb481ddff3c841a68f5e1201599fab60.jpg",
//       urlVideo : "",
//       nom : "Couscous Nkui",
//       avatar : "Femme enceint",
//       historique : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus itaque quas perspiciatis?",
//       provenance : "Originaire de l'Ouest Cameroun",
//       precedure : [
//           "procedure 2",
//           "procedure 3",
//           "procedure 4",
//           "procedure 5",
//           "procedure 6",
//       ],
//       astuces : [
//           "astuce 1",
//           "astuce 2",
//           "astuce 3",
//           "astuce 4",
//           "astuce 5",
//       ],
//   },
//   {
//       id : '2',
//       urlImage : "https://th.bing.com/th/id/OIP.VnbDx-frTgOVWojo4hs5mAHaFj?w=224&h=180&c=7&r=0&o=5&pid=1.7",
//       urlVideo : "",
//       nom : "Watafufu and eru",
//       avatar : "BoBo",
//       historique : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus itaque quas perspiciatis?",
//       provenance : "Originaire du Nord Ouest Cameroun",
//       precedure : [
//           "procedure 2",
//           "procedure 3",
//           "procedure 4",
//           "procedure 5",
//           "procedure 6",
//       ],
//       astuces : [
//           "astuce 1",
//           "astuce 2",
//           "astuce 3",
//           "astuce 4",
//           "astuce 5",
//       ],
//   },
//   {
//       id : '3',
//       urlImage : "https://th.bing.com/th/id/OIP.fuUgVJC-VZzjT962_NMwHwHaFj?w=203&h=180&c=7&r=0&o=5&pid=1.7",
//       urlVideo : "",
//       nom : "Koki plantain",
//       avatar : "Femme enceint",
//       historique : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus itaque quas perspiciatis?",
//       provenance : "Originaire du Littoral",
//       precedure : [
//           "procedure 2",
//           "procedure 3",
//           "procedure 4",
//           "procedure 5",
//           "procedure 6",
//       ],
//       astuces : [
//           "astuce 1",
//           "astuce 2",
//           "astuce 3",
//           "astuce 4",
//           "astuce 5",
//       ],
//   },
//   {
//       id : '4',
//       urlImage : "https://th.bing.com/th/id/OIP.i6pD7vN936FPykohwIPd0gHaEg?w=297&h=181&c=7&r=0&o=5&pid=1.7",
//       urlVideo : "",
//       nom : "Met de Pistache",
//       avatar : "Homme",
//       historique : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus itaque quas perspiciatis?",
//       provenance : "Originaire du Centre cameroun",
//       precedure : [
//           "procedure 2",
//           "procedure 3",
//           "procedure 4",
//           "procedure 5",
//           "procedure 6",
//       ],
//       astuces : [
//           "astuce 1",
//           "astuce 2",
//           "astuce 3",
//           "astuce 4",
//           "astuce 5",
//       ],
//   },
// ]

async function getDonnees() {
  const clientsCol = collection(db, "repas");
  const clientSnapshot = await getDocs(clientsCol);
  const clientList = clientSnapshot.docs.map(doc => doc.data());
  return clientList;
}




export function Recettes(props) {

  const data = React.useContext(NetworkContext)

  const [DONNEES, setDONNEES] = useState(null)

  const [Find, setFind] = useState('')

  useEffect(() => {
    getDonnees().then(data => setDONNEES(data))
  }, [])

    const lesNouritures = ({item}) => {
        return (
            <CustomImages 
                item = {item}
                nav = {() => props.navigation.navigate('FoodDesc', item)}
            />
        )
    }

    const finding = async() => {
        const clientRef = doc(db, "client", data.localId);
        await updateDoc(clientRef, { searchs: [Find] });

        // const q = query(collection(db, "repas"), where("nom", "=", Find));
        // const querySnapshot = await getDocs(q);
        // const clientList = querySnapshot.docs.map(doc => doc.data());
        // console.log(clientList)
        // return clientList;

    }

  return (
    <View style={{...Styles.container, paddingTop : 100, backgroundColor : Couleur.rougeBlanc, paddingBottom : 1}}>
        <View style={{backgroundColor : Couleur.rougeBlanc, }}>
            <Text style={{color : Couleur.rougeNoir, fontSize : 17, marginHorizontal : 10,}}>Toutes les recettes {props.route.params} {"\n"}Camerounaises disponibles rien que pour vous</Text>
            <Input largeur={2} ico="search" placeholder="Rechercher une Recette" icoSize={16} handlechange={(v) => setFind(v)} affiche={finding}/>
        </View>
        <View  style={{backgroundColor : Couleur.rougeBlanc, alignItems : "center", marginBottom : 250}}>
          {
            DONNEES ? 
          
            <FlatList 

                data={DONNEES}
                keyExtractor={ item => item.id}
                renderItem={lesNouritures}

            />

            :

            <Text>Chargement des repas ...</Text>
          }
        </View>
      {/* <Button 
        title="Rentrer se loger" 
        color={"#f77171"} 
        onPress={() => props.navigation.pop()}
      /> */}
    </View>
  );
}

export function Categories() {
  return (
    <View style={{...Styles.container, backgroundColor : Couleur.rougeBlanc}}>
      <ScrollView>
        <Text style={{color : Couleur.secondRouge, fontSize : 22, marginRight : 190, marginBottom : 8}}>Categories</Text>
        <Text style={{color : Couleur.rouge, fontSize : 17, marginRight : 100, width : 200, marginBottom : 20}}>Repas par categories</Text>
        <View style={{display : "flex", flexDirection : "row", justifyContent : "space-around"}}>
            <CategorieButton nomb="Fruit"/>
            <CategorieButton nomb="Legumes"/>
            <CategorieButton nomb="Gras"/>
        </View>
        <View style={{display : "flex", flexDirection : "row", justifyContent : "space-around"}}>
            <CategorieButton nomb="Sucrees"/>
            <CategorieButton nomb="Leger"/>
            <CategorieButton nomb="Lourds"/>
        </View>
        <View style={{display : "flex", flexDirection : "row", justifyContent : "space-around"}}>
            <CategorieButton nomb="Fritures"/>
            <CategorieButton nomb="simples"/>
            <CategorieButton nomb="Friendises"/>
        </View>
        <Text style={{color : Couleur.rouge, fontSize : 17, marginRight : 5, width : 300, marginTop : 30, marginBottom : 20}}>Repas par heures de journee</Text>
        <View style={{display : "flex", flexDirection : "row", justifyContent : "space-around"}}>
            <CategorieButton nomb="Petit dejeunee" largeur={1.5}/>
            <CategorieButton nomb="dejeunee" largeur={1.5}/>
        </View>
        <View style={{display : "flex", flexDirection : "row", justifyContent : "space-around", marginBottom : 50}}>
            <CategorieButton nomb="Dinnee" largeur={1.5}/>
            <CategorieButton nomb="Soupee" largeur={1.5}/>
        </View>
        <Text style={{color : Couleur.rouge, fontSize : 17, marginRight : 5, width : 300, marginTop : 0, marginBottom : 20}}>Plan Hebdomadaire</Text>
        <View style={{display : "flex", flexDirection : "row", justifyContent : "space-around", marginBottom : 50}}>
            <CategorieButton nomb="Cette Semaine" largeur={1.5}/>
            <CategorieButton nomb="Semaine Prochaine" largeur={1.5}/>
        </View>
      </ScrollView>
    </View>
  );
}

export function Favories(props) {
  const [DONNEES, setDONNEES] = useState(null)

  useEffect(() => {
    getDonnees().then(data => setDONNEES(data))
  }, [])

  const lesNouritures = ({item}) => {
      return (
          <CustomImages 
              item = {item}
              nav = {() => props.navigation.navigate('FoodDesc', item)}
          />
      )
  }
    return (
        <View style={{...Styles.container, backgroundColor : Couleur.rougeBlanc}}>
            <Text style={{color : Couleur.secondRouge, fontSize : 22, marginRight : 165, marginBottom : 8}}>Vos Favories</Text>
            <View  style={{backgroundColor : Couleur.rougeBlanc, alignItems : "center", marginBottom : 30}}>
            {
            DONNEES ? 
          
            <FlatList 

                data={DONNEES}
                keyExtractor={ item => item.id}
                renderItem={lesNouritures}

            />

            :

            <Text>Chargement des repas ...</Text>
          }
            </View>
        </View>
    )
}
export function Compte(props) {
  const data = React.useContext(NetworkContext)
  console.log(data)
  // Récupérez tous les clients de la collection "clients"
  async function getClient() {
    try {
      const docRef = doc(db, "client", data.localId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
      } else {
        console.log("No such document!");
      }
    } catch (e) {
      console.error("Error getting document: ", e);
    }
  }
  
  const [Cli, setCli] = useState(null)

  useEffect(() => {
    getClient().then(data => setCli(data))
  }, [])


    return (
        <View style={{...Styles.container, backgroundColor : Couleur.rougeBlanc}}>
          <Text style={{color : Couleur.secondRouge, fontSize : 22, marginRight : 165, marginBottom : 148, textDecorationLine : "underline"}}>Mon Compte</Text>
          <View style={{paddingBottom : 250}}>
            <Text>Nom : {Cli ? Cli.nom : "loading"}</Text>
            <Text>Prenom : {Cli ? Cli.prenom : "loading"}</Text>
            <Text>E-mail : {data.email}</Text>
          </View>
        </View>
    )
    // bannanepatate
}

const Tab = createBottomTabNavigator();

export default function HomeScreen({route}) {
  return (
    <NetworkContext.Provider value={route.params?.data}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Recettes') {
                if (focused) {
                  return <Image source={require("../assets/casseroles.jpg")} style={{width : 30, height : 30}} />
                }
                else { 
                  return <Image source={require("../assets/th.jpg")} style={{width : 30, height : 30}} />
                }
              } else if (route.name === 'Categories') {
                iconName = focused ? 'list' : 'list-ul';
              }
                else if (route.name === 'Favories') {
                iconName = focused ? 'heart' : 'heart-o';
              }
                else if (route.name === 'Compte') {
                iconName = focused ? 'user' : 'user';
              }

              // You can return any component that you like here!
            //   return <Icon name={iconName} size={size} color={color} />;
                return <Icon name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: Couleur.rouge,
            tabBarInactiveTintColor: Couleur.noir,
            headerShown : false
          })}
      
    >
            <Tab.Screen name="Recettes" component={Recettes} />
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="Favories" component={Favories} />
            <Tab.Screen name="Compte" component={Compte} />
          </Tab.Navigator>
        </NetworkContext.Provider>
  );
}