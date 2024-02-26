const Posts = ({ items }) => {
    const filteredItems = items.length && items.slice(0, 10)
    return (
        <div className='flex items-center justify-center'>
            {items.length && (
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length &&
                            items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td className='max-w-20 max-h-20'>
                                        <img src={item.photo} />
                                    </td>
                                    <td className='max-w-md truncate'>
                                        {item.title}
                                    </td>
                                    <td className='max-w-md truncate'>
                                        {item.content}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Posts
