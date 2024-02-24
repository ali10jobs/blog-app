"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { HiMenuAlt4 } from "react-icons/hi"
import { CgClose } from "react-icons/cg"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

const socials = [
    {
        id: 1,
        name: "Facebook",
        href: "#",
        icon: FaFacebook,
        delay: 1.1,
    },
    {
        id: 2,
        name: "Twitter",
        href: "#",
        icon: FaTwitter,
        delay: 1.2,
    },
    {
        id: 3,
        name: "Linkedin",
        href: "#",
        icon: FaLinkedin,
        delay: 1.3,
    },
]

const NavMenu = ({ navbarLinks }) => {
    const [navMenuOpen, setNavMenuOpen] = useState(false)
    return (
        <div>
            <button
                onClick={() => setNavMenuOpen(!navMenuOpen)}
                className='sm:hidden p-[6px] rounded-full bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border dark:border-zinc-700'
            >
                <HiMenuAlt4 className='text-2xl text-zinc-600 dark:text-zinc-500' />
            </button>
            <div
                className={
                    navMenuOpen
                        ? "fixed z-10 top-0 left-0 h-screen w-screen bg-zinc-950/20 dark:bg-white/20 backdrop-blur-md transition-all duration-200"
                        : "fixed z-10 top-0 translate-x-full h-screen w-screen bg-zinc-950/20 dark:bg-white/20 backdrop-blur-md transition-all duration-200"
                }
            >
                <div className='flex flex-col w-full h-full'>
                    <div className='w-full px-5 flex justify-end items-center h-20'>
                        <button
                            onClick={() => setNavMenuOpen(!navMenuOpen)}
                            className='p-[6px] rounded-full bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 border dark:border-zinc-700'
                        >
                            <CgClose className='text-2xl text-zinc-600 dark:text-zinc-500' />
                        </button>
                    </div>
                    <div className='flex flex-col h-full justify-between'>
                        <div>
                            <ul className='px-10 mt-10 flex flex-col space-y-4'>
                                {navbarLinks.map((item) => (
                                    <motion.li
                                        key={item.id}
                                        initial={
                                            !navMenuOpen ? { x: 2000 } : ""
                                        }
                                        animate={navMenuOpen ? { x: 0 } : ""}
                                        transition={
                                            navMenuOpen
                                                ? {
                                                      delay: item.delay,
                                                      type: "just",
                                                  }
                                                : { delay: 0 }
                                        }
                                    >
                                        <Link
                                            href={item.href}
                                            className='text-2xl text-zinc-800 dark:text-white font-bold capitalize'
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className='p-10'>
                            <ul className='flex space-x-4 sm:space-x-10'>
                                {socials.map((item) => (
                                    <motion.li
                                        key={item.id}
                                        initial={
                                            !navMenuOpen ? { y: 1000 } : ""
                                        }
                                        animate={navMenuOpen ? { y: 0 } : ""}
                                        transition={
                                            navMenuOpen
                                                ? {
                                                      delay: item.delay,
                                                      type: "just",
                                                  }
                                                : { delay: 0 }
                                        }
                                    >
                                        <Link
                                            className='text-2xl sm:text-4xl text-zinc-800 dark:text-white'
                                            href={item.href}
                                        >
                                            <item.icon />
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu
