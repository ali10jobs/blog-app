"use client"
import { useState } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import { CgClose } from "react-icons/cg"

const Search = ({ term, setTerm }) => {
    const [searchInputOpen, setSearchInputOpen] = useState(false)

    return (
        <div className='w-full h-16 bg-indigo-50 border-b border-zinc-200 dark:border-none dark:border-zinc-800 dark:bg-zinc-900'>
            <div className='mx-auto px-4 sm:px-8 flex justify-end items-center h-full max-w-screen-2xl'>
                {searchInputOpen ? (
                    <input
                        className='w-full py-2 bg-indigo-50 dark:text-white dark:bg-zinc-900 dark:focus:border-b dark:focus:border-zinc-700 focus:outline-none focus:border-b-2 focus:border-indigo-200'
                        placeholder='Search'
                        type='text'
                        onChange={(e) => setTerm(e.target.value)}
                    />
                ) : (
                    ""
                )}
                {searchInputOpen && term === "" ? (
                    <button
                        onClick={() => setSearchInputOpen(!searchInputOpen)}
                        className='p-2 rounded-full hover:bg-indigo-900/10 dark:hover:bg-zinc-800/50'
                    >
                        <CgClose className='text-2xl text-zinc-600' />
                    </button>
                ) : (
                    <button
                        onClick={() => setSearchInputOpen(!searchInputOpen)}
                        className='p-2 rounded-full hover:bg-teal-900/10 dark:hover:bg-zinc-800/50'
                    >
                        <HiOutlineSearch className='text-2xl text-zinc-600' />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Search
