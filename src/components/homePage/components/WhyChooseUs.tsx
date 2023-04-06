import classes from 'src/components/homePage/css/WhyChooseUs.module.css'

import { useState } from 'react';

import WhyChooseUsCard from 'src/components/homePage/components/WhyChooseUsCard';

const ChooseUsSection = () => {
    //-----------------------------------------------------------------------
    const [display, setDisplay] = useState(true);

    //-----------------------------------------------------------------------
    return (
        <div id='chooseUsSectionWrapper' className={classes.chooseUsSectionWrapper}>

            <WhyChooseUsCard
                display={display}
                icon={"fa-solid fa-people-group fa-2xl"}
                title={'Expert Team'}
                text={'We have 15 years of cleaning experience serving residential and commercial customers nationwide.'}
            ></WhyChooseUsCard>

            <div
                className="whyVerticalLine1">
            </div>

            <WhyChooseUsCard
                display={display}
                icon={"fa-solid fa-thumbs-up fa-2xl"}
                title={'100% Satisfaction'}
                text={'We have cleaned all kinds of different types of flooring, carpets, counters and other materials.'}
            ></WhyChooseUsCard>

            <div
                className="whyVerticalLine2">
            </div>

            <WhyChooseUsCard
                display={display}
                icon={"fa-solid fa-leaf fa-2xl"}
                title={'Eco-friendly'}
                text={'We bring only eco-friendly, organic and none-toxic cleaning supplies.'}
            ></WhyChooseUsCard>

            <div
                className="whyVerticalLine3">
            </div>

            <WhyChooseUsCard
                display={display}
                icon={"fa-solid fa-piggy-bank fa-2xl"}
                title={'Competitive Prices'}
                text={'Our cleaning prices start at $104 for homes and $94 for apartments.'}
            ></WhyChooseUsCard>
        </div>
    )
}
export default ChooseUsSection