
import React from "react";
import '../index.css';
import InputField from './InputField';



const Form = (props) => {
    return <div className="container">

            <form onSubmit={props.onSubmitHandeler}>

                <InputField 
                    name="name"
                    type="text"
                    label="name"
                    placeholder="Enter your name"
                    value={props.name}
                    onChange={props.onChangeHandeler}
                />

                <InputField
                    name="email" 
                    type="email"
                    label="email"
                    value={props.email}
                    placeholder="Enter your email"
                    onChange={props.onChangeHandeler}
                />

                <InputField 
                    name="password"
                    type="password"
                    label="password"
                    value={props.password}
                    placeholder="******"
                    onChange={props.onChangeHandeler}
                />
                <div className="checkboox">
                <input
                    className="checkButton"
                    type="checkbox"
                    name="checkbox"
                    onChange={props.onChangeHandeleragreemant}
                /><h6>Accept all the terms and condtion</h6>
                </div>
                
                <button 
                className="btn btn-primary mb-2" 
                type="submit" 
                disabled={!props.agreements}
                >
                Submit
                </button>
                
            </form>
        </div>    
}




export default Form;