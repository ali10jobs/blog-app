import FaqItem from "./FaqItem"
import { CgClose } from "react-icons/cg"

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
]

const Faq = () => {
    return (
        <div className='mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-24'>
            <ul className='flex flex-col'>
                {faqs.map((item) => (
                    <li>
                        <FaqItem
                            question={item.question}
                            answer={item.answer}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Faq
