
import React from "react";
import Form from "./form/Form";
import "./index.css";


const initValues = {
    
    name: '',
    email: '',
    password: '',
}

class App extends React.Component{


    state = {
        values: initValues,
        agreements: false,
    }

    onChangeHandeler = (event) => {
        this.setState({
            values : {
                ...this.state.values,
                [event.target.name] : event.target.value
            }
        })
    }
    onChangeHandeleragreemant = (event) => {
            this.setState({
                agreements: event.target.checked
            })
    }

    onSubmitHandeler = (event) => {
        event.preventDefault()
        console.log(this.state.values)   
        event.target.reset();

    }


    render(){
        return <div>
            <Form 
            values = {this.state.values}
            agreements={this.state.agreements}
            onChangeHandeler={this.onChangeHandeler}
            onChangeHandeleragreemant={this.onChangeHandeleragreemant}
            onSubmitHandeler={this.onSubmitHandeler}
    
            />
        </div>
    }
}


export default App;