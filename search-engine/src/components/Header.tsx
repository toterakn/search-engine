import { ReactElement } from 'react'

const Header = (): ReactElement => {
    return (
        <div className='h-[20vh] bg-orange-300 flex flex-col items-center justify-center font-serif text-3xl'>
            Dad Jokes!
        </div>
    )
}

export default Header