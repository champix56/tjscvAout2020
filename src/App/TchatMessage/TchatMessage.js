import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatMessage.module.scss';

const TchatMessage = (props) => (
  <div className={styles.TchatMessage} data-testid="TchatMessage">
    <span className={styles.messageId}>{props.message.id}</span>
    <span className={styles.messageValue}>{props.message.message}</span>
  </div>
);

TchatMessage.propTypes = {message:PropTypes.object.isRequired};

TchatMessage.defaultProps = {};

export default TchatMessage;
