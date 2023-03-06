import './NewBooking.css'
import { useState } from 'react';

export interface FormData {
    cleanerName : string;
    level : string;
    date: string;
    time : string;
}

interface INewBooking{
    addData: (formData : FormData) => void
}

const NewBooking = (props: INewBooking) => {

    const [formData, setFormData] = useState<FormData>({
    cleanerName : '',
    level : '',
    date : '',
    time : ''
    })
 
    //const [customerName, setCustomerName] = useState('');

    const submitHandler = (event: React.FormEvent) => {
       event.preventDefault();
        console.log('in submitHandler');
        console.log('formdata in submitHandler')
        console.log(formData);
        props.addData(formData); 
    }

    const changeHandler = (event : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {         console.log('in changeHandler');
        const {name} = event.target;
        console.log('name');
        console.log(name)
        setFormData({...formData, [name]: event.target.value});
        console.log('formdata in changehandler')
        console.log(formData) 
    }

  
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
                            {/* <select name="" id="" value={formData.level}> */}
                                <input type="radio" id="basic" name="level" value="Basic" onChange={changeHandler}/>
                                <label className='label-radio' htmlFor="basic">Basic</label>

                                <input type="radio" id="top" name="level" value="Top" onChange={changeHandler}/>
                                <label className='label-radio' htmlFor="top">Top</label>

                                <input type="radio" id="diamond" name="level" value="Diamond" onChange={changeHandler}/>
                                <label className='label-radio' htmlFor="diamond">Diamond</label>

                                <input type="radio" id="windows" name="level" value="Windows" onChange={changeHandler}/>
                                <label className='label-radio' htmlFor="windows">Windows</label>
                            {/* </select> */}

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
                            <input  id="time" 
                                    type="text" 
                                    name="time"
                                    className="input-field" 
                                    // pattern="([0-24]=[0-59])" 
                                    placeholder='--.--' 
                                    value={formData.time}
                                    onChange={changeHandler}
                                    required />
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