import { ReactElement, useEffect, useState } from 'react'
import { BASE_URL, headers, method, JOKE_LIMIT } from '../util/requestConfig'
import { Result } from '../util/types'
import Jokes from './Jokes'
import Pagination from './Pagination'

const SearchJokes = (): ReactElement => {
    const [term, setTerm] = useState<string>()
    const [error, setError] = useState<string>()
    const [query, setQuery] = useState<string>()
    const [result, setResult] = useState<Result>()

    const search = (pageNum?: number) => {
        setError(undefined) //reset before each new search
        setQuery(`term=${term}&page=${pageNum ?? 1}&limit=${JOKE_LIMIT}`)
    }

    useEffect(() => {
        const fetchJokes = async () => {
            fetch(`${BASE_URL}?${query}`, { headers, method })
                .then(async (res) => await res.json())
                .then(
                    (res) => {
                        const data = res as unknown as Result
                        if(data.status === 200) {
                            setResult(data)
                        } else {
                            setResult(undefined)
                            setError(`Error fetching jokes. Status Code: ${data.status}`)
                        }
                    },
                    (error) => {
                        console.log(error)
                        setResult(undefined)
                        setError(`Error fetching jokes. ${error}`)
                    }
                )
        }

        if(query) fetchJokes()
    }, [query])

    return (
        <div className='h-[80vh] bg-orange-100 flex flex-col items-center justify-center font-serif'>
            <div className='md:w-1/2 lg:w-2/5 w-full flex justify-between gap-2 px-4'>
                <input 
                    type='text' 
                    id='query' 
                    className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent' 
                    placeholder='Search jokes'
                    onInput={(e) => setTerm(e.currentTarget.value)}
                />
                <button 
                    type='button' 
                    className='py-2 px-4 bg-orange-300 hover:bg-orange-300 focus:ring-orange-300 focus:ring-offset-indigo-200 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg'
                    onClick={() => search()}>
                    Search
                </button>
            </div>

            <div className='md:w-1/2 lg:w-2/5 w-full flex flex-col px-3 mt-2'>
                {/* List Jokes */}
                {result && <Jokes jokes={result.results} />}

                {/* Page through results */}
                {result && result.total_pages > 1 && (
                    <Pagination result={result} search={(pageNum: number) => search(pageNum)} />
                )}

                {/* Display any error */}
                {error && <div className='mt-3 font-bold text-red-500'> {error} </div>}
            </div>
        </div>
    )
}

export default SearchJokes