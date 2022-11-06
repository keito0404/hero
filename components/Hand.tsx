// import { ClockNum } from 'interfaces/ClockNum'
// import { TimeFormat } from 'interfaces/TimeFormat'
import dayjs from 'dayjs'

interface ClockNum {
    time: number
  }
interface TimeFormat {
    format: string
    separate: number
  }

type Props = ClockNum & TimeFormat

const Hand: React.VFC<Props> = ({ time, format, separate }) => {
  const now: number = Number(dayjs(time).format(format))
  console.log(now)
  const Angle = now * separate
  let handStyles
  if (format === 'h') {
    handStyles = {
      height: '130px',
      top: '70px',
    }
  }
  if (format === 'm') {
    handStyles = {
      height: '180px',
      top: '20px',
    }
  }
  if (format === 's') {
    handStyles = {
      height: '180px',
      top: '20px',
      width: '2px',
    } 
  }

  const rotateAngle =  `rotate-${Angle}deg`

//   const SSecHand = styled.div`
//     width: 4px;
//     background-color: #ffffff;
//     border-radius: 100em;
//     position: absolute;
//     left: 50%;
//     transform-origin: bottom center;
//     transform: translateX(-50%) rotate(${Angle}deg);
//     ${handStyles}
//   `
  return <div className={`w-1 bg-white rounded-full absolute left-12 origin-bottom-center -translate-x-2/4 ${rotateAngle} ${handStyles}`}></div>
}
export default Hand