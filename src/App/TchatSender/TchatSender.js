import React, { Component } from 'react';
import styles from './TchatSender.module.scss';
import Mybutton from '../Mybutton2/Mybutton2';
export default class TchatSender extends Component {
  constructor(props){
    super(props);
    this.state={message:'degemer mat ',color:'#FFAEBE'}
  }
  submitform(){

  }
  render() {
    return (
      <div className={styles.TchatSender}>
        <form name="sender" onSubmit={this.submitform}>
          <input type="text" value={this.state.message} onChange={e=>{this.setState({message:e.currentTarget.value})}}/>
          <input type="color" value={this.state.color}  onChange={e=>{this.setState({color:e.currentTarget.value})}}/>
          <Mybutton color="tomato" onclick={this.submitform}>Envoyer</Mybutton>
        </form>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}
