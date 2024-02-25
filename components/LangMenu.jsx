"use client"
import { useState } from "react"
import Image from "next/image"
import { HiOutlineGlobeAlt } from "react-icons/hi2"

const languages = [
    {
        id: 1,
        name: "arabic",
        img: "./sa-flag.svg",
        imgAlt: "sa-flag",
    },
    { id: 2, name: "english", img: "./us-flag.svg", imgAlt: "us-flag" },
]

const LangMenu = ({ lang, setLang }) => {
    const [langMenuOpen, setLangMenuOpen] = useState(false)

    const handleSetLang = (selectedLang) => {
        setLang(selectedLang)
        setLangMenuOpen(!langMenuOpen)
    }
    return (
        <div className='relative'>
            <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className='p-[6px] rounded-full bg-zinc-50 sm:bg-none dark:sm:bg-none dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border dark:border-zinc-700'
            >
                <HiOutlineGlobeAlt className='text-2xl text-zinc-600 dark:text-zinc-500' />
            </button>
            {langMenuOpen ? (
                <>
                    <div
                        onClick={() => setLangMenuOpen(!langMenuOpen)}
                        className='fixed top-0 left-0 z-10 w-screen h-screen'
                    />
                    <div className='absolute z-20 right-0 mt-2 rounded-xl w-52 bg-white dark:bg-zinc-950 border dark:border-zinc-800'>
                        <ul>
                            {languages.map((item) => (
                                <li key={item.id} className='w-full py-2'>
                                    <button
                                        onClick={() => handleSetLang(item.name)}
                                        className='flex items-center justify-between w-full hover:bg-zinc-100 hover:dark:bg-zinc-900 px-4 py-2'
                                    >
                                        <span className='text-sm font-medium capitalize dark:text-zinc-500'>
                                            {item.name}
                                        </span>
                                        <Image
                                            src={item.img}
                                            width={20}
                                            height={20}
                                            alt={item.imgAlt}
                                        />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    )
}

export default LangMenu
