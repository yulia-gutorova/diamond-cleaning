import classes from 'src/components/common/css/NavigationMenu.module.css'

import { Link } from 'react-router-dom';

import Dimond from 'src/images/logo2.webp'

import { INavigationMenu } from 'src/components/common/interfaces';


const NavigationMenu = (props : INavigationMenu) => {

    //-------------------------------------------------------------------
    const scrollToElementClickHandler = (event : React.MouseEvent<HTMLElement>) => {
        let el = event.currentTarget.dataset.element!;
        props.onScrollToElementClickHandler(el)
    }

    //-------------------------------------------------------------------
    const onScrollToTopHandler = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
            });
    }

    //-------------------------------------------------------------------
        return (
            <div className={classes.navigationMenuWrapper}>
                <header className={classes.navigation}>
                    <div className={classes.menu}>
                        <div className={classes.menuLogo}>
                            <img className={classes.logoImg} src={Dimond}></img>
                            <span>Diamond Clean</span>
                        </div>
                            <div className={classes.menuCenter}>
                        <Link to={"/"}><button className={classes.menubtn} data-element='header-section-wrapper' onClick={scrollToElementClickHandler}>Home</button></Link>            
                        <Link to={"/"}><button className={classes.menubtn}  data-element='contact-section-wrapper' onClick={scrollToElementClickHandler}>Contact</button></Link> 
                        <Link to={"/"}><button className={classes.menubtn}  data-element='offered-services-section-wrapper' onClick={scrollToElementClickHandler}>Services</button></Link>
                        <Link to= {"/"}><button className={classes.menubtn}  data-element='choose-us-section-wrapper' onClick={scrollToElementClickHandler}>Why choose us</button></Link>
                        <Link to= {"/"}><button className={classes.menubtn}  data-element='how-section-wrapper' onClick={scrollToElementClickHandler}>How it works</button></Link>
                    </div>
                    
                    <div className={classes.menuRight}>
                        <Link to= {props.load} onClick={onScrollToTopHandler}><button className={`${classes.menubtn} ${classes.loginbtn}`}>{props.loginText + '!'}</button></Link>
                    </div>
                    </div>
                </header>
            </div>
        )
    }

export default NavigationMenu