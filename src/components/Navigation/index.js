import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
    return (
        <div className="navigationDiv">
            <div className="navigationElement">
                <Link to='/about'>    
                    <button>
                            ABOUT
                    </button>
                </Link>    
            </div>
            <div className="navigationElement">
                <Link to='/portfolio'>    
                    <button>
                            PORTFOLIO
                    </button>
                </Link>    
            </div>
            <div className="navigationElement">
                <Link to='/contact'>    
                    <button>
                            CONTACT
                    </button>
                </Link>    
            </div>
      </div>
    ) 
}

export default Navigation