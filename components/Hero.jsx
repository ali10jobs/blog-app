import Link from "next/link"

const Hero = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='max-w-[350px] sm:max-w-screen-sm xl:max-w-screen-xl'>
                <div className='w-full flex flex-col items-center'>
                    <h1 className='mt-14 pb-2 sm:mt-20 max-w-[350px] sm:max-w-screen-sm xl:max-w-screen-lg text-3xl sm:text-5xl xl:text-7xl text-center font-bold capitalize bg-gradient-to-r from-cyan-500 to-purple-700 bg-clip-text text-transparent dark:opacity-90'>
                        every business needs a solid & reliable blogs
                    </h1>
                    <p className='mt-5 sm:mt-8 max-w-[350px] sm:max-w-screen-sm xl:max-w-screen-md text-sm xl:text-xl text-zinc-600 dark:text-zinc-500 text-center'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.{" "}
                    </p>
                    <Link
                        href='#'
                        className='mt-16 px-8 py-3 xl:px-12 xl:py-4 text-white text-lg xl:text-xl font-semibold capitalize bg-indigo-700 dark:bg-indigo-900 rounded-full'
                    >
                        get started
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
