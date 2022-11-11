import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import DisplayHp from "../components/DisplayHp";
import EasyMode from "../components/EasyMode";
import NormalMode from "../components/NormalMode";
import Camera from "react-html5-camera-photo";
import ImagePreview from "../components/ImagePreview";
import "react-html5-camera-photo/build/css/index.css";
import useSound from "use-sound";

export default function Sleep() {
  const [playSuccess] = useSound("sounds/attackSound.mp3");
  const [playMiss] = useSound("sounds/deathSound.mp3");
  const router = useRouter();
  const [hp, setHp] = useState(100);
  const [missCount, setMissCount] = useState(0);
  const [incantation, setIncantation] = useState("");
  const [randomNum, setRandomNum] = useState(0);
  const [selectedIncation, setSelectedIncatation] = useState("");
  const [attackResult, setAttackResult] = useState("");
  const [selectedWord, setSelectedWord] = useState(""); //setSelectedWordは初期値空
  const incantations = [
    "メガンテ",
    "バルプンテ",
    "アストロン",
    "ステルス",
    "ヴェレノーマ",
  ];
  const difficultyLevel = ["easy", "normal"];
  const isFullscreen = false;
  const [dataUri, setDataUri] = useState("");
  const handleTakePhotoAnimationDone = (dataUri: string) => {
    console.log("takePhoto");
    console.log(dataUri);
    setDataUri(dataUri);
  };
  useEffect(() => {
    shuffleIncations(incantations);
    shuffleLevels(difficultyLevel);
  }, []); //一番初めに実行される

  const shuffleIncations = (vals: any) => {
    let castIncation = Math.floor(Math.random() * vals.length);
    setIncantation(incantations[castIncation]);
  };

  const shuffleLevels = (vals: any) => {
    let selectLevel = Math.floor(Math.random() * vals.length);
    setRandomNum(selectLevel);
  };

  const onChangeIncatation = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedIncatation(e.target.value);
  const inputIncatation = (e: ChangeEvent<HTMLInputElement>) =>
    setSelectedWord(e.target.value);

  const attack = () => {
    if (difficultyLevel[randomNum] == "easy") {
      if (selectedIncation == incantation) {
        setHp(hp - 20);
        shuffleIncations(incantations);
        setAttackResult("攻撃が成功した");
        playSuccess();
      } else {
        setAttackResult("攻撃が失敗した");
        setMissCount(missCount + 1);
        playMiss();
      }
    } else if (difficultyLevel[randomNum] == "normal") {
      if (selectedWord == incantation) {
        setHp(hp - 20);
        shuffleIncations(incantations);
        setAttackResult("攻撃が成功した");
        setSelectedWord("");
        playSuccess();
      } else {
        setAttackResult("攻撃が失敗した");
        setSelectedWord("");
        setMissCount(missCount + 1);
        playMiss();
      }
    }
  };

  const selectedLevel = (randomNum: number) => {
    if (difficultyLevel[randomNum] == "easy") {
      return <EasyMode onChangeIncatation={onChangeIncatation} />;
    } else if (difficultyLevel[randomNum] == "normal") {
      return (
        <NormalMode
          inputIncatation={inputIncatation}
          selectedWord={selectedWord}
        />
      );
    }
  };

  if (hp === 0) {
    router.push("./awake");
  }
  if (missCount === 1) {
    router.push("./sleep_twice");
  }
  return (
    <div className=" text-white">
      <div className="flex justify-center m-8">
        {dataUri ? (
          <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
        ) : (
          <div className="w-1/3">
            <Camera
              onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
              isFullscreen={isFullscreen}
            />
          </div>
        )}
      </div>
      <div className="flex justify-center text-3xl">
        <p>残りHP：{hp}</p>
      </div>
      <div className="flex justify-center text-3xl">
        <p>相手にダメージを与える呪文 ：{incantation}</p>
      </div>

      <DisplayHp hp={hp} />

      <div className="flex flex-col ">
        {selectedLevel(randomNum)}
        <div className="flex justify-center">
          <button
            className="text-xl font-medium w-1/3 m-10 container border-4 border-white text-white rounded  px-4 py-2 "
            onClick={attack}
          >
            覚醒
          </button>
          <p>{attackResult}</p>
        </div>
      </div>
    </div>
  );
}
