import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatMessage.module.scss';

const TchatMessage = (props) => {
  return (
  <div style={{ textAlign: (props.isMine ? 'left' : 'right') }} data-testid="TchatMessage">
    <div className={styles.TchatMessage} style={{backgroundColor:(props.isMine ? 'tomato' : 'skyblue')}} >
      <span className={styles.messageId}>{props.message.id}</span>
      <span className={styles.messageValue}>{props.message.message}</span>
    </div>
  </div>
);}

TchatMessage.propTypes = { message: PropTypes.object.isRequired };

TchatMessage.defaultProps = {};

export default TchatMessage;
