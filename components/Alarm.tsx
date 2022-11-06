import AlarmOption from './AlarmOption'
import ContextAlarm from './ContextAlarm'

const Alarm = () => {
  return (
    <>
      <div>
        <ContextAlarm>
            <AlarmOption/>
        </ContextAlarm>
      </div>
    </>
  )
}

export default Alarm