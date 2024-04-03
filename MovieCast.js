import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import { useState } from "react";
import { IMG_CDN } from "../utils/constants";
import VideoBackGround from "./videoBackGround";
import VideoTitle from "./videoTitle";
import { Link } from "react-router-dom";
const MovieCast = () => {
  const { id } = useParams();
  const [moviecast, setmoviecast] = useState([]);
  const [clickedmovie, setclickedmovie] = useState(null);

  const castfetch = async (id) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/credits",
      API_OPTIONS
    );
    const json = await data.json();
    setmoviecast(json);
  };

  const findclickedmovie = async (id) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id,
      API_OPTIONS
    );
    const json = await data.json();
    setclickedmovie(json);
  };

  useEffect(() => {
    castfetch(id);
    findclickedmovie(id);
  }, [id]);

  const handleBack = () => {
    console.log("back");
  };

  return (
    <div>
      <div className="relative w-full h-screen">
        <Link to="/Browse">
          <button
            className="absolute left-0 ml-4 mt-4 bg-black font-bold text-white z-30 w-32 rounded-lg py-2 text-2xl"
            onClick={handleBack}
          >
            ⬅️GetBack
          </button>
        </Link>
        {clickedmovie && <VideoBackGround id={clickedmovie.id} />}
        {clickedmovie && (
          <VideoTitle
            title={clickedmovie.original_title}
            overview={clickedmovie.overview}
            vote_average={clickedmovie.vote_average}
          />
        )}
      </div>
      <div className="bg-black bg-opacity-80">
        <h1 className="text-white px-2 py-2 font-bold">CAST:</h1>
        <div className="flex overflow-x-scroll w-full px-3 py-2 no-scrollbar">
          {moviecast.cast &&
            moviecast.cast.map((crewmember, index) => {
              if (crewmember.profile_path) {
                return (
                  <div
                    className="flex-shrink-0 w-72 h-64 mr-4"
                    key={crewmember.credit_id}
                  >
                    <div className="relative w-full h-full">
                      <img
                        className="rounded-2xl w-full h-full object-cover"
                        src={IMG_CDN + crewmember.profile_path}
                        alt={crewmember.original_name}
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
                        <h2 className="text-white text-lg">
                          {crewmember.original_name}
                        </h2>
                        <h3 className="text-white">{crewmember.character}</h3>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
        </div>
        <h1 className="text-white px-2 py-2 font-bold">CREW:</h1>
        <div className="flex overflow-x-scroll w-full px-3 py-2 no-scrollbar">
          {moviecast.crew &&
            moviecast.crew.map((crewmember, index) => {
              if (crewmember.profile_path) {
                return (
                  <div
                    className="flex-shrink-0 w-72 h-64 mr-4"
                    key={crewmember.credit_id}
                  >
                    <div className="relative w-full h-full">
                      <img
                        className="rounded-2xl w-full h-full object-cover"
                        src={IMG_CDN + crewmember.profile_path}
                        alt="loading"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
                        <h2 className="text-white text-lg">
                          {crewmember.name}
                        </h2>
                        <h3 className="text-white">{crewmember.job}</h3>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieCast;
