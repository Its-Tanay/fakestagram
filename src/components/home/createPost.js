/* eslint-disable no-unused-vars */
import Header from './header';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../redux/slices/postsSlice';

export default function Create({ close }) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => ({
    currentUser: state.user.currentUser,
  }));
  const { posts } = useSelector((state) => ({
    posts: state.posts.posts,
  }));

  const [formData, setFormData] = useState({
    imageUrl: '',
    caption: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const postData = {
    ...formData,
    username: currentUser.username,
    likes: 0,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createPost(postData));
    close();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-blur-md">
      <div className="flex flex-col m-[2rem] items-center w-[390px] sm:w-[400px] md:m-[4rem] md:border-2 md:border-gray-200 md:my-[1rem] md:rounded-lg bg-white">
        <Header />
        <form onSubmit={handleSubmit} className="flex flex-col gap-[2rem] items-center justify-evenly px-[5rem] py-[2rem] w-full mt-[1rem] md:px-[2.5rem]">
            <h1 className="text-2xl font-semibold">Add a Post</h1>
            <input type="url" name="imageUrl" className="input" placeholder="Image URL" onChange={handleInputChange} />
            <input type="text" name="caption" className="input" placeholder="Caption" onChange={handleInputChange} />
            <button type="submit" className="w-full px-[5rem] py-[.5rem] mt-[1rem] text-white text-sm font-semibold bg-[#0095F6] rounded-lg">
             Create Post
            </button>
        </form>
      </div>
    </div>
  );
}
