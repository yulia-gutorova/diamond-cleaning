import classes from 'src/components/cleanerAccount/css/CleanerAccount.module.css'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Booking from 'src/models/Booking';

import PerformedCleanings from 'src/components/cleanerAccount/components/PerfopmedCleanings';
import PlannedCleanings   from 'src/components/cleanerAccount/components/PlannedCleanings';

import { fetchData, updateData } from './api';
import { ICleanerPage } from './interfaces';


const CLeanerAccount = (props : ICleanerPage) => {

    let { name } = useParams();
    let data = name;
        
    //-----------------------------------------------------------------------
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [update, setUpdate] = useState('initial');

    //-----------------------------------------------------------------------
    useEffect(() => {
        (
            async function () {
                let res: Booking[] = await fetchData() as Booking[];
                setBookings(res);
            }
        )()
        setUpdate('initial');
    }, [update]);

    //-----------------------------------------------------------------------
    const onPerformedTaskHandler = (id: string) => {
        setBookings(bookings.map(booking => (booking._id === id ? { ...booking, status: true } : booking)));       
        updateData(id);
        setUpdate('updateData');
    }

    //-----------------------------------------------------------------------
    props.loginButtonTextHandler(true); 

    //-----------------------------------------------------------------------
    const plannedCleanings = bookings.filter(booking => (booking.cleanerName === data && booking.status === false)).map((booking) => (
        <PlannedCleanings
            key={booking._id}
            id={booking._id}
            customerName={booking.customerName}
            cleanerName={booking.cleanerName}
            level={booking.level}
            time={booking.time}
            date={booking.date.toString()}
            onPerformedTaskHandler={() => onPerformedTaskHandler(booking._id)}></PlannedCleanings>
    ))

    //-----------------------------------------------------------------------
    const performedCleanings = bookings.filter(booking => (booking.cleanerName === data && booking.status === true)).map((booking) => (
        <PerformedCleanings
            key={booking._id}
            id={booking._id}
            customerName={booking.customerName}
            cleanerName={booking.cleanerName}
            level={booking.level}
            time={booking.time}
            date={booking.date.toString()}></PerformedCleanings>
    ))


    //-----------------------------------------------------------------------
    return (<>
        <div className={classes.cleanerAccountWrapper}>
            <div className={classes.cleanerAccountContent}>
                <div className={classes.cleanerBackgroundImage}></div>
                <div className={classes.cleanerAccountTitle}>
                    <h1>Hello, {data}!!!</h1>
                    <h2>Your cleanings:</h2>
                </div>


                <div className={classes.cleanerPlannedCleanings}>
                    <h2>Planned cleanings:</h2>
                    {plannedCleanings.length === 0 && <h3>You don't have any planned cleanings</h3>}
                    <table className={classes.cleanerTable}>
                        <tbody>
                            {plannedCleanings}
                        </tbody>
                    </table>
                </div>


                <div className={classes.cleanerPerformedCleanings}>
                    <h2>Performed cleanings:</h2>
                    {performedCleanings.length === 0 && <h3>You don't have any performed cleanings</h3>}
                    <table className={classes.cleanerTable}>
                        <tbody>
                            {performedCleanings}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </>)
}

export default CLeanerAccount