import 'src/components/customerAccount/css/NewBooking.css'

import { useState } from 'react';
import { INewBooking, FormData } from 'src/components/customerAccount/interfaces';

const NewBooking = (props: INewBooking) => {

    //-----------------------------------------------------------------------
    const [formData, setFormData] = useState<FormData>({
    cleanerName : '',
    level : '',
    date : '',
    time : ''
    });
    const [isChecked, setIsChecked] = useState('');
 

    //-----------------------------------------------------------------------
    const submitHandler = (event: React.FormEvent) => {
       event.preventDefault();
        
/*         console.log('in submitHandler');
        console.log('formdata in submitHandler')
        console.log(formData); */
        props.onAddNewBooking(formData); 
        setFormData({
            cleanerName : '',
            level : '',
            date : '',
            time : ''
            })
        setIsChecked('');    
    }

    //-----------------------------------------------------------------------
    const changeHandler = (event : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => { 
               
/*         console.log('in changeHandler'); */
        const {name} = event.target;

        if (name === 'level')setIsChecked(event.target.value); 

/*         console.log('name');
        console.log(name) */
        setFormData({...formData, [name]: event.target.value});
/*         console.log('formdata in changehandler')
        console.log(formData)  */
    }


    //-----------------------------------------------------------------------  
    return (
        <div className="form-wrapper">
            <div className="form-content">

                <form action="" className="form" onSubmit={submitHandler}>

                    <div className='labels'>
                        <label className='label' htmlFor="cleaner-name">Select cleaner:</label>

                        <div className='input-tab'>

                            <select id="cleaner-name" 
                                    name="cleanerName"
                                    value={formData.cleanerName}
                                    onChange={changeHandler}>
                                <option value="" disabled></option>
                                <option value="Cleaner-1">Cleaner-1</option>
                                <option value="Cleaner-2">Cleaner-2</option>
                                <option value="Cleaner-3">Cleaner-3</option>
                                <option value="Cleaner-4">Cleaner-4</option>
                            </select>
                        </div>
                    </div>


                    <div className='labels' >
                        <label className='label'>Select a type of cleaning:</label>

                        <div className='input-tab-radio' >
                                <input  type="radio" 
                                        id="basic" 
                                        name="level" 
                                        value="Basic" 
                                        checked={isChecked === 'Basic'}
                                        onChange={changeHandler}/>
                                <label className='label-radio' htmlFor="basic">Basic</label>

                                <input  type="radio" 
                                        id="top" 
                                        name="level" 
                                        value="Top" 
                                        checked={isChecked === 'Top'}
                                        onChange={changeHandler}/>
                                <label className='label-radio' htmlFor="top">Top</label>

                                <input type="radio" 
                                        id="diamond" 
                                        name="level" 
                                        value="Diamond" 
                                        checked={isChecked === 'Diamond'}
                                        onChange={changeHandler}/>
                                <label className='label-radio' htmlFor="diamond">Diamond</label>

                                <input  type="radio" 
                                        id="windows" 
                                        name="level" 
                                        value="Windows" 
                                        checked={isChecked === 'Windows'}
                                        onChange={changeHandler}/>
                                <label className='label-radio' htmlFor="windows">Windows</label>

                        </div>
                    </div>


                    <div className='labels'>
                        <label className='label' htmlFor="date">Select date:</label>

                        <div className='input-tab'>
                             <input  id="date" 
                                    type="date" 
                                    name="date" 
                                    className="input-field" 
                                    value={formData.date}
                                    onChange={changeHandler}
                                    required /> 
                        </div>
                    </div>



                    <div className='labels'>
                        <label className='label' htmlFor="time">Select time:</label>

                        <div className='input-tab'>
{/*                             <input  id="time" 
                                    type="time" 
                                    name="time"
                                    className="input-field" 
                                    pattern='[08-19].[00-59]'
                                    placeholder='--.--' 
                                    value={formData.time}
                                    onChange={changeHandler}
                                    required /> time*/}

                            <select id="time" 
                                    className="input-field"
                                    name="time"
                                    value={formData.time}
                                    onChange={changeHandler}>
                                <option value="" disabled></option>
                                <option value="08-00">08-00</option>
                                <option value="10-00">10-00</option>
                                <option value="12-00">12-00</option>
                                <option value="14-00">14-00</option>
                                <option value="16-00">16-00</option>
                                <option value="18-00">18-00</option>
                                <option value="20-00">20-00</option>
                            </select> 
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='form-button'>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )

}

export default NewBooking