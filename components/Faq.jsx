import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const faqs = [
    {
        question: "What is TGC Blog?",
        answer: "A blog post website is an online platform where individuals or organizations regularly publish articles, opinions, or informational content on various topics.",
    },
    {
        question: "What are the key features of TGC Blog?",
        answer: "Key features typically include user-friendly publishing tools, categorization/tagging options, comment sections, social media integration, and analytics to track visitor engagement.",
    },
    {
        question: "How do TGC blog benefit users?",
        answer: "Blog post websites provide users with valuable information, insights, and perspectives on diverse topics. They also foster community engagement through comments and discussions.",
    },
    {
        question: "How can you monetize TGC blog?",
        answer: "Monetization methods include displaying advertisements, affiliate marketing, sponsored content, selling digital products or services, and offering premium subscriptions or memberships.",
    },
    {
        question:
            "What are some effective strategies for driving traffic to your blog post?",
        answer: "Strategies include creating high-quality content, optimizing for search engines (SEO), promoting posts on social media, collaborating with influencers, guest posting, and participating in online communities.",
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

const Faq = () => {
    return (
        <div className='bg-zinc-50 dark:bg-zinc-950 py-20'>
            <div className='mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8'>
                <div className='mx-auto max-w-3xl divide-y-2 divide-zinc-200 dark:divide-zinc-800'>
                    <div className='py-10'>
                        <h2 className='text-center text-2xl font-semibold text-zinc-800 dark:text-zinc-300'>
                            Frequently asked questions
                        </h2>
                        <p className='mt-2 text-center text-sm font-semibold text-zinc-500 dark:text-zinc-500'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <dl className='mt-6 space-y-6 divide-y divide-zinc-200 dark:divide-zinc-800'>
                        {faqs.map((faq) => (
                            <Disclosure
                                as='div'
                                key={faq.question}
                                className='pt-6'
                            >
                                {({ open }) => (
                                    <>
                                        <dt className='text-lg'>
                                            <Disclosure.Button className='flex w-full items-start justify-between text-left text-zinc-400'>
                                                <span className='font-medium text-zinc-900 dark:text-zinc-400'>
                                                    {faq.question}
                                                </span>
                                                <span className='ml-6 flex h-7 items-center'>
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open
                                                                ? "-rotate-180 transition-all duration-200"
                                                                : "rotate-0 transition-all duration-200",
                                                            "h-6 w-6 transform"
                                                        )}
                                                        aria-hidden='true'
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel
                                            as='dd'
                                            className='mt-2 pr-12'
                                        >
                                            <p className='text-base text-zinc-500'>
                                                {faq.answer}
                                            </p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Faq
