import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
const Utn = ({isOpen,toggle}) => {
    return (
        <div>
            <Navbar/>
            <Sidebar isOpen={isOpen}toggle={toggle}/>
            hello
        </div>
    )
}

export default Utn
