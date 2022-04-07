import { ReactElement } from 'react'
import { Joke } from '../util/types'

interface Props {
    jokes: Joke[]
}

const Jokes = ({jokes}: Props): ReactElement => {
    const numJokes = jokes.length

    return (
        <>
            {jokes.map((joke, index) =>
                <div key={joke.id} className={index + 1 !== numJokes ? 'border-b-2 border-orange-300 mb-3 py-5' : 'mb-3 py-5'}>
                    {joke.joke}
                </div>
            )}

            {/* No Jokes Found */}
            {jokes.length === 0 && <div className='mt-3 font-bold'>No jokes found</div>}
        </>
    )
}

export default Jokes