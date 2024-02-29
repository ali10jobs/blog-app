import Link from "next/link"

const IndexPage = ({ pageItems }) => {
    return (
        <>
            {pageItems.length && (
                <div className='relative mt-10 bg-zinc-100 rounded-2xl dark:bg-zinc-950 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
                    <div className='hidden sm:absolute inset-0'>
                        <div className='h-1/3 bg-white dark:bg-zinc-950 sm:h-2/3' />
                    </div>
                    <div className='relative mx-auto max-w-7xl'>
                        <div className='text-center'>
                            <h2 className='text-center text-2xl font-semibold text-zinc-800 dark:text-zinc-300'>
                                All Posts
                            </h2>
                            <p className='mt-2 text-center text-sm font-semibold text-zinc-500 dark:text-zinc-500'>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Ipsa libero labore natus
                                atque, ducimus sed.
                            </p>
                        </div>
                        <div className='mx-auto mt-5 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
                            {pageItems.map((item) => (
                                <div
                                    key={item.id}
                                    className='my-8 flex flex-col overflow-hidden rounded-3xl border dark:border-none border-zinc-100 hover:shadow-lg dark:hover:shadow-zinc-900/80 transition-all duration-200'
                                >
                                    <div className='flex-shrink-0'>
                                        <img
                                            className='h-48 w-full object-cover'
                                            src={item.photo}
                                            alt={item.tags[0]}
                                        />
                                    </div>
                                    <div className='flex flex-1 flex-col justify-between bg-white dark:bg-zinc-900/25 p-6'>
                                        <div className='flex-1'>
                                            {/* <ul className='flex items-center space-x-2'>
                                                {item.tags.map((tag, index) => (
                                                    <li
                                                        key={index}
                                                        className=''
                                                    >
                                                        <Link
                                                            href='#'
                                                            className='text-sm text-indigo-700 dark:text-indigo-900 hover:underline capitalize font-bold'
                                                        >
                                                            {tag}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul> */}
                                            <Link
                                                href='#'
                                                className='mt-2 block'
                                            >
                                                <p className='text-xl font-semibold text-zinc-900 dark:text-zinc-400'>
                                                    {item.title}
                                                </p>
                                                <p className='mt-3 text-base truncate text-zinc-500 dark:text-zinc-600'>
                                                    {item.content}
                                                </p>
                                            </Link>
                                        </div>
                                        <div className='mt-6 flex items-center'>
                                            <div className='flex-shrink-0'>
                                                <Link href='#'>
                                                    <span className='sr-only'>
                                                        {item.author}
                                                    </span>
                                                    <img
                                                        className='h-10 w-10 rounded-full'
                                                        src={item.authorAvatar}
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
                                                        {item.author}
                                                    </Link>
                                                </p>
                                                <div className='flex space-x-1 text-sm text-zinc-500 dark:text-zinc-700'>
                                                    <time dateTime='#'>
                                                        {item.date}
                                                    </time>
                                                    <span aria-hidden='true'>
                                                        &middot;
                                                    </span>
                                                    <span>
                                                        {item.readTime + " "}
                                                        minutes read
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
            )}
        </>
    )
}

export default IndexPage
