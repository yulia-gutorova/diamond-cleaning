import 'src/components/customerAccount/css/PerformedBookings.css'
import { IPerformedBookings } from 'src/components/customerAccount/interfaces';


const PerformedBookings = (props: IPerformedBookings) => {

    //-----------------------------------------------------------------------
    const onDeleteHandler = (event : React.MouseEvent) => {
        props.onDeleteTaskHandler(props.id);
    }

    //-----------------------------------------------------------------------
    const onCheckboxHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        console.log('Insise on checkbox handler in performed bookings');
        props.onCheckboxHandler(props.id)
    }

    //-----------------------------------------------------------------------
    return(
        <>
        <tr>
            <td><li>
                 <input type='checkbox' 
                        onChange={onCheckboxHandler}
                        />
                </li></td> 
            <td><li>{props.date.slice(0, 10)}</li></td> 
            <td><li>{props.time}</li></td> 
            <td><li>{props.cleanerName}</li></td>  
            <td><li>{props.level}</li></td> 
                           
            <td>
                <button 
                className="perform-bookings-button"
                onClick={onDeleteHandler}><i>Delete</i></button>
            </td>
        </tr>
    </>
    )
}


export default PerformedBookings