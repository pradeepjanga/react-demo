import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './footer';
import Header from './header';
import MyTable from './mytable';


class CustomErrorBoundary extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error){
        this.setState({hasError:true});
    }


}

class ShoppingCart extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            quantity: '',
            address:''
        }
    }

    orderChanged=value=>{
        this.setState({quantity: value})
    }

    addressChanged=value=>{
        this.setState({address: value})
    }
    
    render(){    
        return (
           <div>
            <h1>Shopping Details</h1>
            <Product quantity = {this.state.quantity} onQuantityChange = {this.orderChanged}></Product>
            <Address address = {this.state.address} onAddressChange = {this.addressChanged}></Address>
            <Summary quantity = {this.state.quantity} address = {this.state.address} onQuantityChange = {this.orderChanged}></Summary>
           </div>
        )
    };
}

class Product extends React.Component {

    constructor(props){
        super(props);
    }

    handleChange=(e)=>{
        this.props.onQuantityChange(e.target.value)
    }
    
    render(){    
        return (
            <div style = {{border: '3px solid red'}}>
            <h1>Product Information...</h1>
            <p>
            <label> Enter Quantity: <input type = "text" value = {this.props.quantity} onChange = {this.handleChange}></input></label>
           </p>
           </div>
        )
    };
}

class Address extends React.Component {

    constructor(props){
        super(props);
    }

    handleChange=e=>{
        this.props.onAddressChange (e.target.value)
    }
    
    render(){   
        throw new Error('Test Sample Error');
        return (
            <div style = {{border: '3px solid red'}}>
            <h1>Address Details</h1>
            <p>
            <label>Enter Address:  <textarea value = {this.props.address} onChange = {this.handleChange}></textarea></label>          
            </p>
           </div>
        )
    };
}

class Summary extends React.Component {

    constructor(props){
        super(props);
    }

    handleChange=(e)=>{
        this.props.onQuantityChange(e.target.value)
    }
    
    render(){    
        return (
            <div style = {{border: '3px solid red'}}>
            <h1>Summary Information...</h1>
            <p>
            <label> Enter Quantity: <input type = "text" value = {this.props.quantity} onChange = {this.handleChange}></input></label>
            </p>
            <p>
            <label>
                Enter Address:  <textarea value = {this.props.address}></textarea>
            </label>
           </p>
           </div>
        )
    };

}


const Employee = ()=>{
    const [age, setAge] = useState(11);
    return (
        <h1>Employee Function Component, {age}</h1>
    );
}



ReactDOM.render(
    <Employee/>,
    document.getElementById('root')
  );