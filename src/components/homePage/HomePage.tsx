import ContactUsSection from 'src/components/homePage/components/ContactUsSection'
import HeaderSection    from 'src/components/homePage/components/HeaderSection'
import ServiceSection   from 'src/components/homePage/components/ServiceSection'
import ChooseUsSection  from 'src/components/homePage/components/WhyChooseUs'
import HowItWorks       from 'src/components/homePage/components/HowItWorks'
import NewsLetter       from 'src/components/homePage/components/NewsLetterSection'

import { IHomePage }    from './interfaces'


const HomePage = (props: IHomePage) => {

    //-----------------------------------------------------------------------
    props.onLogOutClickHandler()

    //-----------------------------------------------------------------------
    return (
        <div>     
            <HeaderSection></HeaderSection>
            <ContactUsSection></ContactUsSection>
            <ServiceSection></ServiceSection>
            <ChooseUsSection></ChooseUsSection>
            <HowItWorks></HowItWorks>
            <NewsLetter></NewsLetter>          
        </div>
    )
}
export default HomePage