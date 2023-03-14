import './CustomerAccount.css'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Booking from '../../models/Booking';
import LogInMenu from '../logInPage/LogInMenu';
import LogInFooter from '../logInPage/LogInFooter';
import PlannedBookings from './PlannedBookings';
import PerformedBookings from './PerformedBookings';
import NewBooking from './NewBooking';
import { FormData } from './NewBooking';



const CustomerAccount = () => {

    const location = useLocation();
    const data : string= location.state;
    console.log('data in customer account')
    console.log(data)

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [checkedBookings, setCheckedBookings] = useState<string[]>([]);

    const fetchData = async() => {
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


    const addData = async (formData : FormData ) => {

        console.log('inside addData in customer account');
        console.log('FormData in add Data in customer account');
        console.log(formData);
             
        let newBooking= {
            customerName : data,
            cleanerName : formData.cleanerName,
            level : formData.level,
            date : formData.date,
            time : formData.time,
            status: false
        } 

        console.log('inside await create data in customer account');
        console.log('New booking');
        console.log(newBooking);

         try
        {
            const res = await fetch('http://localhost:5001/bookings', 
            {
                method: 'POST',
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

        fetchData();
    }



    const deleteData = async(id: string) => {
        console.log('inside deleteData in customer account');

        try {
            const resp = await fetch('http://localhost:5001/bookings' + '/' +id,
            {
                method: 'DELETE', 
            })
        }
        catch (error) {
            console.log(error);
        }
        fetchData();
    }


    const deleteAllData = async(checkedBookings : string[]) => {
        console.log('inside deleteAllData in customer account');

        for(let id of checkedBookings){

            try {
                const resp = await fetch('http://localhost:5001/bookings' + '/' +id,
                {
                    method: 'DELETE', 
                })
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, []);


    const onDeleteTaskHandler = (id : string) => {
        console.log('inside onDeleteTaskHandler in customer account');
        console.log(id);
        deleteData(id);
    }

    const onCheckboxHandler = (id : string) => {
        console.log('inside onCheskboxHandler in customer account');
        console.log(id);
        setCheckedBookings
        (
          (checkedBookings) => {return [...checkedBookings, id]}       
        );
        
    }

    const onDeleteCheckedBookings = () => {
        console.log('inside onDeleteCheckedBookings in customer account');
        console.log('checkedBookings in onDeleteCheckedBookings');
        console.log(checkedBookings);
        deleteAllData(checkedBookings);
    }


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


    console.log('checkedBookings2');
    console.log(checkedBookings);

    return (<>

        <div className="customer-account-wrapper">
            <div className="customer-account-content">
                <div className='customer-background-image'></div>
                <div className='customer-account-title'>
                    <h1>Hello, {data}!!!</h1>
                    <h2>Your bookings:</h2>
                </div>

                <div className='customer-list-of-bookings'>

                    <div className='customer-create-bookings'>
                        <h2>Create a new booking:</h2>
                        <NewBooking
                        addData={addData}></NewBooking>
                    </div>

                    <div className='customer-planned-bookings'>
                         <h2>Planned bookings:</h2>
                        {plannedBookings.length === 0 && <h3>You don't have any planned bookings</h3>}
                        <table className='customer-table'>
                            <tbody>
                                {plannedBookings}
                            </tbody>
                        </table>
                    </div>

                    <div className='customer-performed-bookings'>
                        <h2>Performed bookings:</h2>
                        {performedBookings.length === 0 && <h3>You don't have any performed bookings</h3>}
                        <table className='customer-table'>
                            <tbody>
                                {performedBookings}
                            </tbody>
                        </table>
                        {performedBookings.length !== 0 &&<button 
                        className="customer-perform-bookings-button"
                        onClick={onDeleteCheckedBookings}><i>Delete All Selected cleanings</i></button>}
                    </div>

                </div>
            </div>

        </div>
        <LogInFooter></LogInFooter>

    </>)
}

export default CustomerAccount