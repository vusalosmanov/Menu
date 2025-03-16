import React from "react";
import RestoBar from "./RestoBar";
import Link from "next/link";
const Header = () => {
    return (
        <>
            <header className="w-full max-w-[1340px] mx-auto flex justify-between items-center py-4 px-5">
                {/* Logo */}
                <div className="logo">
                    <Link href="/">
                    <h1 className="text-2xl   font-semibold">Restoran<span className="text-red-700">Menu</span></h1>
                    </Link>
                </div>
                {/* Search Bar */}
                {/* <form className="relative w-[300px] flex items-center ">
                    <label htmlFor="search" className="sr-only">
                        Search
                    </label>
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <svg
                            className="w-5 h-5 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="search"
                        className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 "
                        placeholder="Yemək axtarın..."
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-2   bottom-2 text-white bg-red-700  font-medium rounded-lg  text-sm px-4 py-2"
                    >
                        Axtar
                    </button>
                </form> */}

                {/* Auth Buttons */}
                <div className="gap-3 hidden lg:flex">
                    dil deyismek ucun buraya buttonlar yazilacaq
                </div>
            </header>
            <RestoBar />
        </>
    );
};

export default Header;
