import { IOneCleaning } from 'src/components/cleanerAccount/interfaces'
import './OneCleaning.css'

const OneCleaning = (props: IOneCleaning) => {

    //-----------------------------------------------------------------------
    return(
        <>
        <tr>
            <td><li>{props.date.slice(0, 10)}</li></td> 
            <td><li>{props.time}</li></td> 
            <td><li>{props.customerName}</li></td>  
            <td><li>{props.level}</li></td>                         
        </tr>
    </>
    )
}

export default OneCleaning