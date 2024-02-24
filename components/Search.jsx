"use client"
import { useState } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import { CgClose } from "react-icons/cg"

const Search = () => {
    const [searchInputOpen, setSearchInputOpen] = useState(false)
    const [searchInputValue, setSearchInputValue] = useState("")

    const setSearchValue = (e) => {
        setSearchInputValue(e.target.value)
    }
    const handleSearch = () => {
        if (!searchInputOpen) {
            setSearchInputOpen(!searchInputOpen)
        } else {
            // impelement the search feature
            setSearchInputOpen(!searchInputOpen)
            setSearchInputValue("")
        }
    }
    return (
        <div className='w-full h-16 bg-indigo-50 dark:bg-zinc-900'>
            <div className='mx-auto px-4 sm:px-8 flex justify-end items-center h-full max-w-screen-2xl'>
                {searchInputOpen ? (
                    <form className='w-full' action=''>
                        <input
                            className='w-full py-2 bg-indigo-50 dark:text-white dark:bg-zinc-900 focus:outline-none'
                            placeholder='Search'
                            type='text'
                            onChange={(e) => setSearchInputValue(e)}
                        />
                    </form>
                ) : (
                    ""
                )}
                {searchInputOpen && searchInputValue === "" ? (
                    <button
                        onClick={() => setSearchInputOpen(!searchInputOpen)}
                        className='p-2 rounded-full hover:bg-indigo-900/10'
                    >
                        <CgClose className='text-2xl text-zinc-600' />
                    </button>
                ) : (
                    <button
                        onClick={() => handleSearch()}
                        className='p-2 rounded-full hover:bg-teal-900/10'
                    >
                        <HiOutlineSearch className='text-2xl text-zinc-600' />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Search