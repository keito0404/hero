// import { buildHand } from 'businesses/buildHand'
// import { ClockNum } from 'interfaces/ClockNum'
// import { TimeFormat } from 'interfaces/TimeFormat'
import { useEffect, useState } from 'react'
import Hand from './Hand'

interface ClockNum {
    time: number
  }
  interface TimeFormat {
    format: string
    separate: number
  }
  const buildHand = () => {
    const timeFormatArray = [
      {
        format: 'h',
        separate: 12,
      },
      {
        format: 'm',
        separate: 60,
      },
      {
        format: 's',
        separate: 60,
      },
    ]
  
    return timeFormatArray.map((value) => {
      return {
        format: value.format,
        separate: 360 / value.separate,
      }
    })
  }


const AnalogClock: React.VFC<ClockNum> = ({ time }) => {
  const [hand, setHand] = useState<TimeFormat[]>([])
  console.log(hand)
  useEffect(() => {
    setHand(buildHand())
  }, [])

  return (
    <div className="width-400px height-400px border-1px border-white rounded-full relative before:content-[''] before:block before:w-1 before:h-1 before:rounded-full before:bg-white before:absolute before:top-12 before:left-12 before:-translate-x-1/2 before:-translate-y-2/4">
       {hand.map((value, index) => (
        <Hand key={index} time={time} format={value.format} separate={value.separate} />
      ))}
    </div>
  )
}

// const SClockBoard = styled.div`
//   width: 400px;
//   height: 400px;
//   border: 1px solid #ffffff;
//   border-radius: 100%;
//   position: relative;
//   &:before {
//     content: '';
//     diplay: block;
//     width: 5px;
//     height: 5px;
//     border-radius: 100%;
//     background-color: #ffffff;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// `
export default AnalogClock