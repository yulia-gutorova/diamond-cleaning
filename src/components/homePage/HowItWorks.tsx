import { useState } from 'react'
import HowItWorksCard from './HowItWorkaCard';
import './HowItWorks.css'

const HowItWorks = () => {

    const[info, setInfo]= useState(true);

    
    return (
        <div className="how-section-wrapper">
            <div className="how-section">
                <div className='how-section-title'>
                    <h2>Work process</h2>
                    <h1>How it works</h1>
                </div>
                <hr className='how-hr' />
                <div className="how-cards">

                    <HowItWorksCard
                            info={info}
                            num={1}
                            hText={'Log in or Sign up'}
                            pText={"Become our customer and get a goog deal."} 
                    ></HowItWorksCard>

                    <div className='how-card-arrow'><i className="fa-solid fa-chevron-right fa-2xl"></i></div>

                    <HowItWorksCard
                            info={info}
                            num={2}
                            hText={'Bok cleaning'}
                            pText={"We're available every day of the week with cleans beginning as early as 8am."} 
                    ></HowItWorksCard>

                    <div className='how-card-arrow'><i className="fa-solid fa-chevron-right fa-2xl"></i></div>

                    <HowItWorksCard
                            info={info}
                            num={3}
                            hText={'Enjoy Cleaniness'}
                            pText={"Keep your place always healthy, clean, and fresh."} 
                    ></HowItWorksCard>

                </div>

            </div>
        </div>
    )
}

export default HowItWorks