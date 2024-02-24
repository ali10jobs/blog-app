import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const navigation = {
    solutions: [
        { name: "Marketing", href: "#" },
        { name: "Analytics", href: "#" },
        { name: "Commerce", href: "#" },
        { name: "Insights", href: "#" },
    ],
    support: [
        { name: "Pricing", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
        { name: "API Status", href: "#" },
    ],
    company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Jobs", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" },
    ],
    legal: [
        { name: "Claim", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
    ],
    social: [
        {
            name: "Facebook",
            href: "#",
            icon: FaFacebook,
        },
        {
            name: "Twitter",
            href: "#",
            icon: FaTwitter,
        },
        {
            name: "Linkedin",
            href: "#",
            icon: FaLinkedin,
        },
    ],
}

const Footer = () => {
    return (
        <footer
            className='mt-20 bg-white dark:bg-zinc-900/40'
            aria-labelledby='footer-heading'
        >
            <h2 id='footer-heading' className='sr-only'>
                Footer
            </h2>
            <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
                <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
                    <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
                        <div className='md:grid md:grid-cols-2 md:gap-8'>
                            <div>
                                <h3 className='text-base font-medium text-zinc-900 dark:text-white'>
                                    Solutions
                                </h3>
                                <ul role='list' className='mt-4 space-y-4'>
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className='text-base text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white'
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-12 md:mt-0'>
                                <h3 className='text-base font-medium text-zinc-900 dark:text-white'>
                                    Support
                                </h3>
                                <ul role='list' className='mt-4 space-y-4'>
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className='text-base text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white'
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='md:grid md:grid-cols-2 md:gap-8'>
                            <div>
                                <h3 className='text-base font-medium text-zinc-900 dark:text-white'>
                                    Company
                                </h3>
                                <ul role='list' className='mt-4 space-y-4'>
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className='text-base text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white'
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-12 md:mt-0'>
                                <h3 className='text-base font-medium text-zinc-900 dark:text-white'>
                                    Legal
                                </h3>
                                <ul role='list' className='mt-4 space-y-4'>
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className='text-base text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-white'
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 xl:mt-0'>
                        <h3 className='text-base font-medium text-zinc-900 dark:text-white'>
                            Subscribe to our newsletter
                        </h3>
                        <p className='mt-4 text-base text-zinc-500'>
                            The latest news, articles, and resources, sent to
                            your inbox weekly.
                        </p>
                        <form className='mt-4 sm:flex sm:max-w-md'>
                            <label htmlFor='email-address' className='sr-only'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email-address'
                                id='email-address'
                                autoComplete='email'
                                required
                                className='w-full min-w-0 appearance-none rounded-full border border-zinc-300 dark:border-zinc-900 bg-white dark:bg-zinc-950 py-2 px-5 text-base text-zinc-900 placeholder-zinc-500 shadow-sm focus:border-indigo-700 focus:placeholder-zinc-400 focus:outline-none focus:ring-indigo-700'
                                placeholder='Enter your email'
                            />
                            <div className='mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
                                <button
                                    type='submit'
                                    className='flex w-full items-center justify-center rounded-full border border-transparent bg-indigo-700 dark:bg-indigo-900 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='mt-8 border-t border-zinc-200 dark:border-zinc-900 pt-8 md:flex md:items-center md:justify-between'>
                    <div className='flex space-x-6 md:order-2'>
                        {navigation.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className='text-zinc-400 hover:text-zinc-500 dark:text-zinc-500 dark:hover:text-white'
                            >
                                <span className='sr-only'>{item.name}</span>
                                <item.icon
                                    className='h-6 w-6'
                                    aria-hidden='true'
                                />
                            </a>
                        ))}
                    </div>
                    <p className='mt-8 text-base text-zinc-500 md:order-1 md:mt-0'>
                        &copy; 2024 TGC Blog, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
