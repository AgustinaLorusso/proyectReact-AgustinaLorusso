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

async function sendDataToFirebase(){
    const data = [
        {
            id:1,
            title:"Fuel the fire",
            price:5500,
            img:"https://m.media-amazon.com/images/I/4165SnbMAjL.jpg",
            detail:"Segundo publicado en la serie addicted to you",
            stock:5,
            category:"BestSeller"
        },
        {
            id:2,
            title:"November 9",
            price:5500,
            img:"https://3.bp.blogspot.com/-qLPGPSxG5jc/VsrPe-Eo-rI/AAAAAAAAGUc/Wcy_dIU1yR8/s1600/25111004.jpg",
            detail:"Publicado por Collen Hover",
            stock:4,
            category:"Preventa"
        },
        {
            id:3,
            title:"It Ends with Us",
            price:3500,
            img:"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4711/9781471156267.jpg",
            detail:"Publicado por Colleen Hover",
            stock:3,
            category:"BestSeller"
        },
        {
            id:4,
            title:"Twisted Lies",
            price:1500,
            img:"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3494/9780349434285.jpg",
            detail:"Publicado por Ana Huang",
            stock:2,
            category:"NuevosLanzamiento"
        }
    
    ];
  
    let itemsCollectionRef = collection(db, "cursos")
  
    for(let curso of data){
      delete(curso.id)
      let newDoc = await addDoc(itemsCollectionRef, curso);
      console.log("Documento creado:",newDoc.id)
    }
  }

export default firebaseApp;