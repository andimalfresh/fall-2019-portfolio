import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Link to='/'>
            <header className="App-header">
                <div className="headerName">
                    ANDREW PEDERSEN
                </div>
                <div className="jobTitle">
                    developer
                </div> 
            </header>
        </Link>
    )
}

export default Header