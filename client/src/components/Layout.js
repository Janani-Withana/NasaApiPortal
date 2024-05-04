import React from 'react'
import Navbar from './NavBar'

export default function Layout({navbar = true , children }) {
    return (
        <>
            {navbar && <Navbar></Navbar>}
            <div className="container mt-3">
                {children}
            </div>
        </>
    )
}

