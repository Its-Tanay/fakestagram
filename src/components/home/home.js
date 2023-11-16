/* eslint-disable no-unused-vars */
import React from 'react'
import Post from './post'
import Header from './header'
import male from '../../assets/male.png'
import female from '../../assets/female.png'
import Toolbar from './toolbar'
import Story from './story'
import userImg from '../../assets/user.svg'
import { useSelector } from 'react-redux'
import Create from './createPost'

export default function Home(){

    const [open, setOpen] = React.useState(false);

    const openCreate = () => {
        setOpen(true);
    }

    const closeCreate = () => {
        setOpen(false);
    }

    const { posts, currentUser } = useSelector((state) => ({
        currentUser: state.user.currentUser,
        posts: state.posts.posts,
    }));

    return(
        <div className='md:grid '>
            <Header open={openCreate} />
            <div className='mt-[5rem] flex items-center justify-center gap-2 mb-[0.5rem]'>
                <img className='w-[1.8rem] h-auto' src={userImg} alt='user' />
                <p className='text-lg font-semibold'>{currentUser.username}</p>
            </div>
            <div id="stories" className='flex p-2 border-b-[0.5px] border-black overflow-x-auto shadow-md'>
                <Story imgURL={male} />
                <Story imgURL={female} />
                <Story imgURL={male} />
                <Story imgURL={female} />
                <Story imgURL={female} />
                <Story imgURL={male} />
                <Story imgURL={female} />
                <Story imgURL={female} />
                <Story imgURL={male} />
                <Story imgURL={female} />
                <Story imgURL={male} />
            </div>
            <div id="posts" className='mx-auto w-full 480px:w-[480px] 480px:border-x-[0.5px] 480px:border-black'>
                <div className='flex flex-col items-center pb-[4rem]'>
                {posts.map((post, index) => (
                        <Post
                            key={index} 
                            username={post.username}
                            likes={post.likes}
                            caption={post.caption}
                            imageUrl={post.imageUrl}
                        />
                    ))}
                </div>
            </div>
            <Toolbar />
            {open && <Create close={closeCreate} />}
        </div>
    )
}
