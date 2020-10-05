import React, { Component } from 'react'
import Navbar from './Navbar'
import GridList from './GridList'

class Container extends Component {
    
    /*Initialize the state */
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             product:[],
             total:0
        }
    }

    /* Method to count number of items added to cart */
    changeCount =(data)=>{
        console.log(this.state.product);
        this.setState({
            count:this.state.count+1,
            product:[...this.state.product,data],
            total:this.state.total + data.price
        })
    }
   
    
    render() {
        return (
            <div>
                {/* Navigation Bar Functional Component */}
                <Navbar counter={this.state.count} addProduct={this.state.product} totalPrice={this.state.total}/>
                {/* Product List functional Component */}
                <GridList changeCount={this.changeCount} /> 
            </div>
        )
    }
}

export default Container
