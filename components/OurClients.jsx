import {
    SiAdidas,
    SiNike,
    SiSamsung,
    Si3M,
    SiChupachups,
    SiEmirates,
} from "react-icons/si"

const companiesLogos = [
    {
        id: 1,
        name: "adidas",
        icon: SiAdidas,
    },
    {
        id: 2,
        name: "nike",
        icon: SiNike,
    },
    {
        id: 3,
        name: "samsung",
        icon: SiSamsung,
    },
    {
        id: 4,
        name: "3m",
        icon: Si3M,
    },
    {
        id: 5,
        name: "chupachups",
        icon: SiChupachups,
    },
    {
        id: 6,
        name: "emirates",
        icon: SiEmirates,
    },
]

const OurClients = () => {
    return (
        <div className='bg-white dark:bg-zinc-950'>
            <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
                <div className='mx-auto max-w-[350px] sm:max-w-screen-sm xl:max-w-screen-md'>
                    <h2 className='text-center text-2xl font-semibold text-zinc-800 dark:text-zinc-300'>
                        Trusted by over 5 big brands all over the world
                    </h2>
                    <p className='mt-2 text-center text-sm font-semibold text-zinc-500 dark:text-zinc-500'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className='mt-14 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-20'>
                    {companiesLogos.map((item) => (
                        <div
                            key={item.id}
                            className='col-span-1 flex justify-center bg-zinc-50 dark:bg-zinc-900 py-8 px-8'
                        >
                            <item.icon className='text-6xl text-zinc-500' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurClients
