import classes from 'src/components/homePage/css/NewsLetterSection.module.css'


const NewsLetter = () => {
    
    //-----------------------------------------------------------------------
    return(
        <div id='newsletterSectionWrapper' className={classes.newsletterSectionWrapper}>
            <h1>NewsLetter</h1>
            <p>You will be notified when somthing new will be appear.</p>
            <form >
                <input type="email" placeholder="E-postadress"/>
                <button><i className="fa-solid fa-envelope-circle-check"></i></button>
            </form>
        </div>
    )
}

export default NewsLetter