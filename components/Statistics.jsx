import {
    SiAdidas,
    SiNike,
    SiSamsung,
    Si3M,
    SiChupachups,
    SiEmirates,
} from "react-icons/si"

const nubmers = [
    {
        id: 1,
        number: "1,000+",
        description: "Creators on the platform",
    },
    {
        id: 2,
        number: "2%",
        description: "Flat platform fee",
    },
    {
        id: 3,
        number: "98.9%",
        description: "Uptime guarantee",
    },
    {
        id: 4,
        number: "$70M",
        description: "Paid out to creators",
    },
]

const Statistics = () => {
    return (
        <div className='bg-white dark:bg-zinc-950'>
            <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
                <div className='mx-auto max-w-[350px] sm:max-w-screen-sm xl:max-w-screen-md'>
                    <h2 className='text-center text-2xl font-semibold text-zinc-800 dark:text-zinc-300'>
                        Our nubmers says everything
                    </h2>
                    <p className='mt-2 text-center text-sm font-semibold text-zinc-500 dark:text-zinc-500'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry
                    </p>
                </div>
                <div className='mt-14 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-20'>
                    {nubmers.map((item) => (
                        <div
                            key={item.id}
                            className='col-span-1 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 py-8 px-8'
                        >
                            <p className='text-2xl font-bold text-zinc-800 dark:text-white'>
                                {item.number}
                            </p>
                            <p className='text-sm text-center font-medium text-zinc-500'>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Statistics
