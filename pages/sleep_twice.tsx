import type { NextPage } from "next";
import useSound from "use-sound";
// import FailedSound from "./public/sounds/Levelup.mp3";

// const Sound = () => {
//   const [play] = useSound(FailedSound);
// };

export async function getServerSideProps() {
  //   try {
  await fetch(
    "https://tqscqxulxh.execute-api.ap-northeast-1.amazonaws.com/default/obniz_slime"
  );

  return { props: {} };

  //   } catch (e) {
  //     console.log(e);
  //   }
}

const Sleep_twice: NextPage = () => {
  return (
     <div className=" h-screen w-screen flex flex-col justify-center  items-center ">
      <div className="container  border-white border-2 rounded">
      <h1 className="text-white text-6xl flex justify-center items-center">
        勇者は起きなかった
      </h1>
    </div>
    <div>
      <img
            className="mt-6 rounded-lg shadow-xl object-contain items-center flex justify-center"
            width={300}
            height={300}
            src="slime/スライムアイコン.png"></img>
            </div>
          <div>
          <button className="bg-neutral-50 hover:bg-neutral-200 text-black rounded px-4 py-2 bottom-7">
            ホームに戻る
          </button>
          </div>
    </div>
         
     
  );
};
export default Sleep_twice;
