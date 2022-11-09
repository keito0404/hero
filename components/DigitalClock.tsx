import dayjs from 'dayjs'

interface ClockNum {
    time: number
  }

const DigitalClock: React.VFC<ClockNum> = ({ time }) => {
  return <div className="text-8xl decoretion-white mt-12 text-white flex justify-center">{dayjs(time).format('A hh:mm:ss')}</div>
}


export default DigitalClock