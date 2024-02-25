import Image from "next/image"
const people = [
    {
        id: 1,
        name: "Oliver Rodriguez",
        role: "Founder / CEO",
        imageUrl: "/people/person2.png",
    },
    {
        id: 2,
        name: "Emma Harrison",
        role: "CTO",
        imageUrl: "/people/person3.png",
    },
    {
        id: 3,
        name: "William Parker",
        role: "GM",
        imageUrl: "/people/person1.png",
    },
]

const OurTeam = () => {
    return (
        <div className='bg-white dark:bg-zinc-950'>
            <div className='mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24'>
                <div className='space-y-16 sm:space-y-20'>
                    <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
                        <h2 className='text-center text-2xl font-semibold text-zinc-800 dark:text-zinc-300'>
                            People Behind TGC Blog
                        </h2>
                        <p className='mx-auto mt-2 text-center text-sm font-semibold text-zinc-500 dark:text-zinc-500 max-w-[350px] sm:max-w-screen-sm xl:max-w-screen-md'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ipsa libero labore natus atque, ducimus sed.
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ipsa libero labore natus atque, ducimus sed.
                        </p>
                    </div>
                    <ul
                        role='list'
                        className='mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-3'
                    >
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className='space-y-4'>
                                    <Image
                                        className='mx-auto aspect-square rounded-full lg:h-24 lg:w-24'
                                        src={person.imageUrl}
                                        width={80}
                                        height={80}
                                        alt='photo'
                                    />
                                    <div className='space-y-2'>
                                        <div className='text-xs font-medium lg:text-sm dark:text-white'>
                                            <h3>{person.name}</h3>
                                            <p className='text-indigo-700 dark:text-indigo-900'>
                                                {person.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default OurTeam
