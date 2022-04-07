import { ReactElement } from 'react'
import { PageType, Result } from '../util/types'

interface Props {
    result: Result
    search: (pageNum: number) => void
}

const Pagination = ({result, search}: Props): ReactElement => {
    const updatePage = (type: PageType) => {
        const updatedPage = type === 'next' ? result.next_page : result.previous_page
        search(updatedPage)
    }
    return (
        <div className='flex justify-center gap-2'>
            <button 
                type='button' 
                className='disabled:cursor-not-allowed disabled:text-slate-400 py-2 px-4 text-orange-400 hover:bg-orange-300 focus:ring-orange-300 focus:ring-offset-indigo-200 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg'
                disabled={result.current_page === 1}
                onClick={() => updatePage('prev')}>
                prev
            </button>
            <button 
                type='button' 
                className='disabled:cursor-not-allowed disabled:text-slate-400 py-2 px-4 text-orange-400 hover:bg-orange-300 focus:ring-orange-300 focus:ring-offset-indigo-200 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg'
                disabled={result.current_page === result.total_pages}
                onClick={() => updatePage('next')}>
                next
            </button>
        </div>
    )
}

export default Pagination