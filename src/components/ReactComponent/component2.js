import React, { Component } from 'react';

export default class ComponentName extends Component {
    constructor(props)
    {
        super(props);
        console.log("[derived] constructor called")
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("[derived] component update called");
        return true;
    }
  render() {
    console.log("[derived] render called");
    return (
      <div> 
        <div>
            <h3>{this.props.Title}</h3>
            <h6>{this.props.description}</h6>
            <p>{this.props.children}</p>
        </div>
        
         </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps,prevState)
  {
    console.log("[derived] snapshot called");
    return null;
  }

  componentDidUpdate(prevProps,prevState,snapshot)
  {
      console.log(snapshot);
      console.log("[derived] component update called")
  }
  componentDidMount()
  {
    console.log("[Derived] componenMound called");
  }
}

