import { useState } from 'react'
import classes from 'src/components/homePage/css/WhyChooseUs.module.css'

import { IWhyChooseUsCard }    from 'src/components/homePage/interfaces'

const WhyChooseUsCard = (props : IWhyChooseUsCard) => {

    const [display, setDisplay] = useState(true);


return (
    <div className={classes.chooseUsCard}
         onMouseEnter={() => setDisplay(false)}
         onMouseLeave={() => setDisplay(true)}>
    <i className={props.icon}></i>
    <div className={classes.chooseUsContent}>
       {display && <p className={classes.chooseUsTitle}>{props.title}</p>}
   </div>
   <div className={classes.chooseUsText}>
       <p className={classes.chooseUsP}>{props.text}</p>
   </div>
</div>
)
}

export default WhyChooseUsCard