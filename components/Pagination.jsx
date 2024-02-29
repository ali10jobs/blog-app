import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const totalPagesArray = Array.from(
        { length: totalPages - 1 + 1 },
        (_, index) => index + 1
    )

    return (
        <div className='py-10 w-full h-16 bg-zinc-50 dark:bg-zinc-950'>
            <div className='mx-auto h-full sm:max-w-screen-2xl flex justify-center items-center space-x-0 sm:space-x-10'>
                <button
                    disabled={currentPage == 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className={
                        currentPage === 1
                            ? "capitalize cursor-not-allowed p-2 bg-indigo-300 dark:bg-indigo-400/30 text-2xl text-white dark:text-indigo-200/30 rounded-full"
                            : "capitalize p-2 bg-indigo-700 dark:bg-indigo-900 rounded-full text-2xl text-white"
                    }
                >
                    <HiArrowSmLeft className='' />
                </button>
                <div className='flex justify-center items-center space-x-1 sm:space-x-1'>
                    {totalPagesArray.map((item) => (
                        <button
                            key={item}
                            disabled={currentPage == item}
                            onClick={() => onPageChange(item)}
                            className={
                                currentPage === item
                                    ? "capitalize cursor-not-allowed p-2 sm:px-3 sm:py-1 text-zinc-900 font-bold border-b-2 border-indigo-700 dark:border-indigo-900"
                                    : "capitalize p-2 sm:px-3 sm:py-1 text-zinc-400 font-normal"
                            }
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <button
                    disabled={currentPage == totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className={
                        currentPage === totalPages
                            ? "capitalize cursor-not-allowed p-2 bg-indigo-300 dark:bg-indigo-400/30 text-2xl text-white dark:text-indigo-200/30 rounded-full"
                            : "capitalize p-2 bg-indigo-700 dark:bg-indigo-900 rounded-full text-2xl text-white"
                    }
                >
                    <HiArrowSmRight className='' />
                </button>
            </div>
        </div>
    )
}

export default Pagination
