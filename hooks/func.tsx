const minutesNumber = fixNumber(Array.from(Array(60).keys()))
const hourNumber = fixNumber(Array.from(Array(13).keys()))

function fixNumber(value:any) {
    value = value.map((hour:any)=> {
        if (hour < 10) {
            hour = "0" + hour
        }
        return hour
    })
    return value
}

export { minutesNumber, hourNumber }