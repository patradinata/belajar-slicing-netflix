import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJtng2i_3e9nh9DLVw4xkpjIpCYCtq8hI",
  authDomain: "netflix-clone-b5fcd.firebaseapp.com",
  projectId: "netflix-clone-b5fcd",
  storageBucket: "netflix-clone-b5fcd.firebasestorage.app",
  messagingSenderId: "836961588749",
  appId: "1:836961588749:web:e50aea6e385ebb427ee744",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logOut = () => {
  signOut(auth);
};

export { auth, db, login, signUp, logOut };
