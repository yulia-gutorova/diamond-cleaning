
import 'src/components/cleanerAccount/css/OneCleaning.css'
import { IPlannedCleanings } from 'src/components/cleanerAccount/interfaces';


const PlannedCleanings = (props: IPlannedCleanings) => {

    //-----------------------------------------------------------------------
    const onPerformedHandler = (event : React.MouseEvent) => {
        props.onPerformedTaskHandler(props.id);
    }

    //-----------------------------------------------------------------------
    return(
        <>
        <tr>
            <td><li>{props.date.slice(0, 10)}</li></td> 
            <td><li>{props.time}</li></td> 
            <td><li>{props.customerName}</li></td>  
            <td><li>{props.level}</li></td> 
                           
            <td>
                <button 
                className="planned-bookings-button"
                onClick={onPerformedHandler}><i>Done</i></button>
            </td>
        </tr>
    </>
    )
}

export default PlannedCleanings