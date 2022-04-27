import { ReactElement, useState } from 'react'
import { Joke } from '../util/types'

interface Props {
    jokes: Joke[]
}


const Jokes = ({jokes}: Props): ReactElement => {
    const numJokes = jokes.length

    // const [likes, setLikes] = useState<string[]>([])
    
    // const addLike = (id: string) => {
    //     setLikes(state => [...state, id])
    // }

    return (
        <>
            {jokes.map((joke, index) =>
                <div key={joke.id} className={index + 1 !== numJokes ? 'border-b-2 border-orange-300 mb-3 py-5' : 'mb-3 py-5'}>
                    {joke.joke} 
                    {/* {!likes.includes(joke.id) && <button type='button' onClick={() => addLike(joke.id)} > like </button>}
                    {likes.includes(joke.id) && <span>LIKED</span>} */}
                </div>
            )}

            {/* No Jokes Found */}
            {jokes.length === 0 && <div className='mt-3 font-bold'>No jokes found</div>}
        </>
    )
}

export default Jokes