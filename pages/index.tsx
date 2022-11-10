import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Clocks from "../components/Clocks";
import AlarmMyone from "../components/AlarmMyone";

export default function Home() {
  return (
    <>
      <div className="text-white text-4xl ">
        <Head>
          <title>ふっかつ！！</title>
        </Head>

        <main>
          <h1 className="container mx-auto my-4 px-4 border-4 border-white text-8xl text-white flex justify-center">
            勇者ふっかつ時計
          </h1>
          <Clocks />
          <br></br>
          <br></br>
          <br></br>
          <AlarmMyone />
        </main>
      </div>
    </>
  );
}
