import classes from'src/components/customerAccount/css/PlannedBooking.module.css'
import { IPlannedBookings } from 'src/components/customerAccount/interfaces';

const PlannedBookings = (props: IPlannedBookings) => {

    //-----------------------------------------------------------------------
    const onDeleteHandler = (event : React.MouseEvent) => {
        props.onDeleteTaskHandler(props.id);
    }

    //-----------------------------------------------------------------------
    return(
        <>
        <tr className={classes.tableRow}>
            <td><li>{props.date.slice(0, 10)}</li></td> 
            <td><li>{props.time}</li></td> 
            <td><li>{props.cleanerName}</li></td>  
            <td><li>{props.level}</li></td> 
                           
            <td>
                <button 
                className={classes.plannedBookingsButton}
                onClick={onDeleteHandler}><i>Delete</i></button>
            </td>
        </tr>
    </>
    )
}

export default PlannedBookings