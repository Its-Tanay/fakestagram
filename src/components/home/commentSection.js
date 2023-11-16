import React from "react";
import Header from "./header";
import Toolbar from "./toolbar";
import Comment from "./comment";

export default function CommentSection() {
    return (
        <>
            <Header />
                <div className="flex flex-col justify-between mt-[4rem] pb-[8rem] min-h-full mx-auto w-full 480px:w-[480px] 480px:border-x-[0.5px] 480px:border-black">
                    <Comment />
                    <div>
                        <input
                            className="w-full h-[3rem] border-y-[0.5px] border-black rounded-none outline-none px-4"
                            type="text"
                            placeholder="Add a comment..."
                        />
                        <button className="w-full h-[3rem] bg-[#0095F6] text-white font-semibold text-lg">
                            Post
                        </button>
                    </div>
                </div>
            <Toolbar />
        </>
    );
}
