import classes from 'src/components/homePage/css/ServiceSection.module.css'

import BasicCleaning   from 'src/images/basic-cleaning.png'
import TopCleaning     from 'src/images/top-cleaning.png'
import DiamondCleaning from 'src/images/dimond-cleaning.png'
import WindowCleaning  from 'src/images/window-cleaning.png'

const ServiceSection = () => {
    
    const props = [
        {
            id: 1,
            title: "Basic Cleaning",
            text: 'Basic Cleaning is professional service on a budget.'
                + ' Like the name suggests, this service doesn’t include'
                + ' everything, just the things that are essential to maintaining'
                + ' a clean, comfortable home.',
            image: BasicCleaning
        },
        {
            id: 2,
            title: 'Top Cleaning',
            text: 'Our company delivers a Top Cleaning service that covers '
                + ' all the areas that are traditionally covered by Basic Cleaning'
                + ' and some additional areas, inside and outside. ',
            image: TopCleaning
        },
        {
            id: 3,
            title: 'Diamond Cleaning',
            text: 'Diamond Cleaning is a servise exclusively delivered by our company.'
                + ' Our Dimond option includes not only all of Top Cleaning, but'
                + ' also an expanded list of chores to be done every time.',
            image: DiamondCleaning
        },
        {
            id: 4,
            title: 'Window Cleaning',
            text: 'We deliver professional window cleaning at fixed prices and'
                + 'with a quality guarantee, so'
                + ' that you can spend your time and energy on things that are warmer'
                + ' around your heart.',
            image: WindowCleaning
        }
    ]

    return (
        <section className={classes.offeredServicesSectionWrapper}>
            <div className={classes.offeredServicesSection}>
                <div className={classes.offeredServicesSectionTitle}>
                    <h2>What we do</h2>
                    <h1>Offering high quality cleaning services <br /><strong>at affordable prices</strong></h1>
                </div>
                <hr className={classes.serviceHr}/>

                <div className={classes.offeredServicesSectionContent}>
                    {props.map((card) =>
                    (
                        <div key={card.id} className={classes.offeredServicesCard}>
                            <div className={classes.offeredServicesImage}>
                                <img className={classes.serviceImage} src={card.image} />
                            </div>
                            <div className={classes.offeredServicesText}>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                            <button className={classes.moreInfo}>More info</button>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )

}
export default ServiceSection