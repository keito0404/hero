import { useState } from 'react'

function useSelect(initialValue:any) {
    const [value, setValue] = useState(initialValue)

    const data = {
        value,
        onChange: (e:any) => {
            setValue(e.target.value)
        }
    }

    return [value, data]
}

export default useSelect