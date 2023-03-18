export const fetchData =  async () :Promise<any> => {
    try
    {
        const resp = await fetch('http://localhost:5001/members')
        const data = await resp.json();
        return data;
              
    }    
    catch(error)
    {
        console.log(error);
    }   
  }