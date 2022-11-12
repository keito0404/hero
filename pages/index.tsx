import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Clocks from '../components/Clocks'
import AlarmMyone from '../components/AlarmMyone'
import { ChangeEvent, useState} from "react"

export default function Home() {

// const [selectedAmPm, setSelectedAmPm] = useState("");
// const [selectedHour, setSelectedHour] = useState("");
// const [selectedMinute, setSelectedMinute] = useState("");
// const [selectedWord, setSelectedWord] = useState("");
// const [selectedWord2, setSelectedWord2] = useState("");
// const [selectedWord3, setSelectedWord3] = useState("");
// const AmPm = ["Am", "Pm"];
// const Hour = ["01", "02", "03", "04", "05","06", "07", "08", "09", "10","11","12"];
// const Minute = ["00", "01", "02", "03", "04","05", "06", "07", "08", "09","10", "11", "12", "13", "14","15", "16", "17", "18", "19","20", "21", "22", "23", "24","25", "26", "27", "28", "29",,"30", "31", "32", "33", "34","35", "36", "37", "38", "39","40", "41", "42", "43", "44","45", "46", "47", "48", "49","50", "51", "52", "53", "54","55", "56", "57", "58", "59"];
  
// const onChangeAmPm = (e: ChangeEvent<HTMLSelectElement>) =>
//     setSelectedAmPm(e.target.value);
// const inputAmPm = (e: ChangeEvent<HTMLInputElement>) =>
//     setSelectedWord(e.target.value);
// const onChangeHour = (e: ChangeEvent<HTMLSelectElement>) =>
//     setSelectedHour(e.target.value);
// const inputHour = (e: ChangeEvent<HTMLInputElement>) =>
//     setSelectedWord2(e.target.value);
// const onChangeMinute = (e: ChangeEvent<HTMLSelectElement>) =>
//     setSelectedMinute(e.target.value);
// const inputMinute = (e: ChangeEvent<HTMLInputElement>) =>
//     setSelectedWord3(e.target.value);

    // const selectedSetAmPm = () => {
    // return<AlarmMyone onChangeAmPm={onChangeAmPm}/>
    // inputAmPm={inputAmPm}
    // selectedWord={selectedWord}
    // }
    // const selectedSetHour = () => {
    // return<AlarmMyone onChangeHour={onChangeHour}/>
    // }
    // const selectedSetMinute = () => {
    // return<AlarmMyone onChangeMinute={onChangeMinute}/>
    // }

return (
    <>
      <Head>
        <title>ふっかつ！！</title>
      </Head>
      <main>
        <h1  className = 'container mx-auto my-4 px-4 border-4 border-white text-8xl text-white flex justify-center'>勇者ふっかつ時計</h1>
        <Clocks/>
        <br></br><br></br><br></br>
        <div className = 'text-black bg-black text-4xl  flex justify-center'>
                    {/* <form>
      <select id = "AmPm">
        <option value="AM">AM</option>
        <option value="PM">PM</option>
        </select> 
        <select id = "hour">
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          </select> 
          <select id = "minute">
            <option>00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="07">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="15">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option> 
            <option value="23">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="56">56</option>
            <option value="57">57</option>
            <option value="58">58</option>
            <option value="59">59</option>
          // </select> */}
          {/* // </form> */}
          </div>
          <div className = "text-8xl justify-center">
        <AlarmMyone/>
        </div>
      </main>
    </>
  )
}


