import { ReactElement, useEffect, useState } from 'react'

interface Props {
    initial: string
}

const INTERVAL_MS = 1000 //one second

const Timer = ({initial}: Props): ReactElement => {
    const initialNumber = Number.parseInt(initial)
    const [timerValue, setTimerValue] = useState<number>(initialNumber)

    const [intervalId, setIntervalId] = useState<number>()

    useEffect(() => {
        const id = window.setInterval(() => {
            if(timerValue > 0) setTimerValue(state => state - 1)
        }, INTERVAL_MS)

        setIntervalId(id)
        return () => window.clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(timerValue === 0) window.clearInterval(intervalId)
    }, [intervalId, timerValue])

    const cancelTimer = () => {
        window.clearInterval(intervalId)
    }

    return (
        <div>
            {timerValue}
            <button type='button' onClick={cancelTimer}>stop timer</button>
        </div>
    )
}

export default Timer