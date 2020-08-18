import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import styles from './TchatSender.module.scss';
import Mybutton from '../Mybutton2/Mybutton2';
import {postMessages} from '../../rest/rest';
export default class TchatSender extends Component {
  
  constructor(props){
    super(props);
    this.state={message:'degemer mat',color:'#FFAEBE'}
    //this.vm=this;
  }
  submitform=()=>{
    postMessages({...this.state,userId:this.props.whoiamID, date:new Date().toISOString()},e=>{this.setState({...this.state,message:''})})
  }
  render() {
    return (
      <div className={styles.TchatSender}>
        <form name="sender" onSubmit={this.submitform}>
          <input type="text" value={this.state.message} onChange={e=>{this.setState({message:e.currentTarget.value})}}/>
          <input type="color" value={this.state.color}  onChange={e=>{this.setState({color:e.currentTarget.value})}}/>
          <Mybutton color="tomato" buttononclick={this.submitform}>Envoyer</Mybutton>
        </form>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}
TchatSender.propType={whoiamID:PropTypes.number.isRequired}