import React from 'react'

const About = (props) => {
    return (
        <div className='page-Setup'>
        <span className='nameAndrew'> ABOUT ANDREW</span>
          <div className='pageCard'>
            <button onClick={props.handleJobHistory}>
                Professional
            </button>
            <ul className='historyList'>
                <li className='jobEra'>
                <h4>Pedersen Solutions</h4>
                    <p className='jobEraDescription'>

                        <img className='smImg' src= {require('../../images/Pedersen.jpg')} alt='Company Icon'/> 
                        After returning home to Winter Park after graduating from Galvanize I created my own company, Pedersen Solutions to meet the demands of modern Web Development for small businesses.
                        I specialize in bringing my clients afforable solutions and enjoy teaching them how they can use Social Media and platforms like Google Tag Manager, Anayltics and AdWords themselves to
                        make their business more successful.  
                    </p>
                </li>
                <li className='jobEra'>
                    <h4>The Foundry Cinema and Bowl</h4>
                        <p className='jobEraDescription'>

                            <img className='smImg' src= {require('../../images/Foundry.jpg')} alt='Company Icon'/> 
                            From 2012-2019 I worked at the Foundry Cinema and Bowl in Fraser, Co. I began bartending and serving while helping manage the front-of-house operations. Eventually helped oversee hospitality as a whole as well as personel management, day to day operations, and technology driven media and business solutions. 
                        </p>
                </li>
                <li className='jobEra'>
                    <h4>Studio 401 Salon</h4>
                        <p className='jobEraDescription'>

                            <img className='smImg' src= {require('../../images/401.jpg')} alt='Company Icon'/> 
                            Studio 401 Salon is a Winter Park, CO's premier modern salon specializing in hair, waxing, and tanning services.
                            In 2016, my then girlfriend (now just business parter) and I decided that due to her success as a stylist with a large customer base that we wanted to go into business for ourselves and create the best modern salon in the Grand County area. We handled the build out, intereior decorating, infrastructre, customer database integration, scheduling services, identity design, web design, Google Analytics, Google Adwords/AdWordsExpress, SEO, brand and marketing management all our selves.
                            We used Squarespace for web design and deployment due to its ease of use and responsive mobile design due to at the time we were a bit short on time working full time, raising two boys all while and putting the whole salon together in 4 weeks.
                        </p>
                </li>
                <li className='jobEra'>
                    <h4>Mountain Chalet Propery Managment</h4>
                        <p className='jobEraDescription'>

                            <img className='smImg' src= {require('../../images/mountainChalet.jpg')} alt='Company Icon'/> 
                            I began working at Mountain Chalet Property Management in the summer of 2007. 
                            Through the years I handled many task from landscaping, building upkeep and repair, winterizing properties, snow removal operations, painting, and day to day property upkeep. I left the company full time in 2011 and then returned as a consultant in 2012-13 until Dick and Louise Norman sold the company in 2014.
                        </p>
                </li>
            </ul>
                </div>
          <div className='pageCard'>
            <button>
                Personal 
            </button>
                <p>Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja</p>
          </div>
        </div>
    )
}

export default About