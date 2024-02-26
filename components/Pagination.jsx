import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
} from "@heroicons/react/20/solid"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const totalPagesArray = Array.from(
        { length: totalPages - 1 + 1 },
        (_, index) => index + 1
    )

    return (
        <div className='w-full h-16 bg-white dark:bg-zinc-950'>
            <div className='mx-auto h-full max-w-screen-2xl flex justify-center items-center space-x-2'>
                <button
                    disabled={currentPage == 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className={
                        currentPage === 1
                            ? "capitalize cursor-not-allowed py-1 px-3 bg-zinc-200 text-zinc-400 rounded-full"
                            : "capitalize py-1 px-3 bg-zinc-400 rounded-full"
                    }
                >
                    previous
                </button>
                {totalPagesArray.map((item) => (
                    <button
                        key={item}
                        disabled={currentPage == item}
                        onClick={() => onPageChange(item)}
                        className={
                            currentPage === item
                                ? "capitalize cursor-not-allowed px-3 py-1 bg-zinc-200 text-zinc-400 rounded-full"
                                : "capitalize px-3 py-1 bg-zinc-400 rounded-full"
                        }
                    >
                        {item}
                    </button>
                ))}
                <button
                    disabled={currentPage == totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className={
                        currentPage === totalPages
                            ? "capitalize cursor-not-allowed py-1 px-3 bg-zinc-200 text-zinc-400 rounded-full"
                            : "capitalize py-1 px-3 bg-zinc-400 rounded-full"
                    }
                >
                    next
                </button>
            </div>
        </div>
    )
}

export default Pagination
