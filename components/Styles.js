import { StyleSheet } from 'react-native';
import Couleurs from './Couleur';

export default Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Couleurs.rouge,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop : 50, 
    },

    TextePrincipale : {
        fontSize : 30,
        color : Couleurs.white,
        marginRight : 155,
        margin : 20,
        marginTop : 30
    },
    vueInput : {
        width : 150,
        height : 40,
        borderColor : Couleurs.white,
        borderRadius : 30,
        backgroundColor : Couleurs.white,
        display : "flex",
        flexDirection : "row",
        margin : 10
    },
    bouton : {
      width : 300,
      borderColor : Couleurs.noir,
      borderRadius : 30,
      height : 40,
      backgroundColor : Couleurs.noir,
      justifyContent : "center",
      alignItems : "center",
      margin : 10
    },
    vueSecondImage : {
      height : 40,
      width : 120,
      backgroundColor : Couleurs.white,
      display : "flex",
      flexDirection : "row",
      justifyContent : 'center',
      alignItems : "center",
      borderRadius : 20,
      margin : 8
    },
    AutherImages : {
      borderColor : Couleurs.white,
      width : 30,
      height : 30,
      marginRight : 10
    }, 
    FlexLine : {
      display : "flex", 
      flexDirection : "row"
    },
    vueImageFood : {
      display : "flex",
      flexDirection : "row",
      alignItems : 'center',
      // justifyContent : 'space-evenly',
      height : 80,
      width : 300,
      backgroundColor : Couleurs.noir,
      borderRadius : 20,
      margin : 10
    },
    ImageFood  : {
      width : 60,
      height : 60,
      borderRadius : 50,
      margin : 9
    },

    // les composants du homeScreen


    // les boutons des categories 

    categoriButton : {
      height : 40,
      backgroundColor : Couleurs.noir,
      alignItems : 'center',
      justifyContent : 'center',
      borderRadius : 10,
      margin : 7
    } 

    


  });