import { Link } from "react-router-dom"

//import 'src/components/common/css/Footer.css'

import classes from 'src/components/common/css/Footer.module.css'

import Dimond from 'src/images/logo2.webp'

import { IFooter } from "../interfaces"

const Footer = (props: IFooter) => {
   
    //-------------------------------------------------------------------
    const scrollToElementClickHandler = (event : React.MouseEvent<HTMLElement>) => {
        let el = event.currentTarget.dataset.element!;
        props.onScrollToElementClickHandler(el)
    }


    //-------------------------------------------------------------------
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContainer}>
                <div className={classes.footerAbout}>
                    <div className={classes.footerLogo}>
                        <img className={classes.logoImg} src={Dimond}></img>
                        <span>Diamond Clean</span>
                    </div>
                    <p className={classes.footerAboutText}>We are a professional cleaning company offering all types of cleaning services</p>
                </div>
                <div 
                    className={classes.verticalLine}>
                </div> 
                <ul className={classes.footerList}>
                    <li className={`${classes.list } ${classes.listTitle}`}>Main menu</li>
                    <Link to={"/"} style={{textDecoration: 'none'}}><li className={classes.list} data-element='header-section-wrapper' onClick={scrollToElementClickHandler}>Home</li></Link> 
                    <Link to={"/"} style={{textDecoration: 'none'}}><li className={classes.list} data-element='contact-section-wrapper' onClick={scrollToElementClickHandler}>Contact</li></Link> 
                    <Link to={"/"} style={{textDecoration: 'none'}}><li className={classes.list} data-element='offered-services-section-wrapper' onClick={scrollToElementClickHandler}>Services</li></Link> 
                    <Link to={"/"} style={{textDecoration: 'none'}}><li className={classes.list} data-element='choose-us-section-wrapper' onClick={scrollToElementClickHandler}>Why choose us</li></Link> 
                    <Link to={"/"} style={{textDecoration: 'none'}}><li className={classes.list} data-element='how-section-wrapper' onClick={scrollToElementClickHandler}>How it works</li></Link> 

                </ul>
                <ul className={classes.footerList}>
                    <li className={`${classes.list } ${classes.listTitle}`}>Address locations </li>
                    <li className={classes.list}>Skarpnäck</li>
                    <li className={classes.list}>Sätra</li>
                    <li className={classes.list}>Årsta</li>
                    <li className={classes.list}>Kista</li>
                </ul>
                <ul className={classes.footerList}>
                    <li className={`${classes.list } ${classes.listTitle}`}>Follow us</li>
                    <li className={classes.list}>Facebook</li>
                    <li className={classes.list}>Linkedin</li>
                    <li className={classes.list}>Instagramm</li>
                    <li className={classes.list}>Twitter</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
