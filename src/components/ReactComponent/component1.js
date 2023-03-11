import React, { Component } from 'react'
import ComponentName from './component2';

export default class Component1 extends Component {
    constructor(props)
    {
        super(props);
        console.log("main constructor called");

        this.state={name:["hari","harishma","bruhh"]};   
        
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log("main derived state called")
        return state;
    }       

    

  render() {

  
    console.log("main render called")
    return (
     <>
       <ComponentName
          Title={this.state.name[0]} 
          />    
            <ComponentName
          Title={this.state.name[1]}/>
            <ComponentName
          Title={this.state.name[2]}/>
     </>
    )
  }
  componentDidMount()
  {
    console.log("main componenMount  called")
  }
}

