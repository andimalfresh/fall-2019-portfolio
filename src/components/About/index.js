import React from 'react'

const About = () => {
    return (
        <div className='page-Setup'>
          <h2>
            About <span className='nameAndrew'>ANDREW</span>
          </h2>
          <div className='pageCard'>
            <h3>
                Professional History
            </h3>
            <ul className='historyList'>
                <li className='jobEra'>
                    <h4>
                        <img src= {require('../../images/Pedersen.png')} alt='Company Icon'/>Pedersen Solutions
                    </h4> 
                    <p className='jobEraDescription'>
                        Ut ninja wisi enim ad minim veniam,
                        quis nostrud exerci tation ullamcorper suscipit ninja
                        lobortis nisl ut aliquip ex ea commodo consequat. Dui
                        s ninja autem vel eum iriure dolor in hendrerit in vulputat
                        e ninja velit esse molestie consequat, vel illum dolore eu 
                        feugiat nulla ninja
                    </p>
                </li>
                <li className='jobEra'>
                <h4>
                    <img src= {require('../../images/Pedersen.png')} alt='Company Icon'/>Pedersen Solutions
                </h4> 
                <p className='jobEraDescription'>
                    Ut ninja wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit ninja
                    lobortis nisl ut aliquip ex ea commodo consequat. Dui
                    s ninja autem vel eum iriure dolor in hendrerit in vulputat
                    e ninja velit esse molestie consequat, vel illum dolore eu 
                    feugiat nulla ninja
                </p>
            </li>
            <li className='jobEra'>
            <h4>
                <img src= {require('../../images/Pedersen.png')} alt='Company Icon'/>Pedersen Solutions
            </h4> 
            <p className='jobEraDescription'>
                Ut ninja wisi enim ad minim veniam,
                quis nostrud exerci tation ullamcorper suscipit ninja
                lobortis nisl ut aliquip ex ea commodo consequat. Dui
                s ninja autem vel eum iriure dolor in hendrerit in vulputat
                e ninja velit esse molestie consequat, vel illum dolore eu 
                feugiat nulla ninja
            </p>
        </li>
        <li className='jobEra'>
        <h4>
            <img src= {require('../../images/Pedersen.png')} alt='Company Icon'/>Pedersen Solutions
        </h4> 
        <p className='jobEraDescription'>
            Ut ninja wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit ninja
            lobortis nisl ut aliquip ex ea commodo consequat. Dui
            s ninja autem vel eum iriure dolor in hendrerit in vulputat
            e ninja velit esse molestie consequat, vel illum dolore eu 
            feugiat nulla ninja
        </p>
    </li>
            </ul>
                </div>
          <div className='pageCard'>
            <h3>
                Personal History
            </h3>
                <p>Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja</p>
          </div>
        </div>
    )
}

export default About