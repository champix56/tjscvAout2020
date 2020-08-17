import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Tchat.module.scss';
import TchatReader from '../TchatReader/TchatReader';
class Tchat extends Component {
  constructor(props){
    super(props);
    this.state={messages:[{id:1,message:'DEMAT Breizhouz',sender:1}],users:[]};

  }
  render() {
    return (
      <div className={styles.Tchat}>
        <div className={styles.username}>{this.props.user.id}:{this.props.user.name}</div>
        <TchatReader messages={this.state.messages} whoiamID={this.props.user.id}/>
      </div>
    );
  }
}

Tchat.propTypes={user:PropTypes.object.isRequired}
Tchat.defautProps={user:{id:-1,nom:'Anonymous'}}

export default Tchat;
