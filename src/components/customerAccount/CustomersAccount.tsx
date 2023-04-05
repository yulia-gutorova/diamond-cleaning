//import 'src/components/customerAccount/css/CustomerAccount.css'
import classes from 'src/components/customerAccount/css/CustomerAccount.module.css'

import { useParams }           from "react-router-dom";
import { useEffect, useState } from 'react';

import Booking           from 'src/models/Booking';
import PlannedBookings   from 'src/components/customerAccount/components/PlannedBookings';
import PerformedBookings from 'src/components/customerAccount/components/PerformedBookings';
import NewBooking        from 'src/components/customerAccount/components/NewBooking';
import { addData, deleteAllData, deleteData, fetchData } from './api';


const CustomerAccount = () => {

    let {name} = useParams();
    let data = name!;

   //-----------------------------------------------------------------------
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [checkedBookings, setCheckedBookings] = useState<string[]>([]);
    const [dubble, setDubble] = useState(false);
    const [update, setUpdate] = useState('initial');

    //-------------------------------------------------------------------
    useEffect(() => {
    (
      async function() 
      {
      let res : Booking[] = await fetchData() as Booking[];
      setBookings(res);
      } 
    )() 
        setUpdate('initial');
    }, [update]);


    //-----------------------------------------------------------------------
    const onDeleteTaskHandler = async (id : string) => {

        let res : any = await deleteData(id);
        setUpdate('deleteData')
    }

    //-----------------------------------------------------------------------
    const onCheckboxHandler = (id : string) => {
        console.log('inside onCheskboxHandler in customer account');
        console.log(id);
        setCheckedBookings
        (
          (checkedBookings) => {return [...checkedBookings, id]}       
        );
        
    }

    //-----------------------------------------------------------------------
    const onDeleteCheckedBookings = async () => {

        let res : any = await deleteAllData(checkedBookings);
        setUpdate('deleteAllData')
    }

    //-----------------------------------------------------------------------
    const onAddNewBooking = (formData : any) => {

        const dubbleBookings = bookings.filter(booking => (booking.customerName === data && 
                                                           booking.cleanerName === formData.cleanerName &&
                                                           booking.date.toString().slice(0, 10) === formData.date &&
                                                           booking.time === formData.time &&
                                                           booking.level === formData.level &&
                                                           booking.status === false
                                                           ));
        let dubbel = dubbleBookings.length === 0;                                                 
        if (dubbel)
        {
            addData(data , formData); 
            setDubble(false)
        } 
        else
        {
            setDubble(true)
        } 
        setUpdate('addData');                                                 
    }

    //-----------------------------------------------------------------------
    const plannedBookings = bookings.filter(booking => (booking.customerName === data && booking.status === false)).map((booking) => (
        <PlannedBookings
            key={booking._id}
            id={booking._id}
            customerName={booking.customerName}
            cleanerName={booking.cleanerName}
            level={booking.level}
            time={booking.time}
            date={booking.date.toString()}
            onDeleteTaskHandler={() => onDeleteTaskHandler(booking._id)}></PlannedBookings>
    ))

    //-----------------------------------------------------------------------
    const performedBookings = bookings.filter(booking => (booking.customerName === data && booking.status === true)).map((booking) => (
        <PerformedBookings
            key={booking._id}
            id={booking._id}
            customerName={booking.customerName}
            cleanerName={booking.cleanerName}
            level={booking.level}
            time={booking.time}
            date={booking.date.toString()}
            onDeleteTaskHandler={() => onDeleteTaskHandler(booking._id)}
            onCheckboxHandler= {() => onCheckboxHandler(booking._id)}></PerformedBookings>
    ))

    //-----------------------------------------------------------------------
    return (
    <>
        <div className={classes.customerAccountWrapper}>
            <div className={classes.customerAccountContent}>
                <div className={classes.customerBackgroundImage}></div>
                <div className={classes.customerAccountTitle}>
                    <h1>Hello, {data}!!!</h1>
                    <h2>Your bookings:</h2>
                </div>

                <div className={classes.customerListOfBookings}>

                    <div className={classes.customerCreateBookings}>
                        <h2>Create a new booking:</h2>
                        {dubble && <h3>You already have the same booking</h3>}
                        <NewBooking
                        onAddNewBooking={onAddNewBooking}></NewBooking>
                    </div>

                    <div className={classes.customerPlannedBookings}>
                         <h2>Planned bookings:</h2>
                        {plannedBookings.length === 0 && <h3>You don't have any planned bookings</h3>}
                        <table className={classes.customerTable}>
                            <tbody>
                                {plannedBookings}
                            </tbody>
                        </table>
                    </div>

                        <div className={classes.customerPerformedBooking}>
                        <h2>Performed bookings:</h2>
                        {performedBookings.length === 0 && <h3>You don't have any performed bookings</h3>}
                        <table className={classes.customerTable}>
                            <tbody>
                                {performedBookings}
                            </tbody>
                        </table>
                        {performedBookings.length !== 0 &&<button 
                        className={classes.customerPerformBookingsButton}
                        onClick={onDeleteCheckedBookings}><i>Delete All Selected Bookings</i></button>}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default CustomerAccount