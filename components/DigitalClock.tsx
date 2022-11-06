import dayjs from 'dayjs'

interface ClockNum {
    time: number
  }

const DigitalClock: React.VFC<ClockNum> = ({ time }) => {
  return <div className="text-5xl decoretion-white mt-12">{dayjs(time).format('HH:mm:ss')}</div>
}

// const SClockText = styled.div`
//   font-size: 50px;
//   color: #ffffff;
//   margin-top: 100px;
// `

export default DigitalClock