import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Tchat.module.scss';
import TchatReader from '../TchatReader/TchatReader';
import TchatUsers from '../TchatUsers/TchatUsers';
class Tchat extends Component {
  constructor(props){
    super(props);
    this.state={
      messages:[
        {id:1,message:'DEMAT Breizhouz',sender:1},
        {id:1,message:'DEMAT Breizhouz',sender:2}
      ],users:[
        {id:1,name:'alex'},{id:2,name:'Nadjem'},{id:3,name:'clement'},{id:4,name:'oumayma'},{id:5,name:'Noureddine'}
      ]};

  }
  render() {
    return (
      <div className={styles.Tchat}>
        <div className={styles.username}>{this.props.user.id}:{this.props.user.name}</div>
        <TchatReader messages={this.state.messages} whoiamID={this.props.user.id}/>
        <TchatUsers users={this.state.users}></TchatUsers>
      </div>
    );
  }
}

Tchat.propTypes={user:PropTypes.object.isRequired}
Tchat.defautProps={user:{id:1,nom:'Anonymous'}}

export default Tchat;
