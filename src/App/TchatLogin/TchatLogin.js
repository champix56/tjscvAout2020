import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
export default class TchatLogin extends Component {
  constructor(props){
    super(props);
    this.state={id:'',name:''}
  }
  render() {
    return (
      <div style={{border:'1px solid black',borderRadius:'7px',position:"absolute",top:'10vh',left:'30vw',right:'30vw',padding:'20px'}}>
       <h1>Connectez vous</h1>
        id:<input type="text" value={this.state.id} onChange={e=>this.setState({id:e.currentTarget.value})}/><br/>
        name:<input type="text" value={this.state.name}  onChange={e=>this.setState({name:e.currentTarget.value})}/>
        <br/>{this.props.children}
      </div>
    );
  }
}
