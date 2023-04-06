import { useState } from 'react'
import HowItWorksCard from './HowItWorksCard';
import classes from 'src/components/homePage/css/HowItWorks.module.css'

const HowItWorks = () => {

    //-----------------------------------------------------------------------
    const[info, setInfo]= useState(true);
 
    //-----------------------------------------------------------------------
    return (
        <div id='howSectionWrapper' className={classes.howSectionWrapper}>
            <div className={classes.howSection}>
                <div className={classes.howSectionTitle}>
                    <h2>Work process</h2>
                    <h1>How it works</h1>
                </div>
                <hr className={classes.howHr}/>
                <div className={classes.howCards}>

                    <HowItWorksCard
                            info={info}
                            num={1}
                            circleText={'Log in now!'}
                            hText={'Log in or Sign up'}
                            pText={"Become our customer and get a goog deal."} 
                    ></HowItWorksCard>

                    <div className={classes.howCardArrow}><i className="fa-solid fa-arrow-trend-up fa-2xl"></i></div>

                    <HowItWorksCard
                            info={info}
                            num={2}
                            circleText={'Book now!'}
                            hText={'Book cleaning'}
                            pText={"We're available every day of the week with cleans beginning as early as 8am."} 
                    ></HowItWorksCard>

                    <div className={classes.howCardArrow}><i className="fa-solid fa-arrow-trend-down fa-2xl"></i></div>

                    <HowItWorksCard
                            info={info}
                            num={3}
                            circleText={'Get a deal!'}
                            hText={'Enjoy Cleaniness'}
                            pText={"Keep your place always healthy, clean, and fresh."} 
                    ></HowItWorksCard>

                </div>

            </div>
        </div>
    )
}

export default HowItWorks