"use client"
import Posts from "@/components/Posts"
import Search from "@/components/Search"
import { useEffect, useState } from "react"

const Page = () => {
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
            {
                <section className=''>
                    {filtered.length > 0 ? (
                        <Posts items={filtered} />
                    ) : (
                        <div>no posts</div>
                    )}
                </section>
            }
        </div>
    )
}

export default Page
