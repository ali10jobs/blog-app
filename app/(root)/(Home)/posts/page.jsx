"use client"
import Posts from "@/components/Posts"
import Search from "@/components/Search"
import { useEffect, useState } from "react"
const Page = () => {
    const [items, setItems] = useState([])

    const fetchPosts = async () => {
        const res = await fetch("/feeds.json")
        const data = await res.json()
        setItems(data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            <section>
                <Search />
            </section>
            <section className='mt-20'>
                <Posts items={items} />
            </section>
        </div>
    )
}

export default Page
