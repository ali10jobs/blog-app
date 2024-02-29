"use client"
import { useState, useEffect } from "react"
import Search from "@/components/Search"
import Hero from "@/components/Hero"
import OurClients from "@/components/OurClients"
import Statistics from "@/components/Statistics"
import PopularPosts from "@/components/PopularPosts"
import OurTeam from "@/components/OurTeam"
import Posts from "@/components/Posts"
import Faq from "@/components/Faq"
const page = () => {
    const [term, setTerm] = useState("")
    const [items, setItems] = useState([])
    const [filtered, setFiltered] = useState([])

    const fetchPosts = async () => {
        const res = await fetch("/feeds.json")
        const data = await res.json()
        setItems(data)
        setFiltered(data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    useEffect(() => {
        setFiltered(
            items.filter(
                (item) =>
                    item.title.includes(term) || item.content.includes(term)
            )
        )
    }, [term])

    return (
        <div>
            <section>
                <Search term={term} setTerm={setTerm} />
            </section>
            {term ? (
                <>
                    {filtered.length > 0 ? (
                        <Posts items={filtered} />
                    ) : (
                        <div className='w-full'>
                            <div className='mx-auto max-w-screen-2xl flex justify-center items-center'>
                                <p className='text-xl font-normal p-20'>
                                    Sorry for that but no posts found for:{" "}
                                    <span className='px-5 py-2 text-2xl font-medium italic bg-indigo-100 rounded-2xl'>
                                        {term}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <section>
                        <Hero />
                    </section>
                    <section className='mt-20'>
                        <OurClients />
                    </section>
                    <section className='mt-20'>
                        <Statistics />
                    </section>
                    <section className='mt-20'>
                        <PopularPosts />
                    </section>
                    <section className='mt-20'>
                        <OurTeam />
                    </section>
                    <section className='mt-20'>
                        <Faq />
                    </section>
                </>
            )}
        </div>
    )
}

export default page
