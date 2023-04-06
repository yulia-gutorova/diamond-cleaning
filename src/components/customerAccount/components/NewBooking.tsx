//import 'src/components/customerAccount/css/NewBooking.css'
import classes from 'src/components/customerAccount/css/NewBooking.module.css'
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
        const {name} = event.target;
        if (name === 'level')setIsChecked(event.target.value); 
        setFormData({...formData, [name]: event.target.value});
    }


    //-----------------------------------------------------------------------  
    return (
        <div className={classes.formWrapper}>
            <div className={classes.formContent}>

                <form action="" className={classes.form} onSubmit={submitHandler}>

                    <div className={classes.labels}>
                        <label className={classes.label} htmlFor="cleaner-name">Select cleaner:</label>

                        <div className={classes.inputTab}>

                            <select id="cleaner-name" 
                                    className={classes.cleanerName}
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


                    <div className={classes.labels}>
                        <label className={classes.label}>Select a type of cleaning:</label>

                        <div className={classes.inputTabRadio}>
                                <input  type="radio" 
                                        id="basic" 
                                        name="level" 
                                        value="Basic" 
                                        checked={isChecked === 'Basic'}
                                        onChange={changeHandler}/>
                                <label className={classes.labelRadio} htmlFor="basic">Basic</label>

                                <input  type="radio" 
                                        id="top" 
                                        name="level" 
                                        value="Top" 
                                        checked={isChecked === 'Top'}
                                        onChange={changeHandler}/>
                                <label className={classes.labelRadio} htmlFor="top">Top</label>

                                <input type="radio" 
                                        id="diamond" 
                                        name="level" 
                                        value="Diamond" 
                                        checked={isChecked === 'Diamond'}
                                        onChange={changeHandler}/>
                                <label className={classes.labelRadio} htmlFor="diamond">Diamond</label>

                                <input  type="radio" 
                                        id="windows" 
                                        name="level" 
                                        value="Windows" 
                                        checked={isChecked === 'Windows'}
                                        onChange={changeHandler}/>
                                <label className='label-radio' htmlFor="windows">Windows</label>

                        </div>
                    </div>


                    <div className={classes.labels}>
                        <label className={classes.label} htmlFor="date">Select date:</label>

                        <div className={classes.inputTab}>
                             <input  id="date" 
                                    type="date" 
                                    name="date" 
                                    className={classes.inputField} 
                                    value={formData.date}
                                    onChange={changeHandler}
                                    required /> 
                        </div>
                    </div>



                    <div className={classes.labels}>
                        <label className={classes.label} htmlFor="time">Select time:</label>

                        <div className={classes.inputTab}>
                            <select id="time" 
                                    className={classes.inputField}
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
                        <button type='submit' className={classes.formButton}>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )

}

export default NewBooking