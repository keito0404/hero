import DigitalClock from './DigitalClock'
import { useTime } from '../hooks/useTime'

const Clocks = () => {
  const time = useTime(1000)
  return (
    <>
      <DigitalClock time={time} />
    </>
  )
}

export default Clocks