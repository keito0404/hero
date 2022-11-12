import React, { useState } from "react";
import dayjs from 'dayjs';
import {useTime} from '../hooks/useTime';
import useSound from 'use-sound'
import Router from 'next/router'
import { render } from "react-dom";

if (typeof window === 'object') {
    //documentを使う関数を入れる
}
const AlarmMyone = () =>{
    const time = useTime(1000)
    const nowtime = dayjs(time).format('Ahh:mm:ss')
    const [play]=useSound('Sounds/敵襲.mp3')
    const handler = (path:any) => {
        Router.push(path)
      }
      const [text, setText] = useState("");
      const [addText, setAddText] = useState("");
      const onClickAddText = () => {
        setAddText(text);
        setText("");
      }
    // const selectAmPm:any = document.getElementById('AmPm');
    //   selectAmPm.options[2].selected = true;
    // const selectHour:any = document.getElementById('hour');
    //   selectAmPm.options[2].selected = true;
    // const selectMinute:any = document.getElementById('minute');
    //   selectAmPm.options[2].selected = true;
    
      const alarmtime=addText+":"+dayjs(time).format('ss')
    return(
        <>
        <div className="AlarmMyone  flex justify-center">
      {/* ↓value属性にstate変数「text」を指定 */}
      <input className="w-96"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      </div>
      <div className="hover:bg-black text-white  flex justify-center">
        <button onClick={onClickAddText}>決定</button>
      </div>
      <div className="text-white flex justify-center">
      <p>{addText}に目覚める</p>
      </div>
      <br></br>
        {alarmtime === nowtime && play()}
        {alarmtime === nowtime && <div className="flex justify-center"><button className ="rounded-lg text-white bg-red-600 hover:bg-red-500" onClick={()=>handler('/sleep')}>👉勇者をふっかつさせる</button></div>}
         </>
    )  
   
                
           
          
    }
    
    

    export default AlarmMyone
