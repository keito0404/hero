import type { NextPage } from "next";
import useSound from "use-sound";
const Awake: NextPage = () => {
  const [play] = useSound("sounds/Levelup.mp3");

  return (
    <div className=" h-screen w-screen flex flex-col justify-center  items-center ">
      <div className="container  border-white border-2 rounded">
        <h1 className="text-white text-6xl flex justify-center items-center">
          勇者を起こせた！！
        </h1>
      </div>
      <div>
        <img
          className="mt-6 rounded-lg shadow-xl object-contain"
          onMouseEnter={() => play()}
          src="slime/勇者.png"
          width={250}
          height={250}></img>
      </div>
      <div>
        <button className="bg-neutral-50 hover:bg-neutral-200 text-black rounded px-4 py-2 bottom-7">
          ホームに戻る
        </button>
      </div>
    </div>
  );
};

export default Awake;
