"use client"
import { useState, useEffect } from "react"
import Pagination from "./Pagination"
import IndexPage from "./IndexPage"
import Link from "next/link"

const Posts = ({ items }) => {
    const itemsPerPage = 10
    const [currentPage, setCurrentPage] = useState(1)
    const [pageItems, setPageItems] = useState([])
    const totalPages =
        items.length % itemsPerPage == 0
            ? items.length / itemsPerPage
            : items.length / itemsPerPage + 1

    const onPageChange = (targetPage) => {
        setCurrentPage(targetPage)
        fetchPageItems()
    }

    const fetchPageItems = () => {
        const from = (currentPage - 1) * itemsPerPage
        const to = currentPage * itemsPerPage - 1
        setPageItems(items.slice(from, to))
    }

    useEffect(() => {
        fetchPageItems()
    }, [])

    return (
        <div className=''>
            {pageItems.length && (
                <div className='w-full flex flex-col items-center justify-center'>
                    <IndexPage pageItems={pageItems} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />
                </div>
            )}
        </div>
    )
}

export default Posts
