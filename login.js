import Header from "./header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [signIn, setsignIn] = useState(true);
  const [errMessage, seterrMessage] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null);
  const dispatch=useDispatch();
  const toggleSignInForm = () => {
    setsignIn(!signIn);
  };
  const handleButtonClick = () => {
    const submittedEmail = email.current.value;
    const submittedPassword = password.current.value;
    const message = checkValidData(submittedEmail, submittedPassword);
    if (message) {
      seterrMessage(message);
    }
    if (message) return;
    if (!signIn) {
      //sigup logic
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, submittedEmail, submittedPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          const auth = getAuth();
          updateProfile(auth.currentUser, {
            displayName:name.current.value,
            photoURL:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
          })
            .then(() => {
              const auth = getAuth();
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({userid:uid,email:email,displayName:displayName,displayUrl:photoURL}))
            })
            .catch((error) => {
              seterrMessage(error)
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, submittedEmail, submittedPassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-4/12 absolute m-2 bg-black bg-opacity-70 pl-12 py-8 pr-12 my-32 mx-auto left-0 right-0 text-white rounded-lg"
      >
        <h1 className="m-2 font-bold text-3xl">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input ref={name}
            className="p-4 my-4 w-full text-black bg-gray-700"
            type="text"
            placeholder="enter your fullname"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full text-black bg-gray-700"
          type="text"
          placeholder="enter your email"
        />
        <input
          ref={password}
          className="p-4 my-4 w-full text-black bg-gray-700"
          type="password"
          placeholder="enter your password"
        />
        {errMessage && (
          <p className="text-red-500 p-1  text-lg font-bold">{errMessage}</p>
        )}
        <button
          className="bg-red-700 p-4 my-6 w-full font-bold rounded-lg"
          onClick={handleButtonClick}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-2 font-semibold text-2xl cursor-pointer"
          onClick={toggleSignInForm}
        >
          {signIn
            ? "New to Netflix?Sign Up Now"
            : "Already registered?Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
