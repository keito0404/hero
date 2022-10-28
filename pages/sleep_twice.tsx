import type { NextPage } from "next";
import * as Obniz from "obniz";
const Sleep_twice: NextPage = () => {
  // const OBNIZ_ID = "2061-9919";
  // const obniz = new Obniz(OBNIZ_ID);
  // obniz.onconnect = async function () {
  //   const servo = obniz.wired("ServoMotor", { gnd: 0, vcc: 1, signal: 2 });

  //   servo.angle(90.0);
  // };
  return (
    <div className="container border-4 border-whit mx-auto  rounded relative h-screen w-screen flex justify-center items-cente">
      <h1 className="text-white text-7xl h-screen w-screen flex justify-center items-center font-medium relative mx-auto">
        勇者を起こせなかった
      </h1>
    </div>
  );
};

export default Sleep_twice;
