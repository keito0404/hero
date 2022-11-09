import type { NextPage } from "next";
import { useState } from "react";
import Incantation from "../components/Incantation";
import ImagePreview from "../components/ImagePreview";
import DisplayHp from "../components/DisplayHp";

import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const Practice: NextPage = () => {
  const [attackData, setAttackData] = useState("");
  const [dataUri, setDataUri] = useState("");

  const handleTakePhotoAnimationDone = (dataUri: string) => {
    console.log("takePhoto");
    console.log(dataUri);
    setDataUri(dataUri);
  };

  const changeAttack = () => {
    setAttackData("5");
  };

  const isFullscreen = false;
  function shuffleArray(array: any) {
    array.sort(() => Math.random() - 0.5);
  }

  let arr = ["A", "B", "C", "D", "E"];
  shuffleArray(arr);
  console.log(arr);

  return (
    <div className="text-white">
      <div className="m-6 ">
        {dataUri ? (
          <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
        ) : (
          <Camera
            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
        )}
      </div>

      <DisplayHp attackData={attackData} />
      <div className="text-4xl m-8 flex justify-center">
        <p suppressHydrationWarning={true}>{arr}</p>
        {/* エラー対処 */}
      </div>

      <div className="text-black m-8 flex justify-center">
        <div className="text-white">
          <p>呪文入力画面</p>
        </div>
      </div>

      <div className="flex justify-center">
        <button onClick={changeAttack}>覚醒</button>
      </div>
    </div>
  );
};

export default Practice;
