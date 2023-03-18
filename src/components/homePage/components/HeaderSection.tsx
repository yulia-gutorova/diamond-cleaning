import classes from 'src/components/homePage/css/HeaderSection.module.css'


const HeaderSection = () => {

    return (
        <div className={classes.headerSectionWrapper}>
            <div className={classes.headerSectionContentWrapper}>
                <div className={classes.headerSectionContent}>
                    <p className={classes.headerSectionWelcome}> WELCOME TO OUR WEBSITE </p>
                    <h1 className={classes.headerSectionTitle}>Stockholm's premier home cleaning service</h1>
                    <p className={classes.headerSectionText}>Hire us! Get your home cleaned. We are a professional cleaning company offering all types of cleaning services.</p>
                </div>
                <div className={classes.headerSectionButtonWrapper}>
                    <button className={classes.headerSectionButton}>More info</button>
                </div>
            </div>

        </div>
    )
}

export default HeaderSection