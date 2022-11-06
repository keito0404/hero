import type { NextPage } from 'next'
import Head from 'next/head'
import App from './App'
import Image from 'next/image'
import Clocks from '../components/Clocks'
import Alarm from '../components/Alarm'

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>ふっかつ！！</title>
      </Head>

      <main>
        <h1 className = 'text-6xl'>勇者ふっかつの刻</h1>
        <Clocks/>
        {/* <Alarm/> */}
      </main>
    </div>
    </>
  )
}


