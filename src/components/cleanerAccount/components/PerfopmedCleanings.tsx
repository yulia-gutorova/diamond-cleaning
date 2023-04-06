import classes from 'src/components/cleanerAccount/css/OneCleaning.module.css'

import { IPerformedCleanings } from 'src/components/cleanerAccount/interfaces'

const PerformedCleanings = (props: IPerformedCleanings) => {

    //-----------------------------------------------------------------------
    return(
        <>
        <tr className={classes.tableRow}>
            <td><li>{props.date.slice(0, 10)}</li></td> 
            <td><li>{props.time}</li></td> 
            <td><li>{props.customerName}</li></td>  
            <td><li>{props.level}</li></td>                           
        </tr>
    </>
    )
}

export default PerformedCleanings