import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword,
GoogleAuthProvider, signInWithEmailAndPassword ,
signInWithRedirect, signOut, onAuthStateChanged, sendPasswordResetEmail,} from "firebase/auth";
import { doc, getFirestore, getDoc, setDoc, collection, writeBatch, query,getDocs } from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyCi0_qOt5u-O641X8mY9IGQSNwO8LFoD0M",
    authDomain: "asalam-bedding-more.firebaseapp.com",
    projectId: "asalam-bedding-more",
    storageBucket: "asalam-bedding-more.appspot.com",
    messagingSenderId: "442555333770",
    appId: "1:442555333770:web:b665c05ac42544ac048173",
    measurementId: "G-R318W9KMHH"
};


const app = initializeApp(firebaseConfig);
const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
    prompt: "select_account"
})
export const auth = getAuth();
export const createGoogleUserAuth = () => signInWithPopup(auth, GoogleProvider);
export const createGoogleUserAuthEandP = () => signInWithRedirect(auth, GoogleProvider);
export const resetPassWord = (email) => sendPasswordResetEmail(auth, email);

const db = getFirestore();

export const addCollectioAndDocuments = async (collectionKey, objectsToadd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
  
    objectsToadd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });
    await batch.commit();
      console.log("done")
  };
  
  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshop = await getDocs(q);
    const categoryMap = querySnapshop.docs.reduce((acc, docSnapShop) => {
      const {title, items} = docSnapShop.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
  
    return categoryMap;
  }

export const createUserDocRef = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInfo
            })
        } catch (error) {
            console.log("catching error creating user", error.message)
        }
    }

    return userDocRef

}

export const createUserwithEandP = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email, password)
}

export const signInUserwithEandP = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth,email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)