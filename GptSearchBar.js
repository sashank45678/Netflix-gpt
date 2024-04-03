import { useDispatch, useSelector } from "react-redux";
import languages from "../utils/langconstants";
import { useRef} from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addSearchMovies } from "../utils/gptSlice";
const GptSearchBar = () => {
  const searchtext=useRef(null);
  const dispatch=useDispatch()
  const langstore=useSelector((store)=>{return store.langstore})
  let choosenlang=null;
  let cl=langstore.language
  if(langstore.language){
     choosenlang=languages.filter((item)=>{
      return Object.keys(item)[0]===langstore.language
    })
  }
  const fetchSearchresult = async function(moviename){
    const data=await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+moviename+"&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    )
    const json=await data.json();
    return json.results;
  };

  const handleGptSearch=async()=>{
    const gptQuery="Act as a movie Recommendation system ans suggest some movies for the query"+searchtext.current.value+"only give 5 movie names ,comma seperated like the examp,e given ahead. example result:rrr,guntur kaaram,bahubali,rebel,pokiri"
    const gptResults=await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });  
    if(!gptResults){
      return 
    }
    const results=gptResults.choices[0].message.content
   const splittedResults=results.split(",")
   const promiseArray=splittedResults.map((movie)=>{
    return fetchSearchresult(movie)
   })
   const tmdbResults=await Promise.all(promiseArray);
   dispatch(addSearchMovies({movieResults:tmdbResults,movieNames:splittedResults}))
  }

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>{e.preventDefault()}}>
        <input ref={searchtext} 
          className="text-gray-700 p-3 my-3 mx-2 col-span-9"
          type="text"
          placeholder={choosenlang[0][cl].wwuwt}
        />
        <button className="bg-red-600 m-2 p-1 text-white rounded-lg col-span-3" onClick={handleGptSearch}>
          {choosenlang[0][cl].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
