import classes from 'src/components/customerAccount/css/PerformedBooking.module.css'
import { IPerformedBookings } from 'src/components/customerAccount/interfaces';


const PerformedBookings = (props: IPerformedBookings) => {

    //-----------------------------------------------------------------------
    const onDeleteHandler = (event : React.MouseEvent) => {
        props.onDeleteTaskHandler(props.id);
    }

    //-----------------------------------------------------------------------
    const onCheckboxHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        props.onCheckboxHandler(props.id)
    }

    //-----------------------------------------------------------------------
    return(
        <>
        <tr className='tableRow'>
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
                className={classes.performBookingsButton}
                onClick={onDeleteHandler}><i>Delete</i></button>
            </td>
        </tr>
    </>
    )
}


export default PerformedBookings