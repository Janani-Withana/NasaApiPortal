import React from 'react'
import Navbar from './NavBar'

export default function Layout({navbar = true , children, logged}) {
    return (
        <>
            {navbar && <Navbar logged={logged}></Navbar>}
            <div className="container mt-3">
                {children}
            </div>
        </>
    )
}

