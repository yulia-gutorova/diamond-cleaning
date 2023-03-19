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