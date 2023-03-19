//-----------------------------------------------------------------
export const fetchData = async() => {
    const baseURL :string  = process.env.REACT_APP_BASE_URL as string;
    try {
        const resp = await fetch(`${baseURL}bookings`)
        const data = await resp.json();     
        return data; 
    }
    catch (error) {
        console.log(error);
    }
}


//-----------------------------------------------------------------
export const addData = async (data: string, formData : any) => {
                 
    let newBooking = {
        customerName : data,
        cleanerName : formData.cleanerName,
        level : formData.level,
        date : formData.date,
        time : formData.time,
        status: false
    } 

    const baseURL :string  = process.env.REACT_APP_BASE_URL as string;

        try
    {
        const res = await fetch(`${baseURL}bookings`, 
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
}

//-----------------------------------------------------------------
export const deleteData = async(id: string) => {

    const baseURL :string  = process.env.REACT_APP_BASE_URL as string;

    try {
        const resp = await fetch(`${baseURL}bookings/${id}`,
        {
            method: 'DELETE', 
        })
    }
    catch (error) {
        console.log(error);
    }  
}

//-----------------------------------------------------------------
export const deleteAllData = async(checkedBookings : string[]) => {

    const baseURL :string  = process.env.REACT_APP_BASE_URL as string;

    for(let id of checkedBookings){

        try {
            const resp = await fetch(`${baseURL}bookings/${id}`,
            {
                method: 'DELETE', 
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}