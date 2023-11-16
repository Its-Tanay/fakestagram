import Header from "./header"

export default function Create() {
    return(
        <>
            <Header />
            <form className="flex flex-col items-center justify-center w-full px-[4rem] gap-[0.35rem] md:px-[2.5rem] mt-[5rem]">
                    <input
                        type="file"
                        name="email"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="fullName"
                        className="input"
                        placeholder="Full Name"
                    />
                    <input
                        type="text"
                        name="username"
                        className="input"
                        placeholder="Username"
                    />
                    <input
                        type="text"
                        name="password"
                        className="input"
                        placeholder="Password"
                    />
                    <div className="flex flex-col gap-4 mt-[0.8rem]">
                        <p className="text-xs text-center text-gray-500 w-full">People who use our service may have uploaded your contact information to Instagram. <span className="text-blue-800">Learn more</span></p>
                        <p className="text-xs text-center text-gray-500 w-full">By signing up, you agree to our <span className="text-blue-800">Terms , Data Policy</span> and <span className="text-blue-800">Cookies Policy</span> .</p>
                    </div>
                    <button type="submit" className="w-full px-[5rem] py-[.5rem] mt-[1rem] text-white text-sm font-semibold bg-[#0095F6] rounded-lg">Sign Up</button>
                </form>
        </>
    )
}