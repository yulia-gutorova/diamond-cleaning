import './PerformedBookings.css'
interface IPerformedCleanings {
    id:string
    customerName: string
    cleanerName: string
    level: string
    time: string
    date: string
}


const PerformedCleanings = (props: IPerformedCleanings) => {


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

// checked={copmlete}

export default PerformedCleanings