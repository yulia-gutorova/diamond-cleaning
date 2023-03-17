import 'src/components/homePage/css/HomePage.css'

import ContactUsSection from './components/ContactUsSection'
import HeaderSection    from './components/HeaderSection'
import ServiceSection   from './components/ServiceSection'
import ChooseUsSection  from './components/WhyChooseUs'
import HowItWorks       from './components/HowItWorks'
import NewsLetter       from './components/NewsLetterSection'


interface IHomePage {
    onLogOutClickHandler:  () => void;
}


const HomePage = (props: IHomePage) => {

    const  onScrollToElementClickHandler =(el : string) =>{
        let element = document.querySelector('.' + el);
        console.log(element);
        if (element) {
            element.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
          }
    }
    props.onLogOutClickHandler()

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