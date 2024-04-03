const VideoTitle = ({ title, overview,vote_average }) => {
  return (
    <div>
    <div className="w-screen aspect-video h-screen absolute pt-[8%]  text-white bg-gradient-to-r from-black px-20 ">
      <h1 className="text-5xl font-bold p-4">{title}</h1>
      <p className="w-6/12 text-1xl p-3 font-bold">RATING: {vote_average}⭐</p>
      <p className="w-6/12 text-2xl p-2 font-medium">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black  px-8 py-2 m-1 rounded-md opacity-95 font-black hover:bg-opacity-80 ">▶️Play</button>
        <button className="bg-slate-700  px-5 m-1 rounded-md opacity-95 ">❗MoreInfo</button>
      </div>
    </div>
    </div>
  );
};
export default VideoTitle;
