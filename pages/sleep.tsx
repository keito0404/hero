import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import DisplayHp from "../components/DisplayHp";
import EasyMode from "../components/EasyMode";
import NormalMode from "../components/NormalMode";
import HardMode from "../components/HardMode";
import Camera from "react-html5-camera-photo";
import ImagePreview from "../components/ImagePreview";
import "react-html5-camera-photo/build/css/index.css";

export default function Sleep() {
  const router = useRouter();
  const [hp, setHp] = useState(100);
  const [countdown, setCountdown] = useState(15);
  const [incantation, setIncantation] = useState("");
  const [randomNum, setRandomNum] = useState(0);
  const [selectedIncation, setSelectedIncatation] = useState("");
  const [attackResult, setAttackResult] = useState("");
  const [selectedWord, setSelectedWord] = useState(""); //setSelectedWordは初期値空
  const incantations = ["A", "B", "C", "D", "E"];
  const difficultyLevel = ["easy", "normal", "hard"];
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
  const isFullscreen = false;
  function shuffleArray(array: any) {
    array.sort(() => Math.random() - 0.5);
  }

  const attack = () => {
    if (difficultyLevel[randomNum] == "easy") {
      if (selectedIncation == incantation) {
        setHp(hp - 20);
        shuffleIncations(incantations);
        setAttackResult("攻撃が成功した");
      } else {
        setAttackResult("攻撃が失敗した");
      }
    } else if (difficultyLevel[randomNum] == "normal") {
      if (selectedWord == incantation) {
        setHp(hp - 20);
        shuffleIncations(incantations);
        setAttackResult("攻撃が成功した");
      } else {
        setAttackResult("攻撃が失敗した");
      }
    } else if (difficultyLevel[randomNum] == "hard") {
    }
  };

  const selectedLevel = (randomNum: number) => {
    if (difficultyLevel[randomNum] == "easy") {
      return <EasyMode onChangeIncatation={onChangeIncatation} />;
    } else if (difficultyLevel[randomNum] == "normal") {
      return <NormalMode inputIncatation={inputIncatation} />;
    } else if (difficultyLevel[randomNum] == "hard") {
      return <HardMode />;
    }
  };

  if (hp === 0) {
    router.push("./awake");
  }

  return (
    <div className="text-white">
      <div className="m-8">
        {dataUri ? (
          <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
        ) : (
          <Camera
            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
        )}
      </div>
      <div className="flex justify-center text-3xl">
        <p>残りHP：{hp}</p>
      </div>
      <div className="flex justify-center text-3xl">
        <p>相手にダメージを与える ：{incantation}</p>
      </div>
      <DisplayHp hp={hp} />

      <div>
        {/* <audio controls autoplay src="./Levelup.mp3"></audio> */}

        {selectedLevel(randomNum)}
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white rounded px-4 py-2"
          onClick={attack}
        >
          覚醒
        </button>
        <p>{attackResult}</p>
      </div>
    </div>
  );
}
