import DigitalClock from './DigitalClock'
// import AnalogClock from './AnalogClock'
import { useTime } from '../hooks/useTime'

const Clocks = () => {
  const time = useTime(1000)
  return (
    <>
      <DigitalClock time={time} />
        {/* <AnalogClock time={time} /> */}
    </>
  )
}

export default Clocks