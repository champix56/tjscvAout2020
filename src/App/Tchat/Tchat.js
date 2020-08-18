import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Tchat.module.scss';
import TchatReader from '../TchatReader/TchatReader';
import TchatUsers from '../TchatUsers/TchatUsers';
import {getMessages} from '../../rest/rest';
import TchatSender from '../TchatSender/TchatSender';
class Tchat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [], users: [{ id: 1, name: 'alex' }, { id: 2, name: 'Nadjem' }, { id: 3, name: 'clement' }, { id: 4, name: 'oumayma' }, { id: 5, name: 'Noureddine' }
      ]
    };

  }
  componentDidMount() {
    getMessages(e=>{
        this.setState({messages:e});
    })
  }
  render() {
    return (
      <div className={styles.Tchat}>{JSON.stringify(this.state)}
        <div className={styles.username}>{this.props.user.id}:{this.props.user.name}</div>
        <TchatReader messages={this.state.messages} whoiamID={this.props.user.id} />
        <TchatUsers users={this.state.users}></TchatUsers>
        <TchatSender whoiamID={this.props.user.id}/>
      </div>
    );
  }
}

Tchat.propTypes = { user: PropTypes.object.isRequired }
Tchat.defautProps = { user: { id: 1, nom: 'Anonymous' } }

export default Tchat;
