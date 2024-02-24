"use client"
import { useState } from "react"
import { IoIosArrowUp } from "react-icons/io"

const FaqItem = ({ question, answer }) => {
    const [answerOpen, setAnswerOpen] = useState(false)
    return (
        <div className=''>
            <div className='flex flex-col'>
                <div className='px-4 w-full h-20 flex items-center justify-between bg-zinc-100'>
                    <p className='text-left'>{question}</p>
                    <button onClick={() => setAnswerOpen(!answerOpen)}>
                        <IoIosArrowUp
                            className={
                                answerOpen
                                    ? "text-xl transition-all duration-200"
                                    : "text-xl transition-all duration-200 rotate-180"
                            }
                        />
                    </button>
                </div>
                <div
                    className={
                        answerOpen
                            ? "h-20 px-4 w-full flex transition-all duration-200 bg-red-200"
                            : "h-0 px-4 w-full flex transition-all duration-200 bg-red-200"
                    }
                >
                    <p className='text-left'>{answer}</p>
                </div>
            </div>
        </div>
    )
}

export default FaqItem
