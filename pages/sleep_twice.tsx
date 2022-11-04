import type { NextPage } from "next";
// import Sound from './決定、ボタン押下/4';

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
    <div className="flex-flow:column justify-content:space-around align-items: center items-center">
      <div className="container border-4 border-whit mx-auto  rounded relative items-center ">
        <h1 className="text-white text-7xl  font-medium relative mx-auto ">
          勇者を起こせなかった
        </h1>
        <h2>
          <img
            className="mt-6 rounded-lg shadow-xl object-contain items-center"
            width={300}
            height={300}
            src="slime/スライムアイコン.png"
          ></img>
        </h2>
        <h3>
          <button className="bg-white hover:bg-white text-black rounded px-4 py-2 bottom-7">
            ホームに戻る
          </button>
        </h3>
      </div>
    </div>
  );
};
export default Sleep_twice;
