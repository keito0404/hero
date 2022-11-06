import React, { createContext, useEffect, useState } from "react";
import useSound from 'use-sound'
import months from "../hooks/data";

// const Sound = () => {
//   const [sound] = useSound(Sounds/alarm.mp3)
// const alarm = new Audio(Sound);
// export const AlarmContext = createContext(0);
// }
// interface ContextInterface {
//   count: number;
// }
export const AlarmContext = createContext();

function ContextAlarm({ children }:{children:any}) {
  const [hourDigital, setHourDigital] = useState("");
  const [minutesDigital, setMinutesDigital] = useState("");
  const [amPm, setAmPm] = useState("");
  const [dayNow, setDayNow] = useState("");
  const [monthNow, setMonthNow] = useState("");
  const [yearNow, setYearNow] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [hasAlarm, setHasAlarm] = useState(false);
  const [alarm] = useSound("Sounds/alarm.mp3")
  

  useEffect(() => {
    setInterval(() => {
      let date = new Date();

      let HH = date.getHours(),
        MM = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        ampm;

      if (HH >= 12) {
        HH = HH - 12;
        ampm = "PM";
      } else {
        ampm = "AM";
      }

      if (HH === 0) HH = 12;
      if (HH < 10){`0${HH}`}
      if (MM < 10){`0${MM}`}



      setHourDigital(`${HH}`);
      setMinutesDigital(`${MM}`);
      setAmPm(ampm);
      setDayNow(`${day}`);
      setMonthNow(months[month]);
      setYearNow(`${year}`);
    }, 1000);
  }, []);

  if (alarmTime === `${hourDigital}:${minutesDigital} ${amPm}`) {
    alarm.play();
    alarm.loop = true;
  }

  const pauseAlarm = () => {
    alarm.pause();
    setAlarmTime("");
  };

  return (
    <AlarmContext.Provider
      value={{
        hourDigital,
        minutesDigital,
        amPm,
        dayNow,
        monthNow,
        yearNow,
        alarmTime,
        setAlarmTime,
        pauseAlarm,
        hasAlarm,
        setHasAlarm,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
}

export default ContextAlarm;