import './CustomerAccount.css'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Booking, { Level } from '../../models/Booking';
import LogInMenu from '../logInPage/LogInMenu';
import LogInFooter from '../logInPage/LogInFooter';
import PlannedBookings from './PlannedBookings';
import PerformedBookings from './PerformedBookings';



const CustomerAccount = () => {

    const location = useLocation();
    const data = location.state;
    console.log('data in customer account')
    console.log(data)

    const [bookings, setBookings] = useState<Booking[]>([]);

    const fetchData = () => {
        try {
            fetch('http://localhost:5001/bookings')
                .then(res => res.json())
                .then((data) => {
                    console.log(data);
                    setBookings(data);
                    console.log(bookings);
                })
        }
        catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    const planned = bookings.filter((booking) => booking.status === false);
    const performed = bookings.filter((booking) => booking.status === true);
    console.log('Planned');
    console.log(planned);
    console.log('performed');
    console.log(performed);

    const plannedCleanings = bookings.filter(booking => (booking.customerName === data && booking.status === false)).map((booking) => (
        <PlannedBookings
            key={booking._id}
            customerName={booking.customerName}
            cleanerName={booking.cleanerName}
            level={booking.level}
            time={booking.time}
            date={booking.date.toString()}></PlannedBookings>
    ))

    const performedCleanings = bookings.filter(booking => (booking.customerName === data && booking.status === true)).map((booking) => (
        <PerformedBookings
            key={booking._id}
            customerName={booking.customerName}
            cleanerName={booking.cleanerName}
            level={booking.level}
            time={booking.time}
            date={booking.date.toString()}></PerformedBookings>
    ))



    return (<>
        <LogInMenu></LogInMenu>
        <div className="customer-account-wrapper">
            <div className="customer-account-content">
                <div className='customer-background-image'></div>
                <div className='customer-account-title'>
                    <h1>Hello, {data}!!!</h1>
                    <h2>Your bookings:</h2>
                </div>

                <div className='customer-list-of-bookings'>

                    <div className='customer-planned-bookings'>
                        <h2>Planned cleanings:</h2>
                        <table className='customer-table'>
                            <tbody>
                                {plannedCleanings}
                            </tbody>
                        </table>
                    </div>

                    <div className='customer-performed-bookings'>
                        <h2>Performed cleanings:</h2>
                        <table className='customer-table'>
                            <tbody>
                                {performedCleanings}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>
        <LogInFooter></LogInFooter>

    </>)
}

export default CustomerAccount