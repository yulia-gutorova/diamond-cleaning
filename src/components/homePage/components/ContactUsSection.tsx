import classes from 'src/components/homePage/css/ContactUsSection.module.css'

const ContactUsSection = () => {
    
    return (
        <div id='contactSectionWrapper' className={classes.contactSectionWrapper}>
            <div className={classes.contactCard}>
                 <i className="fa-solid fa-phone-volume fa-xl"></i> 
                <p className={classes.contactTitle}>Call us now!</p>
                <div className={classes.contactContent}>
                    <p className={classes.contactText}>8-8000-123-00-00</p>
                </div>
            </div>

            <div 
                className={classes.verticalLine1}>
            </div> 

            <div className={classes.contactCard}>
                <i className="fa-solid fa-clock fa-xl"></i>
                <p className={classes.contactTitle}>We are open every day</p>
                <div className={classes.contactContent}>
                    <p className={classes.contactText}>8:00 - 21:00</p>
                </div>
            </div>

            <div 
                className={classes.verticalLine2}>
            </div> 

            <div className={classes.contactCard}>
                <i className="fa-solid fa-location-dot fa-xl"></i>
                    <p className={classes.contactTitle}>Our main office</p>
                <div className={classes.contactContent}>
                    <p className={classes.contactText}>Drottningsgatan 1, Stockholm</p>
                </div>
            </div>
        </div>
    )
}
export default ContactUsSection