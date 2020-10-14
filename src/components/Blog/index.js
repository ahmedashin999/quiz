import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
const Blog = ({isOpen,toggle}) => {
    return (
        <div>
            <Navbar/>
            <Sidebar isOpen={isOpen}toggle={toggle} />
             
            hi
        </div>
    )
}

export default Blog
