import LangMenu from "./LangMenu"
import NavMenu from "./NavMenu"
import Image from "next/image"
import Link from "next/link"
import { HiOutlineMoon, HiOutlineSun, HiMenuAlt4 } from "react-icons/hi"

const navbarLinks = [
    {
        id: 1,
        name: "about",
        href: "#",
        delay: 0.2,
    },
    {
        id: 2,
        name: "topics",
        href: "#",
        delay: 0.4,
    },
    {
        id: 3,
        name: "popular posts",
        href: "#",
        delay: 0.6,
    },
    {
        id: 4,
        name: "newsletter",
        href: "#",
        delay: 0.8,
    },
    {
        id: 5,
        name: "contact",
        href: "#",
        delay: 1,
    },
]

const Navbar = ({ darkMode, setDarkMode, lang, setLang }) => {
    return (
        <div className='px-4 sm:px-8 w-full h-20 bg-white dark:bg-zinc-950'>
            <div className='mx-auto max-w-screen-2xl h-full flex justify-between items-center'>
                <Link href='/'>
                    <Image src='/logo.png' width={96} height={30} alt='logo' />
                </Link>
                <div className='flex items-center space-x-24'>
                    <ul className='hidden sm:flex items-center space-x-5'>
                        {navbarLinks.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className='capitalize font-medium text-zinc-500'
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex items-center space-x-2'>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className='p-[6px] rounded-full bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border dark:border-zinc-700'
                    >
                        {darkMode ? (
                            <HiOutlineSun className='text-2xl text-zinc-600 dark:text-zinc-500' />
                        ) : (
                            <HiOutlineMoon className='text-2xl text-zinc-600 dark:text-zinc-500' />
                        )}
                    </button>
                    <div className='flex items-center space-x-2 bg-zinc-50 dark:bg-zinc-900/50 sm:bg-none border dark:border-zinc-700 sm:border-none p-1 rounded-full'>
                        <LangMenu lang={lang} setLang={setLang} />
                        <NavMenu navbarLinks={navbarLinks} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
