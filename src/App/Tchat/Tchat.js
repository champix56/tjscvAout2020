import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Tchat.module.scss';
import TchatReader from '../TchatReader/TchatReader';
import TchatUsers from '../TchatUsers/TchatUsers';
import { getMessages, getMessagesFrom } from '../../rest/rest';
import TchatSender from '../TchatSender/TchatSender';
class Tchat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastMessageId: 0,
      messages: [], users: [{ id: 1, name: 'alex' }, { id: 2, name: 'Nadjem' }, { id: 3, name: 'clement' }, { id: 4, name: 'oumayma' }, { id: 5, name: 'Noureddine' }
      ]
    };

  }
  componentDidMount() {
    getMessages(e => {
      //const lastID = e[e.length - 1].id;
      let lastID=this.state.lastMessageId;
      e.forEach(arrElem=>{if(lastID<arrElem.id){lastID=arrElem.id}});
      this.setState({ messages: e, lastMessageId: lastID });
    });
    setInterval(monComponent=>{
        getMessagesFrom(monComponent.state.lastMessageId,messagesJson=>{
          let lastID=this.state.lastMessageId;
          messagesJson.forEach(arrElem=>{if(lastID<arrElem.id){lastID=arrElem.id}});
            monComponent.setState({messages:[...monComponent.state.messages,...messagesJson],lastMessageId:lastID});
          })
    },1000,this);
  }
  render() {
    return (
      <div className={styles.Tchat}>{JSON.stringify(this.state)}
        <div className={styles.username}>{this.props.user.id}:{this.props.user.name}</div>
        <TchatReader messages={this.state.messages} whoiamID={this.props.user.id} />
        <TchatUsers users={this.state.users}></TchatUsers>
        <TchatSender whoiamID={this.props.user.id} />
      </div>
    );
  }
}

Tchat.propTypes = { user: PropTypes.object.isRequired }
Tchat.defautProps = { user: { id: 1, nom: 'Anonymous' } }

export default Tchat;
