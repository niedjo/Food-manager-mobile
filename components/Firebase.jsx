import React from 'react';
import { Button } from 'react-native'
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

export const Firebase = () => {
    const addClient = async () => {
        try {
            const docRef = doc(db, "client", "darren1");
            await setDoc(docRef, {
                nom: "darren",
                prenom: "sheldon",
                age: 19
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    

    return (
        <Button title='firebase1' onPress={addClient}/>
    )

}



//   // Récupérez tous les clients de la collection "clients"
//   async function getClients() {
//     const clientsCol = collection(db, "client");
//     const clientSnapshot = await getDocs(clientsCol);
//     const clientList = clientSnapshot.docs.map(doc => doc.data());
//     return clientList;
//   }

//   async function getCli () {
//     const cli = await getClients();
//     console.log(cli)
//   }

//   getCli()