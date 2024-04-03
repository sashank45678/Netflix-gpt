import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
import languages from "../utils/langconstants";
import { changeLanguage } from "../utils/langslice";
import { addSearchMovies } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const gptstore = useSelector((store) => {
    return store.gpt;
  });
  const user = useSelector((store) => {
    return store.user;
  });
  const navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            userid: uid,
            email: email,
            displayName: displayName,
            displayUrl: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    dispatch(toggleGptSearchView());
    dispatch(addSearchMovies({movieResults:null,movieNames:null}))
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  const handleGptClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLangChange=(e)=>{
    const langvalue=e.target.value
    dispatch(changeLanguage(langvalue))
  }
  return (
    <div className="absolute w-full h-30 rounded-md z-20 flex justify-between bg-gradient-to-b from-black  ">
      <img
        className="w-32 mx-auto md:mx-0"
        src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
        alt=""
      />
      {user && (
        <div className="flex p-2 ">
          <div className="w-64 mt-2 mr-1">
            {gptstore.showGptSearch && (
              <select className="bg-black text-white p-2 mr-2" onChange={handleLangChange}>
                {languages.map((item, index) => (
                  <option value={Object.keys(item)[0]} key={index}>
                    {Object.keys(item)[0]}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-purple-700  px-6 py-2  rounded-lg opacity-95 text-white mx-2"
              onClick={handleGptClick}
            >
              <div className="flex">
                {!gptstore.showGptSearch? (
                  <>
                    <span>GPT</span>
                    <span>Search</span>
                  </>
                ):(<span>HomePage</span>)}
              </div>
            </button>
          </div>
          <img className="w-[15%] h-12 rounded-md" src={user.displayUrl} />
          <button onClick={handleSignOut} className="text-white  font-semibold">
            (SignOut)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
