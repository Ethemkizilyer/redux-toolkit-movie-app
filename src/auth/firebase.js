import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";
import { clearUser, setUser } from "../features/authSlice";

const firebaseConfig = {
  apiKey: "AIzaSyB4K-zP-FZux4b6051LcPxF2bQiXDAEr7k",
  authDomain: "movie-app-4b630.firebaseapp.com",
  projectId: "movie-app-4b630",
  storageBucket: "movie-app-4b630.appspot.com",
  messagingSenderId: "1050976688357",
  appId: "1:1050976688357:web:14e180546cac16e229dc0c",
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
export const auth = getAuth(firebase);
export const provider = new GoogleAuthProvider();
export const createUser = async (
 displayName,
  email,
  password,
  navigate,
  
  dispatch
) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    //? kullanıcı profilini güncellemek için kullanılan firebase metodu
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    dispatch(
      setUser({
        username: displayName,
        email: email,
        //   password: password,
      })
    );
    toast.success(`Hoşheldiniz Sn.${displayName}`);
    // SweetAlertsRegister();
    navigate("/");
    console.log(userCredential);
  } catch (error) {
    // SweetAlertsError(error);
    toast.error(error.message);
    console.log(error);
  }
};

export const userObserver = (dispatch) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName } = user;
      dispatch(
        setUser({
          username: displayName,
          email: email,
          //   password: password,
        })
      );
    } else {
      dispatch(clearUser());
      // console.log("user signed out");
    }
  });
};
export const logOut = (navigate, dispatch) => {
  signOut(auth);
  dispatch(clearUser());
  toast.warning("logged out successfully");
  navigate("/");
  localStorage.setItem("like", JSON.stringify(false));
  localStorage.setItem("not", JSON.stringify(""));
};
export const signIn = async ( email, password, navigate, dispatch) => {
  console.log(email, password);
  try {
    await signInWithEmailAndPassword(auth, email, password);
    dispatch(
      setUser({
        username: auth.currentUser.displayName,
        email: email,
        password: password,
      })
    );
    navigate("/");
    toast.success("Login successfully!");
  } catch (error) {
    toast.error(error.message);
  }
};
export const signUpProvider = (navigate, dispatch) => {
  //? Google ile giriş yapılması için kullanılan firebase metodu
  const provider = new GoogleAuthProvider();
  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then(({ user }) => {
      dispatch(
        setUser({
          username: user.displayName,
          email: user.email,
        })
      );
      navigate("/");
      toast.success("Login successfully!!");
    })
    .catch((error) => {
      // Handle Errors here.
      toast.error(error);
    });
};

// export const signUpProviderFaceBook = (navigate, dispatch) => {
//   const provider = new FacebookAuthProvider();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const user = result.user;
//       // const credential = FacebookAuthProvider.credentialFromResult(result);
//       // const accessToken = credential.accessToken
//       dispatch(
//         setUser({
//           displayName: user.displayName,
//           email: user.email,
//         })
//       );
//       navigate("/");
//       console.log("first");
//       toastSuccessNotify("Login successfully!!");
//     })
//     .catch((error) => {
//       toastErrorNotify(error);

//     });
// };
