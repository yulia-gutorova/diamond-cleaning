export const fetchData = async() => {
    try {
        const resp = await fetch('http://localhost:5001/bookings')
        const data = await resp.json();     
        return data; 
    }
    catch (error) {
        console.log(error);
    }
}



export const addData = async (data: string, formData : any) => {

    /*         console.log('inside addData in customer account');
            console.log('FormData in add Data in customer account');
            console.log(formData); */
                 
            let newBooking = {
                customerName : data,
                cleanerName : formData.cleanerName,
                level : formData.level,
                date : formData.date,
                time : formData.time,
                status: false
            } 
    
    /*         console.log('inside await create data in customer account');
            console.log('New booking');
            console.log(newBooking); */
    
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
    
            //fetchData();
            //setUpdate('addData')
        }


export const deleteData = async(id: string) => {
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
    //fetchData();   
}

export const deleteAllData = async(checkedBookings : string[]) => {
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
    //fetchData();
    //setUpdate('deleteAllData')
}