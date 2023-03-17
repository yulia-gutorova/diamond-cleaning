import { useEffect, useState }    from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Booking from 'src/models/Booking';


import 'src/components/cleanerAccount/css/CleanerAccount.css'

import PerformedCleanings from 'src/components/cleanerAccount/components/PerfopmedCleanings';
import PlannedCleanings from 'src/components/cleanerAccount/components/PlannedCleanings';


const CLeanerAccount = () => {
/*     const location = useLocation();
    const data = location.state;
    console.log('data in customer account')
    console.log(data) */

    let {name} = useParams();
    let data = name;
    console.log('data in customer account')
    console.log(name);

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [update, setUpdate] = useState('initial');

    const fetchData = async () => {
        try {
            const resp = await fetch('http://localhost:5001/bookings')
            const data = await resp.json();
            setBookings(data);
            console.log('Bookings');
            console.log(bookings);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
        setUpdate('initial');
    }, []);

    console.log('Bookings1');
    console.log(bookings);

    const onPerformedTaskHandler = (id: string) => {
        console.log('inside onPerformedTaskHandler in cleaner account');
        console.log('Id:');
        console.log(id);
        //deleteAllData(checkedBookings);
        setBookings(bookings.map(booking => (booking._id === id ? { ...booking, status: true } : booking)));
        console.log('Bookings done:');
        console.log(bookings);

        const updateData = async (id: string) => {

            console.log('inside updateData in cleaner account');
            console.log('Id');
            console.log(id);
                 
            let newBooking= {
                status: true
            } 
    
            console.log('inside await update data in cleaner account');
            console.log('New booking');
            console.log(newBooking);
    
             try
            {
                const res = await fetch('http://localhost:5001/bookings' + '/' + id, 
                {
                    method: 'PATCH',
                    body: JSON.stringify(newBooking),
                    headers: 
                    {
                        'Content-Type': 'application/json',
                    }
                })    
            }
            catch(error) 
            {
              console.log(error);     
            } 
            //fetchData();
            setUpdate('updateData');
        }

        updateData(id);
        
    }

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

    const performedCleanings = bookings.filter(booking => (booking.cleanerName === data && booking.status === true)).map((booking) => (
        <PerformedCleanings
            key={booking._id}
            id={booking._id}
            customerName={booking.customerName}
            cleanerName={booking.cleanerName}
            level={booking.level}
            time={booking.time}
            date={booking.date.toString()}
        ></PerformedCleanings>
    ))

    console.log('Planned cleanings:');
    console.log(plannedCleanings);
    console.log('Performed cleanings:');
    console.log(performedCleanings);

    return (<>
        <div className="cleaner-account-wrapper">
            <div className="cleaner-account-content">
                <div className="cleaner-background-image"></div>
                <div className='cleaner-account-title'>
                    <h1>Hello, {data}!!!</h1>
                    <h2>Your cleanings:</h2>
                </div>

                <div className='cleaner-planned-cleanings'>
                    <h2>Planned cleanings:</h2>
                    {plannedCleanings.length === 0 && <h3>You don't have any planned cleanings</h3>}
                    <table className='cleaner-table'>
                        <tbody>
                            {plannedCleanings}
                        </tbody>
                    </table>
                </div>
            

            <div className='cleaner-performed-cleanings'>
                <h2>Performed cleanings:</h2>
                {performedCleanings.length === 0 && <h3>You don't have any performed cleanings</h3>}
                <table className='cleaner-table'>
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