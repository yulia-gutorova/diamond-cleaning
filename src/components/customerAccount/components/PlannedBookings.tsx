import 'src/components/customerAccount/css/PlannedBookings.css'
import { IPlannedBookings } from 'src/components/customerAccount/interfaces';

const PlannedBookings = (props: IPlannedBookings) => {

    //-----------------------------------------------------------------------
    const onDeleteHandler = (event : React.MouseEvent) => {
        props.onDeleteTaskHandler(props.id);
    }

    //-----------------------------------------------------------------------
    return(
        <>
        <tr>
            <td><li>{props.date.slice(0, 10)}</li></td> 
            <td><li>{props.time}</li></td> 
            <td><li>{props.cleanerName}</li></td>  
            <td><li>{props.level}</li></td> 
                           
            <td>
                <button 
                className="planned-bookings-button"
                onClick={onDeleteHandler}><i>Delete</i></button>
            </td>
        </tr>
    </>
    )
}

export default PlannedBookings