export const fetchData =  async () :Promise<any> => {

    const baseURL :string  = process.env.REACT_APP_BASE_URL as string; 

    try
    {
        const resp = await fetch(`${baseURL}members`)
        const data = await resp.json();
        return data;
              
    }    
    catch(error)
    {
        console.log(error);
    }   
  }


//---------------------------------------------------------------------------------
export const addData = async (name: string) => 
{
             
  let newCustomer = {
      name: name,
      isCustomer: true    
  } 
      try
  {
      const res = await fetch('https://stadafint-server-production.up.railway.app/user/register', 
      {
          method: 'POST',
          body: JSON.stringify(newCustomer),
          headers: 
          {
              'Content-Type': 'application/json',
          }
      })  
      return res;  
  }
  catch(error) 
  {
      console.log(error);     
  } 
}
