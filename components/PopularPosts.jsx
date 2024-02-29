"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

// const posts = [
//     {
//         title: "Boost your conversion rate",
//         href: "#",
//         category: { name: "Article", href: "#" },
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
//         date: "Jan 16, 2024",
//         datetime: "2024-03-16",
//         imageUrl:
//             "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
//         readingTime: "6 min",
//         author: {
//             name: "Roel Aufderehar",
//             href: "#",
//             imageUrl:
//                 "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//         },
//     },
//     {
//         title: "How to use search engine optimization to drive sales",
//         href: "#",
//         category: { name: "Video", href: "#" },
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
//         date: "Jan 10, 2024",
//         datetime: "2024-03-10",
//         imageUrl:
//             "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
//         readingTime: "4 min",
//         author: {
//             name: "Brenna Goyette",
//             href: "#",
//             imageUrl:
//                 "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//         },
//     },
//     {
//         title: "Improve your customer experience",
//         href: "#",
//         category: { name: "Case Study", href: "#" },
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
//         date: "Feb 12, 2024",
//         datetime: "2024-02-12",
//         imageUrl:
//             "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
//         readingTime: "11 min",
//         author: {
//             name: "Daniela Metz",
//             href: "#",
//             imageUrl:
//                 "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//         },
//     },
// ]

const PopularPosts = () => {
    const [posts, setPosts] = useState([])

    const fetchPopularPosts = async () => {
        let res = await fetch("/feeds.json")
        let data = await res.json()
        let postTags = []
        data.sort((a, b) => b.likes - a.likes)
        data.map((item) => {
            postTags = item.tags.split(", ")
            item.tags = postTags
        })
        setPosts(data.slice(0, 3))
    }

    useEffect(() => {
        fetchPopularPosts()
    }, [])

    return (
        <div className='relative bg-zinc-100 dark:bg-zinc-950 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
            <div className='hidden sm:absolute inset-0'>
                <div className='h-1/3 bg-white dark:bg-zinc-950 sm:h-2/3' />
            </div>
            <div className='relative mx-auto max-w-7xl'>
                <div className='text-center'>
                    <h2 className='text-center text-2xl font-semibold text-zinc-800 dark:text-zinc-300'>
                        Popular Posts
                    </h2>
                    <p className='mt-2 text-center text-sm font-semibold text-zinc-500 dark:text-zinc-500'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsa libero labore natus atque, ducimus sed.
                    </p>
                </div>
                <div className='mx-auto mt-20 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className='flex flex-col overflow-hidden rounded-3xl shadow-lg'
                        >
                            <div className='flex-shrink-0'>
                                <img
                                    className='h-48 w-full object-cover'
                                    src={post.photo}
                                    alt={post.tags[0]}
                                />
                            </div>
                            <div className='flex flex-1 flex-col justify-between bg-white dark:bg-zinc-900/25 p-6'>
                                <div className='flex-1'>
                                    <ul className='flex items-center space-x-2'>
                                        {post.tags.map((tag, index) => (
                                            <li key={index} className=''>
                                                <Link
                                                    href='#'
                                                    className='text-sm text-indigo-700 dark:text-indigo-900 hover:underline capitalize font-bold'
                                                >
                                                    {tag}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href='#' className='mt-2 block'>
                                        <p className='text-xl font-semibold text-zinc-900 dark:text-zinc-400'>
                                            {post.title}
                                        </p>
                                        <p className='mt-3 text-base truncate text-zinc-500 dark:text-zinc-600'>
                                            {post.content}
                                        </p>
                                    </Link>
                                </div>
                                <div className='mt-6 flex items-center'>
                                    <div className='flex-shrink-0'>
                                        <Link href='#'>
                                            <span className='sr-only'>
                                                {post.author}
                                            </span>
                                            <img
                                                className='h-10 w-10 rounded-full'
                                                src={post.authorAvatar}
                                                alt=''
                                            />
                                        </Link>
                                    </div>
                                    <div className='ml-3'>
                                        <p className='text-sm font-medium text-zinc-900 dark:text-zinc-500'>
                                            <Link
                                                href='#'
                                                className='hover:underline'
                                            >
                                                {post.author}
                                            </Link>
                                        </p>
                                        <div className='flex space-x-1 text-sm text-zinc-500 dark:text-zinc-700'>
                                            <time dateTime='#'>
                                                {post.date}
                                            </time>
                                            <span aria-hidden='true'>
                                                &middot;
                                            </span>
                                            <span>
                                                {post.readTime + " "}minutes
                                                read
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularPosts
