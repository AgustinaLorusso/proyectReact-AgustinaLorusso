import { initializeApp } from "firebase/app";
import {getFirestore,collection,doc,getDocs,getDoc,query,where,addDoc} from "firebase/firestore";
  

const firebaseConfig = {
    apiKey: "AIzaSyCAUITFkHBrSeGFdvDNTdoATpcx7d8BSA8",
    authDomain: "bookworld-react.firebaseapp.com",
    projectId: "bookworld-react",
    storageBucket: "bookworld-react.appspot.com",
    messagingSenderId: "911284954335",
    appId: "1:911284954335:web:ee309d73dadc17c49cf56a",
    measurementId: "G-4ZDJ86DJXV"
};

const firebaseApp = initializeApp(firebaseConfig);
const db =getFirestore(firebaseApp);

export async function getLibros(){
    const collectionRef = collection(db,"books");
    /*await guarda el resultado cuando se cumple la promesa (solo lo usamos en funciones async)*/
    let results = await getDocs(collectionRef);

    let dataBooks = results.docs.map( doc =>{
        return{
            id: doc.id,
            ...doc.data()
        };
    })
    return dataBooks;
}

export async function getBookById(idParams){
   const docRef = doc(db,"books",idParams);
   const docResult = await getDoc(docRef);
   const book = {id: docResult.id ,...docResult.data()};

   return book;
}

export async function getBookByCategory(category){
    const collectionRef= collection(db,"books");
    const queryCat =query(collectionRef,where("category","==",category))

    let results= await getDocs(queryCat);
    let dataBooks = results.docs.map((doc)=>{
        return{
            id: doc.id,
            ...doc.data() 
        };
    });
    return dataBooks;
}

export async function createBuyOrder(orderData){
    const collectionRef =collection(db,"orders");
    let rsta = await addDoc(collectionRef,orderData);
    return rsta.id;
}



export default firebaseApp;