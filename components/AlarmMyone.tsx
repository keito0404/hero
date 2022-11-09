import React from "react";
import dayjs from 'dayjs';
import {useTime} from '../hooks/useTime';

const AlarmMyone = () =>{
    const alarmtime = 'AM 01:38:50'
    const time = useTime(1000)
    const nowtime = dayjs(time).format('A hh:mm:ss')
    console.log(nowtime)
            return(
                <>
                {alarmtime}
                    {alarmtime == nowtime && <p></p>}
                </>
            )
          
}
    
    

    export default AlarmMyone
