export const fetchData = async () => {
    try {
        const resp = await fetch('http://localhost:5001/bookings')
        const data = await resp.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}


export const updateData = async (id: string) => {

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
    //setUpdate('updateData');
}