// Importez les bibliothèques Firebase nécessaires
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect } from "firebase/auth";
import{ GoogleSignin} from '@react-native-google-signin/google-signin'

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
const auth = getAuth(app);

// Créez des instances des fournisseurs d'authentification Google et Facebook
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Authentifiez l'utilisateur avec Google
/**
 * 
 * 
 * on wait
*/
// export async function signInWithGoogle() {
//     console.log("oo")
//   try {
//     const result = await signInWithPopup(auth, googleProvider);
//     // Le jeton d'accès Google peut être utilisé pour accéder à l'API Google.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // Les informations de profil de l'utilisateur sont renvoyées dans l'objet utilisateur.
//     const user = result.user;
//     console.log(user);
//   } catch (error) {
//     // Gérez les erreurs ici.
//     console.error(error);
//   }
// }



export const signInWithGoogle = () => {
    signInWithRedirect(auth, googleProvider);
    console.log("oo")
    // // Le jeton d'accès Google peut être utilisé pour accéder à l'API Google.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // // Les informations de profil de l'utilisateur sont renvoyées dans l'objet utilisateur.
    // const user = result.user;
    // console.log(user);

}








// Authentifiez l'utilisateur avec Facebook
export async function signInWithFacebook() {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    // Le jeton d'accès Facebook peut être utilisé pour accéder à l'API Graph.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // Les informations de profil de l'utilisateur sont renvoyées dans l'objet utilisateur.
    const user = result.user;
    console.log(user);
  } catch (error) {
    // Gérez les erreurs ici.
    console.error(error);
  }
}
