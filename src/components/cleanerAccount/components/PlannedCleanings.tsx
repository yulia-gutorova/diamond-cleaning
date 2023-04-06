
import classes from 'src/components/cleanerAccount/css/OneCleaning.module.css'

import { IPlannedCleanings } from 'src/components/cleanerAccount/interfaces';


const PlannedCleanings = (props: IPlannedCleanings) => {

    //-----------------------------------------------------------------------
    const onPerformedHandler = (event : React.MouseEvent) => {
        props.onPerformedTaskHandler(props.id);
    }

    //-----------------------------------------------------------------------
    return(
        <>
        <tr className={classes.tableRow}>
            <td><li>{props.date.slice(0, 10)}</li></td> 
            <td><li>{props.time}</li></td> 
            <td><li>{props.customerName}</li></td>  
            <td><li>{props.level}</li></td> 
                           
            <td>
                <button 
                className={classes.plannedBookingsButton}
                onClick={onPerformedHandler}><i>Done</i></button>
            </td>
        </tr>
    </>
    )
}

export default PlannedCleanings