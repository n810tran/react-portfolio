import React from 'react'

function Header() {
    return (
        <>
            <div className="mb-5 d-flex justify-content-between name_header">
                <HeaderAnimation />
                <ul className="flex-row nav nav-tabs">
                    <li className="nav-fill nav-item">
                        <Link
                            to="/"
                            className={currentPage === '/' ? 'nav-link active' : 'nav-link'} >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Portfolio"
                            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Contact"
                            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Resume"
                            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header