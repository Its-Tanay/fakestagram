import reels from '../../assets/reels.png'
import search from '../../assets/search.png'
import home from '../../assets/home.png'
import dms from '../../assets/dms.png'
import logout from '../../assets/logout.png'

export default function Toolbar(){
    return(
        <>
            <footer className='flex justify-evenly items-center py-[1rem] border-t-[0.5px] fixed bottom-0 left-0 right-0 bg-white z-10 border-black'>
                    <img className='w-[1.8rem] h-auto' src={home} alt='home' />
                    <img className='w-[1.8rem] h-auto' src={search} alt='search' />
                    <img className='w-[1.8rem] h-auto' src={reels} alt='reels' />
                    <img className='w-[1.8rem] h-auto' src={dms} alt='dms' />
                    <img className='w-[2rem] h-auto' src={logout} alt='user' />
            </footer>
        </>
    )
}